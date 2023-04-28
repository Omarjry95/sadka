import {Margin, Padding, Spacing} from "@app/utilities/globalModels";
import margin from "@app/utilities/globalModels/Margin";

export const getStylePadding = (spacing?: Spacing): Padding => {

    let paddings: Padding = {
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0
    }

    if (spacing) {
        if (spacing.a) {
            Object.keys(paddings).map((key) => Object.assign(paddings, { [key]: spacing.a }));

            return paddings;
        }

        if (spacing.v) {
            const targetProps: string[] = ['paddingTop', 'paddingBottom'];

            Object.keys(paddings).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(paddings, { [key]: spacing.v });
                }
            });
        }

        if (spacing.h) {
            const targetProps: string[] = ['paddingRight', 'paddingLeft'];

            Object.keys(paddings).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(paddings, { [key]: spacing.h });
                }
            });
        }

        if (spacing.t && !spacing.v) {
            Object.assign(paddings, { paddingTop: spacing.t });
        }

        if (spacing.b && !spacing.v) {
            Object.assign(paddings, { paddingBottom: spacing.b });
        }

        if (spacing.r && !spacing.h) {
            Object.assign(paddings, { paddingRight: spacing.r });
        }

        if (spacing.l && !spacing.h) {
            Object.assign(paddings, { paddingLeft: spacing.l });
        }
    }

    return paddings;
}

export const getStyleMargin = (spacing?: Spacing): Margin => {

    let margins: Margin = {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 0,
        marginLeft: 0
    }

    if (spacing) {
        if (spacing.a) {
            Object.keys(margins).map((key) => Object.assign(margins, { [key]: spacing.a }));

            return margins;
        }

        if (spacing.v) {
            const targetProps: string[] = ['marginTop', 'marginBottom'];

            Object.keys(margins).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(margins, { [key]: spacing.v });
                }
            });
        }

        if (spacing.h) {
            const targetProps: string[] = ['marginRight', 'marginLeft'];

            Object.keys(margins).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(margins, { [key]: spacing.h });
                }
            });
        }

        if (spacing.t && !spacing.v) {
            Object.assign(margins, { marginTop: spacing.t });
        }

        if (spacing.b && !spacing.v) {
            Object.assign(margins, { marginBottom: spacing.b });
        }

        if (spacing.r && !spacing.h) {
            Object.assign(margins, { marginRight: spacing.r });
        }

        if (spacing.l && !spacing.h) {
            Object.assign(margins, { marginLeft: spacing.l });
        }
    }

    return margins;
}