import { type MenuItem } from '../data/menu';
import { formatPrice } from '../utils/format';
import { Star, Egg, Beef, ChevronRight } from 'lucide-react';

const TOPPINGS = [
  { name: 'Huevo', icon: Egg },
  { name: 'Bacon', icon: Beef },
  { name: 'Doble Cheddar', icon: Star },
];

type Props = { items: MenuItem[] };

export default function MenuFeed({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500 font-heading uppercase tracking-wider">
        No hay items en esta categoría
      </div>
    );
  }

  return (
    <div
      key={items[0]?.category}
      className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item, i) => {
        if (item.isToppings) {
          return (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-deepgrey to-charcoal p-5 transition-all duration-300 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10"
              style={{
                animation: `fadeIn 0.45s ease-out ${Math.min(i * 60, 480)}ms both`,
              }}
            >
              <h3 className="font-display text-2xl tracking-wide text-gold">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{item.description}</p>
              <div className="mt-4 space-y-2">
                {TOPPINGS.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                  >
                    <span className="flex items-center gap-2 text-sm text-gray-300">
                      <t.icon className="h-4 w-4 text-gold" />
                      {t.name}
                    </span>
                    <span className="font-heading text-sm font-bold text-gold">
                      {formatPrice(item.price!)} c/u
                    </span>
                  </div>
                ))}
              </div>
            </article>
          );
        }

        const isPromo = item.category === 'Promociones';

        return (
          <article
            key={item.id}
            className={`group overflow-hidden rounded-2xl border bg-deepgrey transition-all duration-300 hover:shadow-xl hover:shadow-black/40 ${
              isPromo
                ? 'border-ember/50 hover:border-ember'
                : 'border-white/10 hover:border-gold/40'
            }`}
            style={{
              animation: `fadeIn 0.45s ease-out ${Math.min(i * 60, 480)}ms both`,
            }}
          >
            {/* image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-chalkboard">
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-chalkboard to-charcoal">
                <span className="font-display text-5xl text-white/5 tracking-wide">
                  {item.name.slice(0, 2)}
                </span>
              </div>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              {item.badge && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-ember px-2.5 py-1 font-heading text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                  <Star className="h-3 w-3 fill-white" />
                  {item.badge}
                </span>
              )}
            </div>

            {/* body */}
            <div className="p-5">
              <h3 className="font-display text-2xl tracking-wide text-white leading-snug">
                {item.name}
              </h3>
              {item.description && (
                <p className="mt-1.5 text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              )}
              <div className="mt-4 flex items-center justify-between">
                {item.oldPrice ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-lg font-black text-ember line-through">
                      {formatPrice(item.oldPrice)}
                    </span>
                    <span className="font-display text-2xl text-gold">
                      {formatPrice(item.price!)}
                    </span>
                  </div>
                ) : item.promoText ? (
                  <span className="font-heading text-base font-black uppercase tracking-wide text-ember">
                    {item.promoText}
                  </span>
                ) : (
                  <span className="font-display text-3xl text-gold">
                    {formatPrice(item.price!)}
                  </span>
                )}
                <ChevronRight className="h-5 w-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
