import React, {useMemo} from 'react';
import { Text } from "react-native";
import {BaseStrictProps} from "@app/reusable/text/models";

export default function Span({ value, paddings, margins, color, size, align, transform, position, positionCoords, italic, bold }: BaseStrictProps) {

  const fontFamily: string = useMemo(() => {
    switch (true) {
      case bold && italic:
        return "OpenSansBoldItalic";
      case bold:
        return "OpenSansBold";
      case italic:
        return "OpenSansItalic";
      default:
        return "OpenSans";
    }
  }, [bold, italic]);

  return (
    <Text style={{
      ...paddings,
      ...margins,
      fontFamily,
      color,
      fontSize: size,
      textAlign: align,
      textTransform: transform,
      position,
      ...positionCoords
    }}>
      {value}
    </Text>
  )
}