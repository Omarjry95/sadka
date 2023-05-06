import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1
    },
    cover: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
        paddingHorizontal: 15,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 1
    },
    wrapper: {
        justifyContent: "center",
        flex: 1
    }
});