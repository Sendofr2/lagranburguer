import { useRef, type Dispatch, type SetStateAction } from 'react';
import { CATEGORIES, type Category } from '../data/config';

type Props = {
  active: Category;
  onChange: Dispatch<SetStateAction<Category>>;
  counts: Record<string, number>;
};

export default function CategoryFilter({ active, onChange, counts }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="no-scrollbar flex gap-2.5 overflow-x-auto px-6 pb-2 sm:justify-center"
    >
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        const count = counts[cat] ?? 0;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`group relative shrink-0 rounded-full px-5 py-2.5 font-heading text-sm font-bold uppercase tracking-wider transition-all active:scale-95 ${
              isActive
                ? 'bg-gold text-charcoal shadow-lg shadow-gold/30'
                : 'border border-white/12 bg-deepgrey text-gray-400 hover:border-gold/50 hover:text-gold'
            }`}
          >
            {cat}
            <span
              className={`ml-2 inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-black ${
                isActive
                  ? 'bg-charcoal/20 text-charcoal'
                  : 'bg-white/5 text-gray-500 group-hover:text-gold'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
