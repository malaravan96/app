import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { theme, onboardingData } from "../constants";
import { components } from "../components";

const OnBoarding = () => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function updateCurrentSlideIndex(e) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
      >
        {onboardingData.map((item, index) => {
          return (
            <components.BgImageItem
              key={index}
              item={item}
              containerStyle={{
                height: theme.SIZES.height,
                width: theme.SIZES.width,
              }}
              imageStyle={{ justifyContent: "flex-end" }}
            >
              <components.Line containerStyle={{ marginBottom: 4 }} />
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.H1,
                  color: theme.COLORS.black,
                  marginBottom: 14,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 16,
                  lineHeight: 16 * 1.7,
                  color: theme.COLORS.gray1,
                  marginBottom: 34,
                }}
              >
                {item.description}
              </Text>
              <components.Button
                title="Get Started"
                containerStyle={{
                  marginBottom: 30,
                  paddingHorizontal: theme.SIZES.width * 0.17,
                }}
                onPress={() => navigation.navigate("SignIn")}
              />
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                {onboardingData.map((_, index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        {
                          width: 6,
                          height: 6,
                          marginHorizontal: 5,
                          borderRadius: 50,
                          borderWidth: 2,
                          borderColor: theme.COLORS.black,
                          backgroundColor: theme.COLORS.black,
                        },
                        currentSlideIndex == index && {
                          width: 22,
                          height: 8,
                          backgroundColor: theme.COLORS.transparent,
                        },
                      ]}
                    />
                  );
                })}
              </View>
            </components.BgImageItem>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default OnBoarding;
