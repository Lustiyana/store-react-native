/** @format */

import React, { FC } from "react";
import styles from "../styles/styles";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import LinkText from "./LinkText";

interface AuthFooterTextProps {
  text: string;
  linkText: string;
  navigate: string;
}

const AuthFooterText: FC<AuthFooterTextProps> = ({
  text,
  linkText,
  navigate,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerTextContainer}>
      <Text>{text}</Text>
      <LinkText text={linkText} navigate={navigate} />
    </View>
  );
};

export default AuthFooterText;
