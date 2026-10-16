export function Solucoes() {
  const solucoes = [
    {
      icone: "/assets/lupa.svg",
      titulo: "SEO",
      descricao:
        "Estruturamos seu site com as melhores práticas de SEO para melhorar seu posicionamento nas pesquisas e atrair tráfego orgânico.",
    },
    {
      icone: "/assets/estatistica.svg",
      titulo: "Conversão",
      descricao:
        "Criação de landing pages focadas em conversão, cardápios e catálogos digitais práticos e responsivos para o seu negócio.",
    },
    {
      icone: "/assets/nuvem.svg",
      titulo: "Experiência",
      descricao:
        "Desenvolvemos layouts modernos e intuitivos, garantindo uma navegação fluida em celulares, tablets e computadores.",
    },
  ];

  return (
    <section
      id="solucoes"
      className="w-full bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Título */}
        <div className="mb-14 text-center">
          <h2 className="text-[32px] font-bold leading-tight !text-black md:text-[40px]">
            SOLUÇÕES
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-full max-w-[385px] bg-gradient-to-r from-[#C85BF2] to-[#9C4BD5]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {solucoes.map((solucao) => (
            <div
              key={solucao.titulo}
              className="
                flex
                min-h-[260px]
                flex-col
                items-center
                rounded-[16px]
                bg-white
                px-5
                py-8
                text-center
                shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_14px_35px_rgba(145,73,212,0.20)]
              "
            >

              {/* Ícone SVG */}
              <div className="mb-7 flex h-[90px] w-[90px] items-center justify-center">
                <img
                  src={solucao.icone}
                  alt={solucao.titulo}
                  className="h-[75px] w-[75px] object-contain"
                />
              </div>

              {/* Texto */}
              <p className="max-w-[230px] text-[14px] leading-[1.35] text-[#A0A0A0]">
                {solucao.descricao}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}