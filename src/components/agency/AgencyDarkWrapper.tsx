"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export default function AgencyDarkWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const previousTheme = useRef<string | undefined>(undefined);

  useEffect(() => {
    previousTheme.current = theme;
    setTheme("dark");

    return () => {
      if (previousTheme.current && previousTheme.current !== "dark") {
        setTheme(previousTheme.current);
      }
    };
  }, []);

  return <>{children}</>;
}
