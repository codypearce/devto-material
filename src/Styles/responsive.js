import { useMediaQuery } from "react-responsive";
import { isWeb } from "./device";
import { screenWidth } from "./dimensions";

// Breakpoints
const desktopBreakpoint = 1223;
const tabletBreakpoint = 1023;
const mobileBreakpoint = 767;

// Native Resposive
const isDesktopNative = screenWidth > desktopBreakpoint;
const isLaptopOrDesktopNative = screenWidth > tabletBreakpoint + 1;
const isLaptopNative =
  screenWidth > tabletBreakpoint + 1 && screenWidth < desktopBreakpoint;
const isTabletNative =
  screenWidth < tabletBreakpoint && screenWidth > mobileBreakpoint + 1;
const isTabletOrMobileNative = screenWidth < tabletBreakpoint;
const isMobileNative = screenWidth < mobileBreakpoint;
const isNotMobleNative = screenWidth > mobileBreakpoint;

// Cross-Platform Responsive Components
const Desktop = ({ children }) => {
  const isDesktop = isWeb
    ? useMediaQuery({ minWidth: desktopBreakpoint })
    : isDesktopNative;
  return isDesktop ? children : null;
};

const LaptopOrDesktop = ({ children }) => {
  const isDesktop = isWeb
    ? useMediaQuery({ minWidth: tabletBreakpoint + 1 })
    : isLaptopOrDesktopNative;
  return isDesktop ? children : null;
};

const Laptop = ({ children }) => {
  const isDesktop = isWeb
    ? useMediaQuery({
        minWidth: tabletBreakpoint + 1,
        maxWidth: desktopBreakpoint
      })
    : isLaptopNative;
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = isWeb
    ? useMediaQuery({
        minWidth: mobileBreakpoint + 1,
        maxWidth: tabletBreakpoint
      })
    : isTabletNative;
  return isTablet ? children : null;
};
const TabletOrMobile = ({ children }) => {
  const isTablet = isWeb
    ? useMediaQuery({
        maxWidth: tabletBreakpoint
      })
    : isTabletOrMobileNative;
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint })
    : isMobileNative;
  return isMobile ? children : null;
};
const NotMobile = ({ children }) => {
  const isMobile = isWeb
    ? useMediaQuery({ minWidth: mobileBreakpoint })
    : isNotMobleNative;
  return isMobile ? children : null;
};

export {
  mobileBreakpoint,
  tabletBreakpoint,
  desktopBreakpoint,
  isDesktopNative,
  isLaptopOrDesktopNative,
  isLaptopNative,
  isTabletNative,
  isTabletOrMobileNative,
  isMobileNative,
  isNotMobleNative,
  Desktop,
  LaptopOrDesktop,
  Laptop,
  Tablet,
  TabletOrMobile,
  Mobile,
  NotMobile
};
