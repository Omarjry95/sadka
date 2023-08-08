import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    wrapper: {
        width: "100%",
        paddingHorizontal: 15,
        position: "relative",
        zIndex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    pressableBackdrop: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },
    modalBody: {
        width: "100%",
        padding: 15,
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 10,
        position: "relative",
        flexDirection: "column",
        alignItems: "center"
    },
    iconContainer: {
        width: 50,
        height: 50,
        padding: 5,
        borderWidth: 3,
        borderRadius: 25,
        position: "relative",
        bottom: 45,
        alignItems: "center",
        justifyContent: "center"
    }
})