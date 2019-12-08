import { isWeb } from "./device";

const theme = {
  background: "#f7f9fc",
  bodyBackground: "#f2f6ff",
  fontFamily: isWeb ? "Roboto, sans-serif" : "Roboto"
};

export default theme;
