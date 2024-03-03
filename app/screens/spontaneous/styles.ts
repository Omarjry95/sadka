import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flex: 1
  },
  header: {
    width: "100%",
    height: 90
  },
  scrollContainer: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  paymentAlternateContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  paymentDataContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  paymentCardNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 2
  },
  paymentExpiryDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1
  },
  paymentDataIcon: {
    marginRight: 10
  }
})