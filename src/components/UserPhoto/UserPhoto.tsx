import React from 'react';
import { View, Image } from 'react-native';
const imageProfile = require("../../../assets/profile.png")

import { styles } from './UserPhotoStyle';

export function UserPhoto() {
  return (
    <Image source={imageProfile} />
  );
}