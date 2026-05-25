import { useIsMobile } from "@/hooks/use-mobile";

export function MobileOnly({ children }) {
  const isMobile = useIsMobile();
  return isMobile ? children : null;
}

export function DesktopOnly({ children }) {
  const isMobile = useIsMobile();
  return !isMobile ? children : null;
}
