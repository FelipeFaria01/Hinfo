import { useRef, useState, type TouchEvent } from "react";

interface Servico {
  titulo: string;
  descricao: string;
  imagem: string;
}

type Posicao = "centro" | "direita" | "esquerda";

export function Servicos() {
  const servicos: Servico[] = [
    {
      titulo: "Landing Page",
      descricao: "Apresente seu negócio e conquiste novos clientes.",
      imagem: "/assets/landingPage.svg",
    },
    {
      titulo: "Cardápio Virtual",
      descricao:
        "Facilite seus pedidos com um cardápio moderno e acessível.",
      imagem: "/assets/cardapioVirtual.svg",
    },
    {
      titulo: "Catálogo Virtual",
      descricao: "Mostre seus produtos e facilite suas vendas.",
      imagem: "/assets/catalogo.svg",
    },
  ];

  /* ==========================================================
     CONTROLE DO CARROSSEL
  ========================================================== */

  const [indiceAtual, setIndiceAtual] = useState(0);

  const toqueInicial = useRef(0);

  function proximoServico() {
    setIndiceAtual((indice) => {
      return (indice + 1) % servicos.length;
    });
  }

  function servicoAnterior() {
    setIndiceAtual((indice) => {
      return (indice - 1 + servicos.length) % servicos.length;
    });
  }

  /* ==========================================================
     ARRASTAR NO CELULAR / TABLET
  ========================================================== */

  function iniciarArraste(event: TouchEvent<HTMLDivElement>) {
    toqueInicial.current = event.touches[0].clientX;
  }

  function finalizarArraste(event: TouchEvent<HTMLDivElement>) {
    const toqueFinal = event.changedTouches[0].clientX;

    const distancia = toqueFinal - toqueInicial.current;

    // Ignora toques muito pequenos
    if (Math.abs(distancia) < 50) {
      return;
    }

    // Arrastou para esquerda
    if (distancia < 0) {
      proximoServico();
    } else {
      // Arrastou para direita
      servicoAnterior();
    }
  }

  /* ==========================================================
     DETERMINA A POSIÇÃO DE CADA CARD
  ========================================================== */

  function obterPosicao(index: number): Posicao {
    const diferenca =
      (index - indiceAtual + servicos.length) % servicos.length;

    if (diferenca === 0) {
      return "centro";
    }

    if (diferenca === 1) {
      return "direita";
    }

    return "esquerda";
  }

  /* ==========================================================
     ESTILO DOS CARDS DO CARROSSEL
  ========================================================== */

  function obterEstilo(posicao: Posicao) {
    if (posicao === "centro") {
      return {
        transform: "translate(-50%, -50%) scale(1) rotateY(0deg)",
        zIndex: 20,
        opacity: 1,
      };
    }

    if (posicao === "direita") {
      return {
        transform: "translate(35%, -50%) scale(0.78) rotateY(-8deg)",
        zIndex: 10,
        opacity: 0.6,
      };
    }

    return {
      transform: "translate(-135%, -50%) scale(0.78) rotateY(8deg)",
      zIndex: 10,
      opacity: 0.6,
    };
  }

  /* ==========================================================
     CARD
  ========================================================== */

  function CardServico({
    servico,
    tamanhoTitulo = "text-[24px]",
  }: {
    servico: Servico;
    tamanhoTitulo?: string;
  }) {
    return (
      <div
        className="
          group
          relative
          flex
          min-h-[345px]
          w-full
          cursor-pointer
          flex-col
          overflow-hidden
          rounded-[45px]
          bg-gradient-to-b
          from-[#5143A0]
          to-[#D05AF4]
          p-5
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
        "
      >
        {/* ==================================================
            IMAGEM
        ================================================== */}

        <div
          className="
            h-[145px]
            w-full
            overflow-hidden
            rounded-[28px]
            bg-white
          "
        >
          <img
            src={servico.imagem}
            alt={servico.titulo}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* ==================================================
            CONTEÚDO
        ================================================== */}

        <div className="flex flex-1 flex-col pt-5">
          <h3
            className={`
              ${tamanhoTitulo}
              font-medium
              leading-[1.15]
              text-white
            `}
          >
            {servico.titulo}
          </h3>

          <p
            className="
              mt-3
              max-w-[270px]
              text-[17px]
              leading-[1.3]
              text-white
            "
          >
            {servico.descricao}
          </p>

          {/* ==================================================
              SETA DO CARD
          ================================================== */}

          <div className="mt-auto flex justify-end pt-4">
            <span
              className="
                text-[34px]
                leading-none
                text-white
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              &gt;
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="servicos"
      className="
        mt-60
        w-full
        bg-white
        px-6
        py-20
        md:px-12
        lg:px-20
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* ======================================================
            TÍTULO
        ====================================================== */}

        <div className="mb-14 text-center">
          <h2
            className="
              text-[32px]
              font-bold
              leading-tight
              !text-black
              md:text-[40px]
            "
          >
            SERVIÇOS
          </h2>

          <div
            className="
              mx-auto
              mt-3
              h-[2px]
              w-full
              max-w-[385px]
              bg-gradient-to-r
              from-[#C85BF2]
              to-[#9C4BD5]
            "
          />
        </div>

        {/* ======================================================
            CELULAR + TABLET
            CARROSSEL
        ====================================================== */}

        <div
          className="
            relative
            block
            h-[520px]
            lg:hidden
          "
          onTouchStart={iniciarArraste}
          onTouchEnd={finalizarArraste}
        >
          {/* ==================================================
              SETA ESQUERDA
          ================================================== */}

          <button
            type="button"
            onClick={servicoAnterior}
            aria-label="Serviço anterior"
            className="
              absolute
              left-0
              top-1/2
              z-40
              flex
              h-[100px]
              w-[55px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-[14px]
              bg-[#363636]
              text-[42px]
              leading-none
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#222222]
            "
          >
            &lt;
          </button>

          {/* ==================================================
              SETA DIREITA
          ================================================== */}

          <button
            type="button"
            onClick={proximoServico}
            aria-label="Próximo serviço"
            className="
              absolute
              right-0
              top-1/2
              z-40
              flex
              h-[100px]
              w-[55px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-[14px]
              bg-[#363636]
              text-[42px]
              leading-none
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#222222]
            "
          >
            &gt;
          </button>

          {/* ==================================================
              CARDS
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              overflow-hidden
            "
            style={{
              perspective: "1200px",
            }}
          >
            {servicos.map((servico, index) => {
              const posicao = obterPosicao(index);
              const estilo = obterEstilo(posicao);

              return (
                <div
                  key={servico.titulo}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[445px]
                    w-[calc(100vw-80px)]
                    max-w-[330px]
                    transition-all
                    duration-500
                    ease-in-out
                  "
                  style={{
                    transform: estilo.transform,
                    zIndex: estilo.zIndex,
                    opacity: estilo.opacity,
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                  }}
                >
                  <CardServico
                    servico={servico}
                    tamanhoTitulo="text-[23px]"
                  />
                </div>
              );
            })}
          </div>

          {/* ==================================================
              INDICADORES
          ================================================== */}

          <div
            className="
              absolute
              bottom-2
              left-1/2
              flex
              -translate-x-1/2
              gap-2
            "
          >
            {servicos.map((servico, index) => (
              <button
                key={servico.titulo}
                type="button"
                onClick={() => {
                  setIndiceAtual(index);
                }}
                aria-label={`Mostrar ${servico.titulo}`}
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === indiceAtual
                      ? "w-8 bg-[#9C4BD5]"
                      : "w-2.5 bg-[#D1D1D1]"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            DESKTOP
            3 CARDS
        ====================================================== */}

        <div
          className="
            hidden
            grid-cols-3
            gap-8
            lg:grid
          "
        >
          {servicos.map((servico) => (
            <CardServico
              key={servico.titulo}
              servico={servico}
            />
          ))}
        </div>

        {/* ======================================================
            BOTÃO VEJA MAIS
        ====================================================== */}

        <div
          className="
            mt-9
            flex
            justify-center
            lg:justify-end
          "
        >
          <a
            href="#servicos"
            className="
              rounded-[12px]
              bg-[#363636]
              px-10
              py-3
              text-[16px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-black
            "
          >
            veja mais
          </a>
        </div>
      </div>
    </section>
  );
}