/** @format */

import React, { FC, forwardRef, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface TextInputComponentProps extends TextInputProps {
  placeholder?: string;
  icon?: string;
  inputStyles?: {};
  onChangeText?: (text: string) => void;
  value?: string;
}

const TextInputComponent = forwardRef<TextInput, TextInputComponentProps>(
  ({ placeholder, icon, inputStyles, onChangeText, value }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
      <View
        style={
          isFocused
            ? { ...styles.inputFocused, ...styles.inputContainer }
            : styles.inputContainer
        }
      >
        <Ionicons name={icon as never} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          style={{ ...styles.input, ...inputStyles }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          ref={ref}
          value={value}
        />
      </View>
    );
  }
);

export default TextInputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    padding: 16,
    width: "100%",
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: Colors.primaryPink,
    borderWidth: 2,
  },
  icon: {
    fontSize: 24,
  },
});
