import { useEffect } from "react";
import Navigation from "./components/Navigation";
import MobileNavigation from "./components/MobileNavigation";
import { DesktopOnly, MobileOnly } from "./Responsive";
import { useIsMobile } from "../hooks/use-mobile";

export default function NavigationController() {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      document.body.style.paddingBottom = "62px";
    } else {
      document.body.style.paddingBottom = "";
    }
  }, [isMobile]);

  return (
    <>
      <DesktopOnly>
        <Navigation />
      </DesktopOnly>
      <MobileOnly>
        <MobileNavigation />
      </MobileOnly>
    </>
  );
}
