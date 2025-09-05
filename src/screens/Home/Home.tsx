import React from "react";
import { View, Text, Linking } from "react-native";

import { styles } from "./HomeStyle";
import { UserPhoto } from "../../components/UserPhoto/UserPhoto";
import { SocialButton } from "../../components/SocialButton/SocialButton";

export function Home() {
  function goToLinkedin() {
    Linking.openURL("https://www.linkedin.com/in/kaio-mancini/");
  }

  function goToGitHub() {
    Linking.openURL("https://github.com/kaio-d");
  }

  function goToEmail() {
    const url = "mailto:dantaskaio01@gmail.com"
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>
      <UserPhoto />
      <Text style={styles.h1}>Kaio Dantas Mancini</Text>

      <SocialButton text="Linkedin" onPress={goToLinkedin} />
      <SocialButton text="GitHub"  onPress={goToGitHub}/>
      <SocialButton text="Email" onPress={goToEmail}/>
    </View>
  );
}
