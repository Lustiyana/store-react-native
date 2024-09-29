/** @format */

import FacebookLogo from "@/assets/svgComponents/FacebookLogo";
import GoogleLogo from "@/assets/svgComponents/GoogleLogo";
import VectorLogin from "@/assets/svgComponents/VectorLogin";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "expo-router";
import AuthFooterText from "@/components/AuthFooterText";
import SocialMediaAuth from "@/components/SocialMediaAuth";
import AuthDivider from "@/components/AuthDivider";

export default function Index() {
  const navigation = useNavigation();

  const handlePressLogin = () => {
    navigation.navigate("verification" as never);
  };
  return (
    <SafeAreaView style={styles.container}>
      <VectorLogin />
      <View style={styles.headerTextContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerText}>Hello!</Text>
          <Text style={styles.subHeaderText}>
            Wellcome back you’ve been missed
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.phoneNumberContainer}>
            <Text style={styles.phoneNumberText}>+62</Text>
            <TextInput
              placeholder="Phone Number"
              style={styles.phoneNumberInput}
            />
          </View>
          <TouchableOpacity
            style={styles.enterButton}
            onPress={handlePressLogin}
          >
            <Ionicons
              name="enter-outline"
              color="white"
              style={styles.enterButtonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <AuthDivider />
      <SocialMediaAuth />
      <AuthFooterText
        linkText="Sign Up"
        text="Don’t have an account?"
        navigate="register"
      />
    </SafeAreaView>
  );
}
