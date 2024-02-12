import { ThemeConfig } from "antd";

export const antdThemeConfig: ThemeConfig = {
  token: {
    fontFamily: "'Albert Sans', sans-serif",
    colorPrimary: "#990066",
    colorError: "#ef2926",
    borderRadius: 4,
  },
  components: {
    Select: {
      controlItemBgActive: "#feeae9",
    },
    Menu: {
      padding: 8,
      itemMarginInline: 0,
    },
  },
};
