import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  main: {
    width: "100%",
    position: "relative"
  },
  mainWrapper: {
    padding: 5
  },
  cover: {
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.1
  },
  captionContainer: {
    width: "100%",
    marginTop: 10,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  checkbox: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5
  }
});