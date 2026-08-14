import { BRAND_NAME, BRAND_TAGLINE, BRAND_LOCATION } from '../data/config';
import { getOpenStatus } from '../utils/format';
import { ChevronDown, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  const status = getOpenStatus();

  return (
    <header className="relative overflow-hidden">
      {/* texture / vignette */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px, 64px 64px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gold/8 via-transparent to-charcoal" />

      {/* glow */}
      <div className="absolute left-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
        {/* logo placeholder */}
        <div className="mx-auto mb-6 grid h-28 w-28 sm:h-32 sm:w-32 place-items-center rounded-full border-2 border-gold/70 bg-gradient-to-br from-charcoal to-deepgrey shadow-[0_0_40px_-8px_rgba(244,208,63,0.4)]">
          <span className="text-center font-heading text-[11px] sm:text-xs font-black uppercase leading-tight text-gold tracking-tight">
            De la<br />Gran<br />Burger
          </span>
        </div>

        {/* status badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-deepgrey/80 px-3.5 py-1.5 mb-5 backdrop-blur">
          <span
            className={`h-2 w-2 rounded-full ${
              status.open ? 'bg-green-500 animate-pulseDot' : 'bg-ember'
            }`}
          />
          <span
            className={`font-heading text-sm font-bold tracking-wide ${
              status.open ? 'text-green-400' : 'text-ember-light'
            }`}
          >
            {status.label}
          </span>
          <span className="text-gray-500 text-xs">·</span>
          <span className="text-gray-400 text-xs">{status.detail}</span>
        </div>

        <h1 className="font-display text-6xl sm:text-8xl leading-[0.9] tracking-wide">
          <span className="text-white">DE LA GRAN</span>
          <span className="block text-gold mt-1 text-4xl sm:text-5xl">
            BURGER
          </span>
        </h1>

        <p className="mt-4 font-heading text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-gray-400">
          {BRAND_TAGLINE.toUpperCase()}
        </p>

        <p className="mt-5 max-w-xl mx-auto text-gray-500 text-sm sm:text-base text-balance">
          Las mejores hamburguesas y lomitos de Encarnación.
          Ingredientes frescos, sabor único y promociones imperdibles.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#menu"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-heading font-bold uppercase tracking-wider text-charcoal shadow-lg shadow-gold/30 transition-all hover:bg-gold-light hover:shadow-gold/40 active:scale-95"
          >
            <UtensilsCrossed className="h-5 w-5" />
            Ver Menú Interactivo
          </a>
          <a
            href="#info"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 px-6 py-3.5 font-heading font-bold uppercase tracking-wider text-gray-300 transition-all hover:border-gold/60 hover:text-gold active:scale-95"
          >
            Cómo llegar
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
