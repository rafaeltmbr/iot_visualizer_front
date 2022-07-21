const breakingsPoints = {
  smallMobile: 500,
  mobile: 768,
  desktop: 1024,
  largeDesktop: 1366,
};

const dimensions = {
  headerHeight: "3rem",
  headerMaxWidth: "85rem", // 1360px
  pageMaxWidth: "62.5rem", // 1000px
};

const light = {
  name: "light",
  dimensions,
  breakingsPoints,
  colors: {
    primary: "#0083E2",
    header: "#2C2C2C",
    onHeader: "#CDCDCD",
    onHeaderHighlight: "#EDEDED",
    background: "#EDEDED",
    onBackground: "#727272",
    onBackgroundHighlight: "#444444",
    surface: "#FBFBFB",
    onSurface: "#666666",
    onSurfaceHighlight: "#333333",
    onSurfaceHover: "#F1F1F1",
    surfaceBorder: "#E5E5E5",
    onPrimary: "#FFFFFF",
    graphGrid: "#F0F0F0",
  },
};

export type Theme = typeof light;

export const themes = { light };
