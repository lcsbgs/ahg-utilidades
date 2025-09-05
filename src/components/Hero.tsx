'use client';

const Hero = () => {
  const scrollToProducts = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('produtos')?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          {/* Visual (agora do lado esquerdo) */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src="/images/items/capa.png"
                alt="Produto em destaque"
                className="h-full w-full object-fit"
              />
            </div>
          </div>

          {/* Texto (agora do lado direito) */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Móveis artesanais, sem excessos.
            </h1>

            <p className="mx-auto max-w-prose text-base leading-relaxed text-gray-600 sm:text-lg">
              Peças únicas em madeira, feitas para durar e combinar com a sua casa. Só o essencial:
              bom design, bons materiais e bom acabamento.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              >
                Ver coleção
              </button>

              <a
                href="#sobre"
                className="text-sm font-medium text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-gray-900"
              >
                Sobre a marca
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* fundo leve */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-50" />
    </section>
  );
};

export default Hero;
