import { useState } from "react";

export function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setEnviando(true);
    setStatus("");

    try {
      const resposta = await fetch(
        "http://127.0.0.1:3000/api/contato",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            email,
            mensagem,
          }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        setStatus(dados.message || "Não foi possível enviar.");
        return;
      }

      setStatus("Mensagem enviada com sucesso!");

      setNome("");
      setEmail("");
      setMensagem("");
    } catch {
      setStatus("Não foi possível conectar ao servidor.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section
      id="contato"
      className="
        relative
        min-h-[600px]
        w-full
        overflow-hidden
      "
    >
      {/* Fundo em degradê */}
      <img
        src="/assets/bgDegrade.svg"
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Linhas decorativas */}
      <img
        src="/assets/efeitoFundo02.svg"
        alt=""
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-20
          md:px-12
          lg:px-20
        "
      >
        {/* Título */}
        <div className="mb-12 text-center">
          <h2
            className="
              text-[32px]
              font-bold
              !text-black
              md:text-[40px]
            "
          >
            CONTATO
          </h2>

          <div
            className="
              mx-auto
              mt-3
              h-[2px]
              max-w-[385px]
              bg-gradient-to-r
              from-[#C85BF2]
              to-[#9C4BD5]
            "
          />
        </div>

        {/* Formulário + forma */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Formulário */}
          <div
            className="
              mx-auto
              w-full
              max-w-[430px]
              rounded-[14px]
              bg-gradient-to-br
              from-[#B455DC]
              to-[#8649C8]
              p-5
              shadow-[0_10px_25px_rgba(0,0,0,0.25)]
            "
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <h3 className="text-[18px] font-medium text-black">
                Contato
              </h3>

              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(event) =>
                  setNome(event.target.value)
                }
                className="
                  h-[44px]
                  rounded-[7px]
                  bg-white
                  px-4
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                className="
                  h-[44px]
                  rounded-[7px]
                  bg-white
                  px-4
                  outline-none
                "
              />

              <textarea
                placeholder="Mensagem"
                rows={5}
                value={mensagem}
                onChange={(event) =>
                  setMensagem(event.target.value)
                }
                className="
                  resize-none
                  rounded-[7px]
                  bg-white
                  px-4
                  py-3
                  outline-none
                "
              />

              <button
                type="submit"
                disabled={enviando}
                className="
                  w-fit
                  rounded-full
                  bg-[#303030]
                  px-6
                  py-2
                  text-white
                  transition
                  hover:bg-black
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {enviando ? "enviando..." : "enviar"}
              </button>

              {status && (
                <p className="text-sm font-medium text-black">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Forma SVG - somente no desktop */}
          <div
            className="
              hidden
              items-center
              justify-center
              lg:flex
            "
          >
            <img
              src="/assets/formaContato.svg"
              alt=""
              className="
                w-[400px]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}