import type { Theme } from "@app/theme";

declare module "@react-navigation/native" {
    export function useTheme(): Theme;
}