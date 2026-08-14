import { REVENUE_CURRENCY } from '../data/config';

export function formatPrice(value: number): string {
  return `${REVENUE_CURRENCY} ${value.toLocaleString('es-PY')}`;
}

function parseHour(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

export function getOpenStatus(now: Date = new Date()): {
  open: boolean;
  label: string;
  detail: string;
} {
  const day = now.getDay();
  const cur = now.getHours() * 60 + now.getMinutes();
  const openingHours: Record<number, { start: string; end: string }> = {
    4: { start: '19:00', end: '22:30' },
    5: { start: '19:00', end: '23:00' },
    6: { start: '19:00', end: '23:00' },
  };
  const hours = openingHours[day];
  const open = hours
    ? cur >= parseHour(hours.start) && cur < parseHour(hours.end)
    : false;
  return {
    open,
    label: open ? 'Abierto ahora' : 'Cerrado ahora',
    detail: 'Jue 19:00–22:30 · Vie–Sáb 19:00–23:00',
  };
}
