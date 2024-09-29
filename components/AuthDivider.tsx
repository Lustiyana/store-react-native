/** @format */

import React from "react";
import { Text, View } from "react-native";
import styles from "@/styles/styles";

const AuthDivider = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text>or</Text>
      <View style={styles.dividerLine} />
    </View>
  );
};

export default AuthDivider;
