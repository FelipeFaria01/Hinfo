export function Sobre() {
  return (
    <section
      id="sobre"
      className="relative w-full bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      {/* Forma roxa como fundo - somente celular */}
      <div className="pointer-events-none absolute inset-0 z-0 mb-20 md:hidden">
        <img
          src="/assets/forma.svg"
          alt=""
          className="
            absolute
            left-1/2
            top-1/2
            h-auto
            w-[115%]
            -translate-x-1/2
            -translate-y-1/2
            opacity-[0.10]
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_85%,transparent_100%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-24">
        {/* Forma roxa - tablet e desktop */}
        <div className="hidden items-center justify-center md:flex">
          <img
            src="/assets/forma.svg"
            alt=""
            className="h-[350px] w-auto md:h-[350px] lg:h-[600px]"
          />
        </div>

        {/* Conteúdo */}
        <div className="max-w-[530px]">
          <h2 className="!text-[36px] font-bold text-center leading-tight !text-black md:text-left md:text-[40px]">
            Sobre nós
          </h2>

          {/* Linha abaixo do título */}
          <div
            className="
              mx-auto
              mt-3
              mb-15
              h-[2px]
              w-full
              max-w-[175px]
              bg-gradient-to-r
              from-[#C85BF2]
              to-[#9C4BD5]
              md:mx-0
            "
          />

          {/* Primeiro texto */}
          <p className="!mb-15 text-[20px] text-center leading-[1.4] text-black md:text-left">
            Atuamos no desenvolvimento de soluções web sob medida,
            estruturando desde landing pages estratégicas a plataformas
            institucionais. Nosso compromisso é entregar uma presença
            digital sólida, alinhada aos objetivos comerciais de cada
            cliente.
          </p>

          {/* Segundo texto */}
          <p className="!mb-15 text-[20px] leading-[1.4] text-center text-black md:text-left">
            Desenvolvemos projetos exclusivos priorizando arquitetura
            de código, otimização de desempenho e usabilidade. Cada
            detalhe é planejado para oferecer uma navegação intuitiva
            e transformar acessos em oportunidades reais de negócio.
          </p>

          {/* Engrenagens */}
          <div className="mt-5 flex items-center justify-center text-[#9149D4] md:justify-start">
            <img
              src="/assets/engrenagem.svg"
              alt=""
              className="h-[120px] w-auto sm:h-[150px] md:h-[175px] lg:h-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}