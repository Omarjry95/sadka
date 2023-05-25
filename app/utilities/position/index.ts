import {PositionCoords, Positioning} from "@app/utilities/globalModels";

export const getStylePosition = (positioning: Positioning): PositionCoords => {
    const positionCoords: PositionCoords = {};

    if (typeof positioning.t === "number") {
        Object.assign(positionCoords, { top: positioning.t });
    }

    if (typeof positioning.b === "number") {
        Object.assign(positionCoords, { bottom: positioning.b });
    }

    if (typeof positioning.r === "number") {
        Object.assign(positionCoords, { right: positioning.r });
    }

    if (typeof positioning.l === "number") {
        Object.assign(positionCoords, { left: positioning.l });
    }

    return positionCoords;
}