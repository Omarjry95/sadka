import {StyleSheet} from "react-native";

export default StyleSheet.create({
    main: {
        fontFamily: "MerriweatherBold"
    },
    buttonContainer: {
        position: "relative"
    },
    buttonHighlighter: {
        width: "75%",
        height: "50%",
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomRightRadius: 5,
        position: "absolute",
        right: 0,
        bottom: 0
    }
})