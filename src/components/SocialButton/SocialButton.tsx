import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./SocialButtonStyle";

export function SocialButton({
  text,
  color = "#000",
  backgroundColor = "#6EDFC8",
  borderColor = "#E2D78E",
  onPress,
}: any) {
  return (
    <TouchableOpacity
      style={[
        styles.inputContainer,
        { backgroundColor: backgroundColor },
        { borderColor: borderColor },
      ]}
      onPress={onPress}

    >
      <Text style={[styles.h2, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
}
