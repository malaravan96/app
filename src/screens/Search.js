import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { components } from "../components";
import { theme, dummyData } from "../constants";

const clothingСategory = [
  {
    title: "Dresses",
    image: "https://dl.dropbox.com/s/6ddjv5m6q74p88e/Dresses.png?dl=0",
  },
  {
    title: "Pants",
    image: "https://dl.dropbox.com/s/i0ompsh9pgx6x04/Pants.png?dl=0",
  },
  {
    title: "Accessories",
    image: "https://dl.dropbox.com/s/osn5w10zjhdunw9/Accessories.png?dl=0",
  },
  {
    title: "Shoes",
    image: "https://dl.dropbox.com/s/4gaweme6kkeydsz/Shoes.png?dl=0",
  },
  {
    title: "T-shirts",
    image: "https://dl.dropbox.com/s/v5y293tx7l7zmxs/T-shirts.png?dl=0",
  },
];

const categories = [
  {
    id: "1",
    title: "Men",
  },
  {
    id: "2",
    title: "woMen",
  },
  {
    id: "3",
    title: "kids",
  },
  {
    id: "4",
    title: "kids",
  },
  {
    id: "5",
    title: "accessories",
  },
];

const Search = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("1");

  const renderHeader = () => {
    return (
      <components.Header
        burgerMenu={true}
        bag={true}
        search={true}
        containerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: theme.COLORS.lightBlue1,
        }}
      />
    );
  };

  const renderCategory = () => {
    return (
      <View style={{ marginTop: 30 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginBottom: 20,
          }}
        >
          {categories.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderColor: theme.COLORS.lightBlue1,
                  borderWidth: 1,
                  borderRadius: 50,
                  marginRight: 14,
                  backgroundColor:
                    selectedCategory === item.id
                      ? theme.COLORS.lightBlue1
                      : theme.COLORS.transparent,
                }}
                onPress={() => setSelectedCategory(item.id)}
              >
                <Text
                  style={{
                    lineHeight: 12 * 1.7,
                    fontSize: 12,
                    ...theme.FONTS.Mulish_600SemiBold,
                    textTransform: "uppercase",
                    color: theme.COLORS.black,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderClothingСategory = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {clothingСategory.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: index === 2 ? "100%" : "50%",
                height: 200,
                borderColor: theme.COLORS.white,
                borderRightWidth: 1,
                borderBottomWidth: 1,
              }}
              onPress={() =>
                navigation.navigate("Shop", {
                  title: item.title,
                  products: dummyData,
                })
              }
            >
              <components.ImageItem
                item={item}
                containerStyle={{ width: "100%", height: "100%" }}
              />
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: "rgba(23,28,49, 0.4)",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.H3,
                    color: theme.COLORS.white,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {renderCategory()}
        {renderClothingСategory()}
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default Search;
