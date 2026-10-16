export function Footer() {
  return (
    <footer className="w-full bg-[#292929] px-6 py-12 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo + descrição */}
          <div className="flex flex-col">
            <img
              src="/assets/logoFooter.svg"
              alt="Hinfo"
              className="mb-3 h-auto w-[100px]"
            />

            <p className="text-left max-w-[230px] text-[15px] leading-[1.25] text-white">
              Desenvolvemos soluções de software sob medida para o seu negócio
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3">
            <a
              href="#sobre"
              className="text-[15px] transition-opacity hover:opacity-60"
            >
              Sobre
            </a>

            <a
              href="#servicos"
              className="text-[15px] transition-opacity hover:opacity-60"
            >
              Serviços
            </a>

            <a
              href="#solucoes"
              className="text-[15px] transition-opacity hover:opacity-60"
            >
              Soluções
            </a>

            <a
              href="#contato"
              className="text-[15px] transition-opacity hover:opacity-60"
            >
              Contato
            </a>
          </nav>

          {/* Informações de contato */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contato@hinfo.com"
              className="text-[15px] transition-opacity hover:opacity-60"
            >
              contato@hinfo.com
            </a>

            <a
              href="tel:+5521970713045"
              className="text-[15px] transition-opacity hover:opacity-60"
            >
              Telefone: (21) 90000-0000
            </a>

            <span className="text-[15px]">
              São João de Meriti - RJ
            </span>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-[14px] text-white">
            © 2026 Hinfo. Desenvolvida por Felipe Rodrigo.
          </p>
        </div>

      </div>
    </footer>
  );
}