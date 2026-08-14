import { ADDRESS, SCHEDULE, MAPS_LINK, WHATSAPP_LINK, PHONE_DISPLAY } from '../data/config';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';

const scheduleRows = [
  ['Viernes', SCHEDULE.viernes],
  ['Sábado', SCHEDULE.sabado],
  ['Domingo', SCHEDULE.domingo],
  ['Lunes', SCHEDULE.lunes],
  ['Martes', SCHEDULE.martes],
  ['Miércoles', SCHEDULE.miercoles],
  ['Jueves', SCHEDULE.jueves],
] as const;

export default function InfoGrid() {
  return (
    <section id="info" className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Address card */}
        <div className="rounded-2xl border border-white/10 bg-deepgrey p-6 transition-colors hover:border-gold/40">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading font-bold uppercase tracking-wider text-gold text-sm">
                Dirección
              </h3>
              <p className="mt-1.5 text-gray-300 text-sm leading-relaxed">
                {ADDRESS}
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-charcoal"
              >
                <Navigation className="h-3.5 w-3.5" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>

        {/* Schedule card */}
        <div className="rounded-2xl border border-white/10 bg-deepgrey p-6 transition-colors hover:border-gold/40">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
              <Clock className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-heading font-bold uppercase tracking-wider text-gold text-sm">
                Horarios
              </h3>
              <ul className="mt-2 space-y-1 text-sm">
                {scheduleRows.map(([day, hours]) => (
                  <li key={day} className="flex items-center justify-between gap-4">
                    <span className="text-gray-400">{day}</span>
                    <span className={hours === 'Cerrado' ? 'text-ember-light' : 'font-semibold text-gray-200'}>
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact / Delivery card */}
        <div className="rounded-2xl border border-white/10 bg-deepgrey p-6 transition-colors hover:border-gold/40">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading font-bold uppercase tracking-wider text-gold text-sm">
                Contacto / Delivery
              </h3>
              <p className="mt-1.5 text-gray-300 text-sm leading-relaxed">
                {PHONE_DISPLAY}
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-charcoal"
              >
                <Phone className="h-3.5 w-3.5" />
                Pedí por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
