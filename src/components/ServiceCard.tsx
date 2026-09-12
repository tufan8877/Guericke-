import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ServiceInfo } from '@/config/services';

interface ServiceCardProps {
  service: ServiceInfo;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white border border-anthracite/10 transition-all duration-300 hover:shadow-lg hover:border-copper/30 overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden bg-anthracite/5">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-7">
        <h3 className="font-serif text-xl text-navy mb-3">{service.title}</h3>
        <p className="text-sm text-anthracite/70 leading-relaxed mb-5">
          {service.shortDescription}
        </p>
        <ul className="space-y-1.5 mb-6">
          {service.services.slice(0, 5).map((s) => (
            <li
              key={s}
              className="text-sm text-anthracite/60 flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-copper rounded-full" />
              {s}
            </li>
          ))}
        </ul>
        <Link
          to={service.route}
          className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-copper transition-colors"
        >
          Mehr zu {service.title}
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
