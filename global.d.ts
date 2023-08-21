import type { Theme } from "@app/theme";

declare global {
    interface FormDataValue {
        uri: string;
        name: string;
        type: string;
    }

    interface FormData {
        append(name: string, value: FormDataValue, fileName?: string): void;
    }
}

declare module "@react-navigation/native" {
    export function useTheme(): Theme;
}