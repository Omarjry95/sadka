import {StyleSheet} from "react-native";

export const PICTURE_CONTAINER_DIMENSIONS: number = 175;

export const PICTURE_CONTAINER_PADDING: number = 5;

export default StyleSheet.create({
    container: {
        paddingTop: 90,
        flexDirection: "column",
        alignItems: "center",
        flex: 1
    },
    pictureContainer: {
        width: PICTURE_CONTAINER_DIMENSIONS,
        height: PICTURE_CONTAINER_DIMENSIONS,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        width: "100%",
        height: "100%",
        borderRadius: (PICTURE_CONTAINER_DIMENSIONS - PICTURE_CONTAINER_PADDING * 2) / 2,
        alignItems: "center",
        justifyContent: "center"
    }
});