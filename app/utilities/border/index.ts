import {Border, BorderRadius, Corners, SpacingAndBorder} from "@app/utilities/globalModels";

export const getStyleBorder = (border?: SpacingAndBorder): Border => {

    let borders: Border = {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0
    }

    if (border) {
        if (border.a) {
            Object.keys(borders).map((key) => Object.assign(borders, { [key]: border.a }));

            return borders;
        }

        if (border.v) {
            const targetProps: string[] = ['borderTopWidth', 'borderBottomWidth'];

            Object.keys(borders).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(borders, { [key]: border.v });
                }
            });
        }

        if (border.h) {
            const targetProps: string[] = ['borderRightWidth', 'borderLeftWidth'];

            Object.keys(borders).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(borders, { [key]: border.h });
                }
            });
        }

        if (border.t && !border.v) {
            Object.assign(borders, { borderTopWidth: border.t });
        }

        if (border.b && !border.v) {
            Object.assign(borders, { borderBottomWidth: border.b });
        }

        if (border.r && !border.h) {
            Object.assign(borders, { borderRightWidth: border.r });
        }

        if (border.l && !border.h) {
            Object.assign(borders, { borderLeftWidth: border.l });
        }
    }

    return borders;
}

export const getStyleBorderRadius = (borderRadius?: Corners): BorderRadius => {

    let radiuses: BorderRadius = {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }

    if (borderRadius) {
        if (borderRadius.a) {
            Object.keys(radiuses).map((key) => Object.assign(radiuses, { [key]: borderRadius.a }));

            return radiuses;
        }

        if (borderRadius.t) {
            const targetProps: string[] = ['borderTopLeftRadius', 'borderTopRightRadius'];

            Object.keys(radiuses).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(radiuses, { [key]: borderRadius.t });
                }
            });
        }

        if (borderRadius.b) {
            const targetProps: string[] = ['borderBottomLeftRadius', 'borderBottomRightRadius'];

            Object.keys(radiuses).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(radiuses, { [key]: borderRadius.b });
                }
            });
        }

        if (borderRadius.r) {
            const targetProps: string[] = ['borderTopRightRadius', 'borderBottomRightRadius'];

            Object.keys(radiuses).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(radiuses, { [key]: borderRadius.r });
                }
            });
        }

        if (borderRadius.l) {
            const targetProps: string[] = ['borderTopLeftRadius', 'borderBottomLeftRadius'];

            Object.keys(radiuses).map((key) => {
                if (targetProps.includes(key)) {
                    Object.assign(radiuses, { [key]: borderRadius.l });
                }
            });
        }

        if (borderRadius.tl && !borderRadius.t && !borderRadius.l) {
            Object.assign(radiuses, { borderTopLeftRadius: borderRadius.tl });
        }

        if (borderRadius.tr && !borderRadius.t && !borderRadius.r) {
            Object.assign(radiuses, { borderTopRightRadius: borderRadius.tr });
        }

        if (borderRadius.bl && !borderRadius.b && !borderRadius.l) {
            Object.assign(radiuses, { borderBottomLeftRadius: borderRadius.bl });
        }

        if (borderRadius.br && !borderRadius.b && !borderRadius.r) {
            Object.assign(radiuses, { borderBottomRightRadius: borderRadius.br });
        }
    }

    return radiuses;
}