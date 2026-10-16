export function Hero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden bg-zinc-900 flex items-center">
      
      {/* Imagem de Fundo Escura */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/background.svg')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent" />

      {/* Onda de Fundo SVG */}
      <img
        src="/assets/deformeHero.svg" 
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 h-full w-full md:w-3/5 object-cover object-left pointer-events-none"
      />

      {/* Container Principal do Conteúdo */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-12 flex items-center">
        
        {/* Box de Texto */}
        <div className="max-w-xl text-left flex flex-col items-start lg:ml-8">
          
          {/* Título Principal inteiramente em Branco */}
          <h1 className="!text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Pare de <span className="font-bold text-yellow-300">perder</span> espaço para a{' '}
            <span className="font-bold text-yellow-300">concorrência</span>{' '}
            <span className="font-bold text-yellow-300">Domine</span> o mercado com um site de{' '}
            <span className="font-bold text-yellow-300">alta conversão.</span>
          </h1>

          {/* Subtítulo em Branco */}
          <p className="mt-5 text-white text-sm md:text-base max-w-md font-light leading-relaxed">
            Desenvolvemos sites profissionais sob medida para destacar sua empresa e gerar novos clientes.
          </p>

        </div>

      </div>
    </section>
  )
}