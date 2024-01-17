// src/utils/detectMobile.ts
import MobileDetect from "mobile-detect";
import { isMobile as isMobileClient } from "react-device-detect";

export const detectMobile = (userAgent?: string): boolean => {
  if (userAgent) {
    const md = new MobileDetect(userAgent);
    return !!md.mobile();
  } else {
    return isMobileClient;
  }
};
