import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { setScreen } from "../store/tabSlice";
import { useSelector, useDispatch } from "react-redux";

import { theme } from "../constants";
import { svg } from "../svg";
import { screens } from ".";

const MainLayout = () => {
  const dispatch = useDispatch();

  const currentScreen = useSelector((state) => state.tab.screen);

  const tabs = [
    {
      id: "1",
      screen: "Home",
      icon: (
        <svg.HomeSvg
          iconColor={
            currentScreen === "Home" ? theme.COLORS.black : theme.COLORS.gray1
          }
          bgColor={currentScreen === "Home" ? "#DBE3F5" : theme.COLORS.white}
        />
      ),
    },
    {
      id: "2",
      screen: "Categories",
      icon: (
        <svg.SearchSvg
          iconColor={
            currentScreen === "Categories"
              ? theme.COLORS.black
              : theme.COLORS.gray1
          }
          bgColor={
            currentScreen === "Categories" ? "#DBE3F5" : theme.COLORS.white
          }
        />
      ),
    },
    {
      id: "3",
      screen: "Order",
      icon: (
        <svg.BagSvg
          iconColor={
            currentScreen === "Order" ? theme.COLORS.black : theme.COLORS.gray1
          }
          bgColor={currentScreen === "Order" ? "#DBE3F5" : theme.COLORS.white}
        />
      ),
    },
    {
      id: "4",
      screen: "Wishlist",
      icon: (
        <svg.WishlistSvg
          iconColor={
            currentScreen === "Wishlist"
              ? theme.COLORS.black
              : theme.COLORS.gray1
          }
          bgColor={
            currentScreen === "Wishlist" ? "#DBE3F5" : theme.COLORS.white
          }
        />
      ),
    },
    {
      id: "5",
      screen: "Profile",
      icon: (
        <svg.UserSvg
          iconColor={
            currentScreen === "Profile"
              ? theme.COLORS.black
              : theme.COLORS.gray1
          }
          bgColor={currentScreen === "Profile" ? "#DBE3F5" : theme.COLORS.white}
        />
      ),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
      {currentScreen === "Home" && <screens.HomeOne />}
      {currentScreen === "Categories" && <screens.Search />}
      {currentScreen === "Order" && <screens.Order />}
      {currentScreen === "Wishlist" && <screens.Wishlist />}
      {currentScreen === "Profile" && <screens.Profile />}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 13,
          borderTopWidth: 1,
          borderTopColor: theme.COLORS.lightBlue1,
        }}
      >
        {tabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => dispatch(setScreen(item.screen))}
            >
              {item.icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default MainLayout;
