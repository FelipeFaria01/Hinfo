import { useState } from "react";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="relative w-full bg-white px-4 py-4 shadow-sm sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/assets/LOGO.svg"
            alt="Hinfo Logo"
            className="h-7 w-auto sm:h-8 md:h-9 lg:h-10"
          />
        </a>

        {/* Navegação - aparece somente no PC */}
        <nav className="hidden items-center gap-7 text-base font-medium text-gray-800 lg:flex">
          <a
            href="#sobre"
            className="transition-colors hover:text-purple-600"
          >
            sobre
          </a>

          <a
            href="#servicos"
            className="transition-colors hover:text-purple-600"
          >
            serviços
          </a>

          <a
            href="#solucoes"
            className="transition-colors hover:text-purple-600"
          >
            soluções
          </a>
        </nav>

        {/* Contato - aparece somente no PC */}
        <a
          href="#contato"
          className="hidden rounded-full bg-zinc-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 lg:block"
        >
          contato
        </a>

        {/* Botão hamburger - aparece em tablet e celular */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-zinc-100 lg:hidden"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          {/* Linha 1 */}
          <span
            className={`absolute h-0.5 w-6 bg-zinc-800 transition-all duration-300 ${
              menuAberto ? "rotate-45" : "-translate-y-2"
            }`}
          />

          {/* Linha 2 */}
          <span
            className={`absolute h-0.5 w-6 bg-zinc-800 transition-all duration-300 ${
              menuAberto ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Linha 3 */}
          <span
            className={`absolute h-0.5 w-6 bg-zinc-800 transition-all duration-300 ${
              menuAberto ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Menu mobile/tablet */}
      <nav
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuAberto
            ? "mt-4 max-h-[300px] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 border-t border-gray-200 pt-4">
          <a
            href="#sobre"
            onClick={() => setMenuAberto(false)}
            className="rounded-lg px-3 py-2 font-medium text-gray-800 transition hover:bg-gray-100"
          >
            sobre
          </a>

          <a
            href="#servicos"
            onClick={() => setMenuAberto(false)}
            className="rounded-lg px-3 py-2 font-medium text-gray-800 transition hover:bg-gray-100"
          >
            serviços
          </a>

          <a
            href="#solucoes"
            onClick={() => setMenuAberto(false)}
            className="rounded-lg px-3 py-2 font-medium text-gray-800 transition hover:bg-gray-100"
          >
            soluções
          </a>

          <a
            href="#contato"
            onClick={() => setMenuAberto(false)}
            className="mt-1 rounded-full bg-zinc-800 px-5 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            contato
          </a>
        </div>
      </nav>
    </header>
  );
}