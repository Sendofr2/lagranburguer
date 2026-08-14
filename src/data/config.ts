export const REVENUE_CURRENCY = 'Gs.';
export const WHATSAPP_NUMBER = '+595985106562';
export const PHONE_DISPLAY = '+595 985 106562';
export const ADDRESS =
  'Barrio Kennedy, Encarnación 6000, Paraguay';
export const SCHEDULE = {
  todos_los_dias: 'Lunes a Domingo · Desde las 19:00 hs.',
} as const;

export const BRAND_NAME = 'De la Gran Burger';
export const BRAND_TAGLINE = 'Especialistas en Hamburguesas y Lomitos';
export const BRAND_LOCATION = 'Encarnación, Paraguay';

export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Barrio+Kennedy+Encarnacion+6000+Paraguay';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(
  /[^0-9]/g,
  '')}?text=${encodeURIComponent(
  '¡Hola De la Gran Burger! Estoy viendo el menú web y quiero hacer un pedido.',
)}`;

export const CATEGORIES = [
  'Combos Clásicos',
  'Hamburguesas',
  'Lomitos',
  'Promociones',
] as const;

export type Category = (typeof CATEGORIES)[number];
