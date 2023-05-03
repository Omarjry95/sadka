import { DefaultTheme } from "@react-navigation/native";

const mainTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#D00027",
        secondary: "#F08003",
        label: "#B6B5B8",
        border: "#dcdcdc"
    },
};

export type Theme = typeof mainTheme;

export default mainTheme;