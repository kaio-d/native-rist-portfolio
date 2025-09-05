import React from "react";
import { View, Text, Linking } from "react-native";

import { styles } from "./SkillsStyle";
import { UserPhoto } from "../../components/UserPhoto/UserPhoto";
import { SkillButton } from "../../components/SkillButton/SkillButton";
import { SocialButton } from "../../components/SocialButton/SocialButton";

// Skills
const html = require("../../../assets/skills/Html.png");
const css = require("../../../assets/skills/Css.png");
const js = require("../../../assets/skills/js.png");

// Level
const max = require("../../../assets/level/max.png");
const lvl4 = require("../../../assets/level/lvl4.png");
const lvl3 = require("../../../assets/level/lvl3.png");

export function Skills() {
  function navigateToLinkedin() {
    Linking.openURL("https://github.com/kaio-d");
  }

  return (
    <View style={styles.container}>
      <UserPhoto />
      <Text style={styles.h1}>Skills</Text>

      <View style={styles.skillContainer}>
        <SkillButton skill={html} level={max} />
        <SkillButton skill={css} level={lvl4} />
        <SkillButton skill={js} level={lvl3} />
      </View>

      <SocialButton
        text="Veja Mais"
        color="#fff"
        backgroundColor="#333CE6"
        borderColor="#6EDFC8"
        onPress={navigateToLinkedin}
      />
    </View>
  );
}
