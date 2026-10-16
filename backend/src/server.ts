import "dotenv/config";

import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import helmet from "@fastify/helmet";
import { Resend } from "resend";

import { contatoSchema } from "./contato.schema.js";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(texto: string) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function buildApp() {
  const app = Fastify({
    logger: true,
    bodyLimit: 16 * 1024,
  });

  await app.register(helmet);

  await app.register(cors, {
    origin: process.env.FRONTEND_URL,
  });

  await app.register(rateLimit, {
    global: false,
  });

  app.setErrorHandler((error, request, reply) => {
    const statusCode =
      error instanceof Error && "statusCode" in error
        ? Number(error.statusCode)
        : 500;

    request.log.error(
      {
        statusCode,
        method: request.method,
        url: request.url,
      },
      "Erro na requisição"
    );

    if (statusCode === 429) {
      return reply.status(429).send({
        success: false,
        message: "Muitas tentativas. Aguarde um momento e tente novamente.",
      });
    }

    if (statusCode === 413) {
      return reply.status(413).send({
        success: false,
        message: "A mensagem enviada é muito grande.",
      });
    }

    return reply.status(500).send({
      success: false,
      message: "Ocorreu um erro interno. Tente novamente mais tarde.",
    });
  });

  app.get(
    "/health",
    {
      config: {
        rateLimit: false,
      },
    },
    async () => {
      return {
        status: "ok",
        message: "Backend funcionando!",
      };
    }
  );

  app.post(
    "/api/contato",
    {
      config: {
        rateLimit: {
          max: 5,
          timeWindow: "1 minute",
        },
      },
    },
    async (request, reply) => {
      const resultado = contatoSchema.safeParse(request.body);

      if (!resultado.success) {
        return reply.status(400).send({
          success: false,
          message: "Dados inválidos.",
          errors: resultado.error.flatten().fieldErrors,
        });
      }

      const contato = resultado.data;

      const nome = escapeHtml(contato.nome);
      const email = escapeHtml(contato.email);
      const mensagem = escapeHtml(contato.mensagem);

      const { error } = await resend.emails.send({
      from: "Hinfo <onboarding@resend.dev>",
      to: ["felipefariahinfo@gmail.com"],
      subject: "Novo contato pelo site - Hinfo",
      html: `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Novo contato pelo site</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #f4f4f5;
          font-family: Arial, Helvetica, sans-serif;
          color: #222222;
        "
      >
        <div
          style="
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          "
        >
          <!-- Cabeçalho -->
          <div
            style="
              background: linear-gradient(135deg, #b455dc, #8649c8);
              padding: 30px;
              text-align: center;
            "
          >
            <h1
              style="
                margin: 0;
                color: #ffffff;
                font-size: 24px;
              "
            >
              Humberto Informática
            </h1>

            <p
              style="
                margin: 8px 0 0;
                color: #f4eaff;
                font-size: 14px;
              "
            >
              Novo contato recebido pelo site
            </p>
          </div>

          <!-- Conteúdo -->
          <div style="padding: 30px;">
            <p
              style="
                margin-top: 0;
                font-size: 16px;
                color: #333333;
              "
            >
              Você recebeu uma nova mensagem através do formulário de contato
              do site.
            </p>

            <!-- Nome -->
            <div
              style="
                margin-top: 24px;
                padding: 16px;
                background-color: #f8f8f8;
                border-radius: 8px;
              "
            >
              <p
                style="
                  margin: 0 0 6px;
                  font-size: 12px;
                  font-weight: bold;
                  color: #8649c8;
                  text-transform: uppercase;
                "
              >
                Nome
              </p>

              <p
                style="
                  margin: 0;
                  font-size: 16px;
                  color: #222222;
                "
              >
                ${nome}
              </p>
            </div>

            <!-- E-mail -->
            <div
              style="
                margin-top: 12px;
                padding: 16px;
                background-color: #f8f8f8;
                border-radius: 8px;
              "
            >
              <p
                style="
                  margin: 0 0 6px;
                  font-size: 12px;
                  font-weight: bold;
                  color: #8649c8;
                  text-transform: uppercase;
                "
              >
                E-mail
              </p>

              <p
                style="
                  margin: 0;
                  font-size: 16px;
                  color: #222222;
                "
              >
                ${email}
              </p>
            </div>

            <!-- Mensagem -->
            <div
              style="
                margin-top: 12px;
                padding: 16px;
                background-color: #f8f8f8;
                border-radius: 8px;
              "
            >
              <p
                style="
                  margin: 0 0 6px;
                  font-size: 12px;
                  font-weight: bold;
                  color: #8649c8;
                  text-transform: uppercase;
                "
              >
                Mensagem
              </p>

              <p
                style="
                  margin: 0;
                  font-size: 16px;
                  line-height: 1.6;
                  color: #222222;
                  white-space: pre-line;
                "
              >
                ${mensagem}
              </p>
            </div>
          </div>

          <!-- Rodapé -->
          <div
            style="
              padding: 20px 30px;
              background-color: #303030;
              text-align: center;
            "
          >
            <p
              style="
                margin: 0;
                color: #ffffff;
                font-size: 13px;
              "
            >
              Humberto Informática
            </p>

            <p
              style="
                margin: 6px 0 0;
                color: #bbbbbb;
                font-size: 12px;
              "
            >
              Serviços e soluções em tecnologia
            </p>
          </div>
        </div>
      </body>
    </html>
  `,
});

      if (error) {
        request.log.error("Erro ao enviar e-mail pelo Resend");

        return reply.status(500).send({
          success: false,
          message:
            "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
        });
      }

      app.log.info("Contato recebido e enviado com sucesso");

      return reply.send({
        success: true,
        message: "Mensagem enviada com sucesso!",
      });
    }
  );

  return app;
}

const start = async () => {
  try {
    const app = await buildApp();

    await app.listen({
      port: Number(process.env.PORT) || 3000,
      host: "127.0.0.1",
    });

    console.log(
      `Servidor rodando em http://127.0.0.1:${process.env.PORT || 3000}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();