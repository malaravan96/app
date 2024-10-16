import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Accordion from "react-native-collapsible/Accordion";
import { useNavigation } from "@react-navigation/native";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const orderHistory = [
  {
    id: "1",
    number: "100345",
    date: "Feb 02, 2022 at 8:32 PM",
    total: "36.42",
    status: "Shipping",
    products: [
      {
        id: "1",
        name: "Black Sneakers",
        size: "M",
        color: "red",
        quantity: 1,
        price: 29.95,
      },
      {
        id: "2",
        name: "Denim Shorts",
        size: "S",
        color: "black",
        quantity: 1,
        price: 54.96,
      },
    ],
  },
  {
    id: "2",
    number: "100346",
    date: "May 26, 2021 - 10:38 AM",
    total: "84.12",
    status: "Delivered",
    products: [
      {
        id: "1",
        name: "Hand Bag",
        size: "L",
        color: "blue",
        quantity: 1,
        price: 24.95,
      },
      {
        id: "2",
        name: "Purple Sneakers",
        size: "S",
        color: "black",
        quantity: 1,
        price: 22.87,
      },
    ],
  },
  {
    id: "4",
    number: "100347",
    date: "May 26, 2021 - 10:38 AM",
    total: "52.76",
    status: "Canceled",
    products: [
      {
        id: "1",
        name: "Summer Dress",
        size: "L",
        color: "blue",
        quantity: 1,
        price: 44.65,
      },
      {
        id: "2",
        name: "T-Shirt",
        size: "S",
        color: "black",
        quantity: 1,
        price: 12.95,
      },
    ],
  },
];

const OrderHistory = () => {
  const navigation = useNavigation();
  const [activeSections, setActiveSections] = useState([]);
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = () => {
    return <components.Header title="Order history" goBack={true} />;
  };

  function accordionHeader(section) {
    return (
      <View
        style={{
          width: "100%",
          borderBottomWidth: 4,
          paddingHorizontal: 20,
          borderBottomColor: theme.COLORS.lightBlue1,
          paddingBottom: 20,
          paddingTop: 11,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.black,
            }}
          >
            #{section.number}
          </Text>
          {section.status == "Shipping" && <svg.ShippingSvg />}
          {section.status == "Delivered" && <svg.DeliveredSvg />}
          {section.status == "Canceled" && <svg.CanceledSvg />}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: theme.COLORS.gray1,
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 12,
              lineHeight: 12 * 1.5,
            }}
          >
            {section.date}
          </Text>
          <Text
            style={{
              ...theme.FONTS.Mulish_700Bold,
              fontSize: 12,
              color: theme.COLORS.black,
              lineHeight: 12 * 1.5,
            }}
          >
            ${section.total}
          </Text>
        </View>
      </View>
    );
  }

  function accordionContent(section) {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: "#F4F7FC",
          borderBottomWidth: 4,
          borderColor: theme.COLORS.lightBlue1,
        }}
      >
        {section.products.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Mulish_600SemiBold",
                fontSize: 14,
                color: theme.COLORS.gray1,
                marginBottom: 10,
              }}
            >
              {item.name}, {item.size != null && `${item.size}`},{" "}
              {item.color != null && `${item.color}`}
            </Text>
            <Text
              style={{
                fontFamily: "Mulish_600SemiBold",
                fontSize: 14,
                color: theme.COLORS.gray1,
              }}
            >
              {item.quantity} x ${item.price}
            </Text>
          </View>
        ))}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 29,
          }}
        >
          <TouchableOpacity onPress={() => console.log("Repeat Order")}>
            <svg.RepeatOrderSvg />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("LeaveAReviews")}
          >
            <svg.LeaveAReviewSvg />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Accordion
          activeSections={activeSections}
          sections={orderHistory}
          touchableComponent={TouchableOpacity}
          renderHeader={accordionHeader}
          renderContent={accordionContent}
          duration={400}
          onChange={setSections}
        />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default OrderHistory;
