import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  slug: string;
  partner_type: string;
  region: string | null;
  logo_url: string | null;
  short_description: string | null;
  expertise_tags: any;
}

const typeConfig: Record<string, { label: string; className: string }> = {
  tech: {
    label: "Tech Partner",
    className: "bg-blue-100 text-blue-800 border-blue-200",
  },
  agency: {
    label: "Agency Partner",
    className: "bg-green-100 text-green-800 border-green-200",
  },
  country: {
    label: "Country Partner",
    className: "bg-purple-100 text-purple-800 border-purple-200",
  },
};

export const PartnerCard = ({ partner }: { partner: Partner }) => {
  const type = typeConfig[partner.partner_type] || typeConfig.agency;
  const tags = Array.isArray(partner.expertise_tags)
    ? partner.expertise_tags
    : [];
  const profileUrl = `/agency/partners/${partner.partner_type === "agency" ? "agencies" : partner.partner_type === "country" ? "countries" : "tech"}/${partner.slug}`;

  const initials = partner.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="webfx-card p-6 flex flex-col h-full group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {partner.logo_url ? (
            <img
              src={partner.logo_url}
              alt={`${partner.name} logo`}
              className="w-10 h-10 object-contain"
            />
          ) : (
            <span className="text-lg font-bold text-gray-500">{initials}</span>
          )}
        </div>
        <Badge className={`${type.className} border text-xs font-semibold`}>
          {type.label}
        </Badge>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
        {partner.name}
      </h3>
      {partner.region && (
        <p className="text-sm text-gray-500 mb-3">{partner.region}</p>
      )}

      <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
        {partner.short_description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.slice(0, 3).map((tag: string, i: number) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Link href={profileUrl}>
        <Button
          variant="outline"
          className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
        >
          View Partner <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
};
