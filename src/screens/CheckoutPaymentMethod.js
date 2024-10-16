import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { theme } from "../constants";
import { components } from "../components";

const creditCards = [
  {
    id: 1,
    cardNumber: "7741 ******** 6644",
  },
  {
    id: 2,
    cardNumber: "7674 ******** 1884",
  },
];

const paymentMethods = [
  {
    id: 1,
    name: "Apple Pay",
  },
  {
    id: 2,
    name: "Pay Pal",
  },
  {
    id: 3,
    name: "Cash",
  },
];

const CheckoutPaymentMethod = () => {
  const [selectedCard, setSelectedCard] = useState(
    creditCards.length > 0 ? creditCards[0].id : null
  );

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    (useState < null) | (number > null);

  const renderHeader = () => {
    return <components.Header title="Payment method" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView>
        <View style={{ paddingBottom: 14, paddingTop: 20 }}>
          <View style={{ paddingHorizontal: 20, paddingBottom: 14 }}>
            <Text style={{ ...theme.FONTS.H4 }}>Credit cards</Text>
          </View>

          {creditCards.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingVertical: 20,
                  backgroundColor: "#F4F7FC",
                  paddingHorizontal: 20,
                  borderBottomWidth: array.length - 1 === index ? 4 : 1,
                  borderBottomColor: "#DBE3F5",
                  borderTopColor: "#DBE3F5",
                  borderTopWidth: index === 0 ? 4 : 0,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onPress={() => {
                  setSelectedPaymentMethod(null);
                  setSelectedCard(item.id);
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 16,
                    color: theme.COLORS.gray1,
                  }}
                  numberOfLines={1}
                >
                  {item.cardNumber}
                </Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20 / 2,
                    borderWidth: 2,
                    borderColor: theme.COLORS.lightBlue1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedCard === item.id && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: theme.COLORS.accent,
                        borderRadius: 10 / 2,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
          {paymentMethods.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "#DBE3F5",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onPress={() => {
                  setSelectedCard(null);
                  setSelectedPaymentMethod(item.id);
                }}
              >
                <Text style={{ ...theme.FONTS.H5, color: theme.COLORS.black }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20 / 2,
                    borderWidth: 2,
                    borderColor: theme.COLORS.lightBlue1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedPaymentMethod === item.id && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: theme.COLORS.accent,
                        borderRadius: 10 / 2,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
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

export default CheckoutPaymentMethod;
