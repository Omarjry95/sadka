import {ActionBaseProps} from "@app/screens/homepage/models";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export const homepageActions: ActionBaseProps[] = [
  {
    label: "Don spontané",
    icon: () => (
      <FontAwesome5
        name="money-check-alt"
        color="white"
        size={24}
      />
    ),
    isDonationSpontaneous: true
  },
  {
    label: "L'arrondi solidaire",
    icon: () => (
      <MaterialCommunityIcons
        name="charity"
        color="white"
        size={24}
      />
    ),
    isDonationSpontaneous: false
  }
];

export const homepageCoverUrl: string = 'homepage.jpg';

export const HEADER_RIGHT_PIN_DIMENSIONS: number = 45;