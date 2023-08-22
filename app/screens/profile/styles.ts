import {StyleSheet} from "react-native";

export const PICTURE_CONTAINER_DIMENSIONS: number = 175;
export const ACTION_BUTTON_DIMENSIONS: number = 45;

export const SAVE_ACTION_BUTTON_DIMENSIONS: number = 80;
export const PICTURE_CONTAINER_PADDING: number = 5;

export default StyleSheet.create({
    container: {
        paddingTop: 90,
        paddingHorizontal: 15,
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        flex: 1
    },
    pictureContainer: {
        width: PICTURE_CONTAINER_DIMENSIONS,
        height: PICTURE_CONTAINER_DIMENSIONS,
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    photoWrapper: {
        width: "100%",
        height: "100%",
        position: "relative"
    },
    actionButton: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        borderWidth: 1,
        borderRadius: ACTION_BUTTON_DIMENSIONS / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    actionButtonIcon: {
        position: "relative",
        left: 1
    },
    buttonContainer: {
        width: "100%",
        height: "100%",
        borderRadius: (PICTURE_CONTAINER_DIMENSIONS - PICTURE_CONTAINER_PADDING * 2) / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    nameContainer: {
        width: "100%",
        paddingHorizontal: 15,
        marginBottom: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    selectContainer: {
        width: "100%",
        marginBottom: 15
    },
    saveButtonContainer: {
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderRadius: SAVE_ACTION_BUTTON_DIMENSIONS / 2,
        alignItems: "center",
        justifyContent: "center"
    }
});