/** @format */

import ButtonComponent from "@/components/ButtonComponent";
import InputCode from "@/components/InputCode";
import LinkText from "@/components/LinkText";
import styles from "@/styles/styles";
import { useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const Verification = () => {
  const navigation = useNavigation();
  const handleChangeInput = (e: string) => {
    if (e.length >= 4) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    navigation.navigate("home" as never);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleVerification}>
        Please enter the 4-digit verification code we sent via Whatsapp
      </Text>
      <View
        style={{
          width: "100%",
          gap: 32,
        }}
      >
        <InputCode onChange={handleChangeInput} />
        <ButtonComponent text="Verify" />
        <View style={styles.footerVerification}>
          <Text>Didn’t receive the code?</Text>
          <LinkText text="Send code again" navigate="" />
          <LinkText text="Login with password" navigate="" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
