export const REVENUE_CURRENCY = 'Gs.';
export const WHATSAPP_NUMBER = '+595985106562';
export const PHONE_DISPLAY = '+595 985 106562';
export const ADDRESS =
  'Barrio Kennedy, Encarnación 6000, Paraguay';
export const SCHEDULE = {
  viernes: '19:00 - 23:00',
  sabado: '19:00 - 23:00',
  domingo: 'Cerrado',
  lunes: 'Cerrado',
  martes: 'Cerrado',
  miercoles: 'Cerrado',
  jueves: '19:00 - 22:30',
} as const;

export const BRAND_NAME = 'De la Gran Burger';
export const BRAND_TAGLINE = 'Especialistas en Hamburguesas y Lomitos';
export const BRAND_LOCATION = 'Encarnación, Paraguay';

export const MAPS_LINK =
  'https://www.google.com/maps/place/De+la+Gran+Burger/@-27.3189145,-55.8881293,17z/data=!3m1!4b1!4m6!3m5!1s0x94579565e2fc449b:0x25e3150b3fb71e9c!8m2!3d-27.3189194!4d-55.8832584!16s%2Fg%2F11p0fxtzh7?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D';

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
