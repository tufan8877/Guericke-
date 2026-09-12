interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro: string;
}

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: PageHeaderProps) {
  return (
    <section className="bg-warmwhite border-b border-anthracite/10">
      <div className="container-page py-14 lg:py-20">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="heading-1 mb-5 max-w-3xl">{title}</h1>
        <p className="text-lg text-anthracite/70 leading-relaxed max-w-2xl">
          {intro}
        </p>
      </div>
    </section>
  );
}
