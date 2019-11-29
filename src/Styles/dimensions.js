import { Dimensions, Platform } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const trueHundredHeight = Platform.OS == "web" ? "100vh" : "100%";

export { screenHeight, screenWidth, trueHundredHeight };
