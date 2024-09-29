/** @format */

import styles from "@/styles/styles";
import { useNavigation } from "expo-router";
import React, { FC } from "react";
import { Pressable, Text } from "react-native";
interface LinkTextProps {
  text: string;
  navigate: string;
}
const LinkText: FC<LinkTextProps> = ({ navigate, text }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(navigate as never)}>
      <Text style={styles.signUpText}>{text}</Text>
    </Pressable>
  );
};

export default LinkText;
