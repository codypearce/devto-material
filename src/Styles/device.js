import { Platform } from "react-native";

const isWeb = Platform.OS == "web";
const isAndroid = Platform.OS == "android";
const isIos = Platform.OS == "ios";

export { isWeb, isAndroid, isIos };
