/** @format */

import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

interface ButtonComponentProps extends TouchableOpacityProps {
  text: string;
}

const ButtonComponent: FC<ButtonComponentProps> = ({ text, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
