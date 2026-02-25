import { SoftwareCard } from "./SoftwareCard";

interface RelatedSoftwareProps {
  items: any[];
  title: string;
  subtitle?: string;
}

export const RelatedSoftware = ({ items, title, subtitle }: RelatedSoftwareProps) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <SoftwareCard key={item.id} software={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
