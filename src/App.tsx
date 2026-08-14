import { useMemo, useState } from 'react';
import { CATEGORIES, type Category } from './data/config';
import { menu } from './data/menu';
import Hero from './components/Hero';
import InfoGrid from './components/InfoGrid';
import CategoryFilter from './components/CategoryFilter';
import MenuFeed from './components/MenuFeed';
import WhatsAppFAB from './components/WhatsAppFAB';
import { Flame } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState<Category>(CATEGORIES[0]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const item of menu) c[item.category] = (c[item.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(
    () => menu.filter((i) => i.category === active),
    [active],
  );

  return (
    <div className="min-h-screen bg-charcoal">
      <Hero />
      <InfoGrid />

      {/* Menu section */}
      <section id="menu" className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 text-gold">
            <Flame className="h-5 w-5" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.3em]">
              Nuestro Menú
            </span>
            <Flame className="h-5 w-5" />
          </div>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl tracking-wide text-white">
            Elegí tu favorito
          </h2>
        </div>

        <CategoryFilter active={active} onChange={setActive} counts={counts} />

        <MenuFeed items={filtered} />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-deepgrey">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center">
          <p className="font-display text-3xl tracking-wider text-white">
            DE LA GRAN <span className="text-gold">·</span>{' '}
            <span className="text-gold">Burger</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Encarnación, Paraguay · Hecho con mucho amor
          </p>
        </div>
      </footer>

      <WhatsAppFAB />
    </div>
  );
}
