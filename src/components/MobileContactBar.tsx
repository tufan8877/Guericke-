import { Link } from 'react-router-dom';
import { Phone, Send } from 'lucide-react';
import { company } from '@/config/company';

export default function MobileContactBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-900 border-t border-copper/20">
      <div className="flex">
        <a
          href={`tel:${company.phoneHref}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-warmwhite active:bg-navy-700 transition-colors"
        >
          <Phone size={16} className="text-copper-200" />
          Anrufen
        </a>
        <div className="w-px bg-warmwhite/10" />
        <Link
          to="/kontakt"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-warmwhite active:bg-navy-700 transition-colors"
        >
          <Send size={16} className="text-copper-200" />
          Anfrage
        </Link>
      </div>
    </div>
  );
}
