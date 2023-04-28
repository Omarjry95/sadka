import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        paddingBottom: 10,
        backgroundColor: "#D00027",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1
    },
    shadowContainer: {
        width: "100%",
        height: "72%",
        paddingHorizontal: 20
    },
    shadow: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        opacity: 0.4
    },
    main: {
        width: "100%",
        height: "72%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 1
    }
});