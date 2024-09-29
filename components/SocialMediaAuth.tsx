/** @format */

import FacebookLogo from "@/assets/svgComponents/FacebookLogo";
import GoogleLogo from "@/assets/svgComponents/GoogleLogo";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "@/styles/styles";

const SocialMediaAuth = () => {
  return (
    <View style={styles.socialButtonsContainer}>
      <TouchableOpacity style={styles.socialButton}>
        <GoogleLogo />
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <FacebookLogo />
      </TouchableOpacity>
    </View>
  );
};

export default SocialMediaAuth;
