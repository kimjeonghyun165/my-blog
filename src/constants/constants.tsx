"use client";

import { Drawer } from "@/interfaces/interfaces";
import { useEffect } from "react";

export let cookieVal = "cupcake";

export const useClientCookie = () => {
  useEffect(() => {
    if (typeof document != "undefined") {
      cookieVal =
        `; ${document?.cookie}`.split("; mode=").pop()?.split(";")[0] || "";
    }
  }, []);

  return cookieVal;
};

export const listContent1 = [
  { contentText: "Marketing", content: "https://planet-99.com/" },
  { contentText: "Portofolio", content: "/" },
  { contentText: "M2E Manager", content: "/" },
];

export const listContent2 = [
  { contentText: "Light", content: "light" },
  { contentText: "Dark", content: "dark" },
  { contentText: "Cupcake", content: "cupcake" },
];

export const dropContent1: Drawer = {
  type: "url",
  mainText: "Service",
  subText: listContent1,
};

export const dropContent2: Drawer = {
  type: "theme",
  mainText: "Mode",
  subText: listContent2,
};

export const menu = ["학교", "개발", "투자"];
