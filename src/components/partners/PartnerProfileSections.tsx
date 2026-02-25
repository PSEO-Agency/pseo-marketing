import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Globe, Wrench } from "lucide-react";
import Link from "next/link";

interface Partner {
  name: string;
  partner_type: string;
  region: string | null;
  logo_url: string | null;
  full_description: string | null;
  short_description: string | null;
  expertise_tags: any;
  integrations: any;
  services_offered: any;
  case_study_metrics: any;
  contact_url: string | null;
  website_url: string | null;
  country_slug: string | null;
}

const typeConfig: Record<string, { label: string; className: string }> = {
  tech: { label: 'Technology Partner', className: 'bg-blue-100 text-blue-800' },
  agency: { label: 'Agency Partner', className: 'bg-green-100 text-green-800' },
  country: { label: 'Country Partner', className: 'bg-purple-100 text-purple-800' },
};

export const PartnerHero = ({ partner }: { partner: Partner }) => {
  const type = typeConfig[partner.partner_type] || typeConfig.agency;
  const initials = partner.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center overflow-hidden flex-shrink-0">
              {partner.logo_url ? (
                <img src={partner.logo_url} alt={`${partner.name} logo`} className="w-14 h-14 object-contain" />
              ) : (
                <span className="text-2xl font-bold text-white/80">{initials}</span>
              )}
            </div>
            <div>
              <Badge className={`${type.className} mb-2`}>{type.label}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">{partner.name}</h1>
              {partner.region && (
                <p className="text-blue-200 text-lg mt-1 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> {partner.region}
                </p>
              )}
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            {partner.short_description}
          </p>
          <div className="flex flex-wrap gap-4">
            {partner.contact_url && (
              <Link href={partner.contact_url}>
                <Button className="webfx-button-primary">
                  Contact Partner <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
            <Link href="/agency/strategy-call">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Book Joint Call
              </Button>
            </Link>
            {partner.website_url && (
              <a href={partner.website_url} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-blue-200 hover:text-white">
                  <ExternalLink className="w-4 h-4 mr-2" /> Website
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnerAbout = ({ partner }: { partner: Partner }) => {
  if (!partner.full_description) return null;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About {partner.name}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{partner.full_description}</p>
        </div>
      </div>
    </section>
  );
};

export const PartnerSpecialties = ({ partner }: { partner: Partner }) => {
  const tags = Array.isArray(partner.expertise_tags) ? partner.expertise_tags : [];
  if (tags.length === 0) return null;
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialties & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag: string, i: number) => (
              <span key={i} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnerIntegrations = ({ partner }: { partner: Partner }) => {
  const items = Array.isArray(partner.integrations) ? partner.integrations : [];
  if (items.length === 0) return null;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Supported Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <Wrench className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnerServices = ({ partner }: { partner: Partner }) => {
  const services = Array.isArray(partner.services_offered) ? partner.services_offered : [];
  if (services.length === 0) return null;
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Offered</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc: any, i: number) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-600">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnerProof = ({ partner }: { partner: Partner }) => {
  const metrics = Array.isArray(partner.case_study_metrics) ? partner.case_study_metrics : [];
  if (metrics.length === 0) return null;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Proven Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {metrics.map((m: any, i: number) => (
              <div key={i} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl lg:text-3xl font-bold text-blue-700">{m.label}</span>
                </div>
                <p className="text-sm text-gray-600">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnerCTA = ({ partner }: { partner: Partner }) => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">
        Work With {partner.name} + Programmatic SEO B.V.
      </h2>
      <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
        Combine local expertise with our proven programmatic SEO methodology for maximum organic growth.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {partner.contact_url ? (
          <Link href={partner.contact_url}>
            <Button className="webfx-button-primary text-lg px-8 py-4 h-auto">
              Request Introduction <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        ) : (
          <Link href="/agency/contact">
            <Button className="webfx-button-primary text-lg px-8 py-4 h-auto">
              Request Introduction <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        )}
        <Link href="/agency/strategy-call">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
            Book Strategy Call
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
