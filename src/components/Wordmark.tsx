import { company } from '@/config/company';

interface WordmarkProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export default function Wordmark({
  variant = 'dark',
  size = 'md',
}: WordmarkProps) {
  const textColor = variant === 'dark' ? 'text-navy' : 'text-warmwhite';
  const subColor = variant === 'dark' ? 'text-anthracite/60' : 'text-warmwhite/50';
  const sloganColor = variant === 'dark' ? 'text-copper' : 'text-copper-200';

  const sizes = {
    sm: { main: 'text-lg', sub: 'text-[8px]', slogan: 'text-[8px]', gap: 'gap-0.5' },
    md: { main: 'text-2xl', sub: 'text-[10px]', slogan: 'text-[9px]', gap: 'gap-1' },
    lg: { main: 'text-4xl', sub: 'text-sm', slogan: 'text-xs', gap: 'gap-1.5' },
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col ${s.gap} leading-none`}>
      <span className={`font-serif font-bold tracking-[0.05em] ${s.main} ${textColor}`}>
        {company.wordmark}
      </span>
      <span className={`font-sans font-medium tracking-[0.3em] ${s.sub} ${subColor}`}>
        {company.submark}
      </span>
      <span className={`font-sans tracking-[0.25em] ${s.slogan} ${sloganColor}`}>
        {company.slogan}
      </span>
    </div>
  );
}
