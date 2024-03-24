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
  overviewContainer: {
    width: "100%",
    marginBottom: 25,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  overviewItemContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  overviewItemLabelContainer: {
    marginRight: 10,
    flex: 1
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