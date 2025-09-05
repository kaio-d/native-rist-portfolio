import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { styles } from "./SkillButtonStyle";

export function SkillButton({ skill, level }: any) {
  return (
    <TouchableOpacity style={styles.inputContainer}>
      <Image source={skill} />
      <Image source={level} />
    </TouchableOpacity>
  );
}
