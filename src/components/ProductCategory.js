import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { theme } from "../constants";
import { svg } from "../svg";

const ProductCategory = ({ title, onPress, containerStyle }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Text style={{ ...theme.FONTS.H3 }}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <svg.ViewAllSvg />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCategory;
