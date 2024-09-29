/** @format */

import AuthFooterText from "@/components/AuthFooterText";
import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/styles";
import { Colors } from "@/constants/Colors";
import TextInputComponent from "@/components/TextInputComponent";
import SocialMediaAuth from "@/components/SocialMediaAuth";
import AuthDivider from "@/components/AuthDivider";
import ButtonComponent from "@/components/ButtonComponent";

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text style={styles.registerTitleText}>Find Your Needs Here</Text>
        <Text style={styles.registerSubtitleText}>
          Find various kinds of technology-related needs from various sources
        </Text>
      </View>
      <View style={styles.formRegisterContainer}>
        <View style={styles.textInputContainer}>
          <TextInputComponent icon="mail-outline" placeholder="Email" />
          <TextInputComponent icon="person-outline" placeholder="Full Name" />
          <TextInputComponent icon="call-outline" placeholder="Phone Number" />
          <TextInputComponent
            icon="lock-closed-outline"
            placeholder="Password"
          />
          <TextInputComponent
            icon="lock-closed-outline"
            placeholder="Confirm Password"
          />
        </View>
        <ButtonComponent text="Register" />
      </View>
      <AuthDivider />
      <SocialMediaAuth />
      <AuthFooterText
        linkText="Sign In"
        text="Have an account?"
        navigate="index"
      />
    </SafeAreaView>
  );
};

export default Register;
