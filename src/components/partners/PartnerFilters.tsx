"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PartnerFilters {
  search: string;
  types: string[];
  regions: string[];
  expertise: string[];
  integrations: string[];
}

interface PartnerFiltersProps {
  filters: PartnerFilters;
  onFiltersChange: (filters: PartnerFilters) => void;
  hideTypeFilter?: boolean;
}

const PARTNER_TYPES = [
  { value: "tech", label: "Tech Partners" },
  { value: "agency", label: "Agency Partners" },
  { value: "country", label: "Country Partners" },
];

const REGIONS = [
  "Europe",
  "Middle East",
  "North America",
  "Asia Pacific",
  "Global",
];

const EXPERTISE = [
  "Programmatic SEO Strategy",
  "Directory & Landing Page Generation",
  "AI Content Automation",
  "Technical SEO & Indexation",
  "Data Enrichment Pipelines",
  "Multilingual SEO Expansion",
  "Enterprise SEO Systems",
];

const INTEGRATIONS = [
  "Webflow",
  "WordPress",
  "Shopify",
  "Headless CMS",
  "Airtable",
  "n8n / Zapier",
];

const FilterGroup = ({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: { value: string; label: string }[];
  selected: string[];
  onToggle: (value: string) => void;
}) => (
  <div className="space-y-3">
    <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
    {options.map((opt) => (
      <div key={opt.value} className="flex items-center space-x-2">
        <Checkbox
          id={`filter-${opt.value}`}
          checked={selected.includes(opt.value)}
          onCheckedChange={() => onToggle(opt.value)}
        />
        <Label
          htmlFor={`filter-${opt.value}`}
          className="text-sm text-gray-600 cursor-pointer"
        >
          {opt.label}
        </Label>
      </div>
    ))}
  </div>
);

const toggle = (arr: string[], val: string) =>
  arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

export const PartnerFiltersSidebar = ({
  filters,
  onFiltersChange,
  hideTypeFilter,
}: PartnerFiltersProps) => {
  const hasActiveFilters =
    filters.types.length > 0 ||
    filters.regions.length > 0 ||
    filters.expertise.length > 0 ||
    filters.integrations.length > 0;

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search partners…"
          value={filters.search}
          onChange={(e) =>
            onFiltersChange({ ...filters, search: e.target.value })
          }
          className="pl-10"
        />
      </div>

      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-gray-500 hover:text-red-600"
          onClick={() =>
            onFiltersChange({
              search: filters.search,
              types: [],
              regions: [],
              expertise: [],
              integrations: [],
            })
          }
        >
          <X className="w-3 h-3 mr-1" /> Clear all filters
        </Button>
      )}

      {!hideTypeFilter && (
        <FilterGroup
          title="Partner Type"
          options={PARTNER_TYPES}
          selected={filters.types}
          onToggle={(v) =>
            onFiltersChange({ ...filters, types: toggle(filters.types, v) })
          }
        />
      )}

      <FilterGroup
        title="Region"
        options={REGIONS.map((r) => ({ value: r, label: r }))}
        selected={filters.regions}
        onToggle={(v) =>
          onFiltersChange({ ...filters, regions: toggle(filters.regions, v) })
        }
      />

      <FilterGroup
        title="Expertise"
        options={EXPERTISE.map((e) => ({ value: e, label: e }))}
        selected={filters.expertise}
        onToggle={(v) =>
          onFiltersChange({
            ...filters,
            expertise: toggle(filters.expertise, v),
          })
        }
      />

      <FilterGroup
        title="Integrations"
        options={INTEGRATIONS.map((i) => ({ value: i, label: i }))}
        selected={filters.integrations}
        onToggle={(v) =>
          onFiltersChange({
            ...filters,
            integrations: toggle(filters.integrations, v),
          })
        }
      />
    </div>
  );
};
