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
  const cur = now.getHours() * 60 + now.getMinutes();
  const startM = parseHour('19:00');
  const open = cur >= startM;
  return {
    open,
    label: open ? 'Abierto ahora' : 'Cerrado ahora',
    detail: 'Todos los días · Desde las 19:00',
  };
}
