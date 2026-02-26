"use client";

import AgencyNavbar from "./AgencyNavbar";
import AgencyFooter from "./AgencyFooter";

export default function AgencyPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AgencyNavbar />
      <div>{children}</div>
      <AgencyFooter />
    </div>
  );
}
