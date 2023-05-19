import { DefaultTheme } from "@react-navigation/native";

const mainTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#D00027",
        secondary: "#F08003",
        success: "#95E7BB",
        label: "#B6B5B8",
        border: "#DCDCDC",
        backdrop: "rgba(0, 0, 0, 0.6)"
    },
};

export type Theme = typeof mainTheme;

export default mainTheme;