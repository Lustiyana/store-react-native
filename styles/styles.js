/** @format */

import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 64,
    paddingHorizontal: 20,
  },
  headerTextContainer: {
    gap: 24,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primaryPink,
  },
  subHeaderText: {
    fontSize: 12,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
  },
  phoneNumberContainer: {
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    flex: 1,
  },
  phoneNumberText: {
    borderRightWidth: 1,
    borderRightColor: "black",
    paddingRight: 16,
  },
  phoneNumberInput: {
    paddingHorizontal: 16,
  },
  enterButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  enterButtonIcon: {
    fontSize: 32,
    paddingHorizontal: 12,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginTop: 24,
  },
  dividerLine: {
    backgroundColor: "black",
    height: 1,
    flex: 1,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 64,
    marginBottom: 28,
  },
  socialButton: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 999,
  },
  facebookButton: {
    width: 42,
    height: 42,
  },
  footerTextContainer: {
    flexDirection: "row",
  },
  signUpText: {
    fontWeight: "bold",
    color: Colors.primaryPink,
  },
  registerTitleText: {
    fontSize: 32,
    maxWidth: 170,
    textAlign: "center",
  },
  registerSubtitleText: {
    maxWidth: 278,
    textAlign: "center",
  },
  formRegisterContainer: {
    flexDirection: "column",
    width: "100%",
    gap: 36,
    marginTop: 49,
  },
  textInputContainer: {
    flexDirection: "column",
    gap: 16,
  },
  footerVerification: {
    alignItems: "center",
    gap: 4,
  },
  titleVerification: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 64,
  },
  cardContainer: {
    backgroundColor: "white",
    margin: 8,
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
  imageCard: {
    width: "100%",
    borderRadius: 4,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    color: Colors.primaryPink,
    fontWeight: "bold",
    fontSize: 16,
  },
  vectorHomeContainer: {
    alignItems: "flex-end",
    position: "absolute",
    top: -160,
    left: -120,
  },
  mainHomeContainer: {
    top: "30%",
    width: "100%",
    gap: 42,
  },
  categoriesContainer: {
    gap: 16,
    width: "100%",
  },
  titleaCategories: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  listItemHome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listColumnWrapperStyle: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default styles;
