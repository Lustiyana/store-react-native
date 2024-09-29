/** @format */

import { useEffect, useRef, useState } from "react";
import TextInputComponent from "./TextInputComponent";
import { TextInput, View } from "react-native";

const InputCode = ({ onChange }: { onChange: (e: string) => void }) => {
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const [values, setValues] = useState(["", "", "", ""]);

  const handleChangeText = (index: number) => (text: string) => {
    if (text.length > 1) {
      text = text[text.length - 1];
    }
    const updatedValues = [...values];
    updatedValues[index] = text;
    setValues(updatedValues);

    if (text.length === 1) {
      if (index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    } else if (text.length === 0) {
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  useEffect(() => {
    onChange(values.join("").trim());
  }, [values]);

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {values.map((value, index) => (
        <View
          key={index}
          style={{
            width: 72,
            marginHorizontal: 4,
          }}
        >
          <TextInputComponent
            inputStyles={{ textAlign: "center", fontSize: 24 }}
            ref={inputRefs[index]}
            onChangeText={handleChangeText(index)}
            keyboardType="numeric"
            value={value}
            maxLength={1}
          />
        </View>
      ))}
    </View>
  );
};

export default InputCode;
