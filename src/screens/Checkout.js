import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const Checkout = () => {
  const navigation = useNavigation();

  const products = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total);

  const renderHeader = () => {
    return <components.Header title="Checkout" goBack={true} border={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 30,
            paddingBottom: 10,
            borderBottomWidth: 4,
            borderColor: theme.COLORS.lightBlue1,
          }}
        >
          <Text style={{ ...theme.FONTS.H4, color: theme.COLORS.black }}>
            My order
          </Text>
          <Text style={{ ...theme.FONTS.H4, color: theme.COLORS.black }}>
            ${total}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 20,
            backgroundColor: "#F4F7FC",
            borderBottomWidth: 4,
            borderColor: theme.COLORS.lightBlue1,
          }}
        >
          {products.map((item) => {
            return (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: theme.COLORS.gray1,
                      lineHeight: 14 * 1.5,
                    }}
                  >
                    {item.name} {item?.size} {item?.color}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: theme.COLORS.gray1,
                      lineHeight: 14 * 1.5,
                    }}
                  >
                    {item.quantity} x ${item.price}
                  </Text>
                </View>
              </View>
            );
          })}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 14,
                color: theme.COLORS.gray1,
                lineHeight: 14 * 1.5,
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 14,
                color: theme.COLORS.gray1,
                lineHeight: 14 * 1.5,
              }}
            >
              -4.29
            </Text>
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
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 14,
                color: theme.COLORS.gray1,
                lineHeight: 14 * 1.5,
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 14,
                color: theme.COLORS.green,
                lineHeight: 14 * 1.5,
              }}
            >
              Free
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 4,
            borderBottomColor: theme.COLORS.lightBlue1,
          }}
          onPress={() => navigation.navigate("ShippingDetails")}
        >
          <View>
            <Text
              style={{
                ...theme.FONTS.H4,
                color: theme.COLORS.black,
                marginBottom: 8,
              }}
              numberOfLines={1}
            >
              Shipping details
            </Text>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 14,
                color: theme.COLORS.gray1,
                lineHeight: 14 * 1.5,
              }}
              numberOfLines={1}
            >
              8000 S Kirkland Ave, Chicago, IL 6065
            </Text>
          </View>
          <svg.CheckoutArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 10,
            marginBottom: 40,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 4,
            borderBottomColor: theme.COLORS.lightBlue1,
          }}
          onPress={() => navigation.navigate("CheckoutPaymentMethod")}
        >
          <View>
            <Text
              style={{
                ...theme.FONTS.H4,
                color: theme.COLORS.black,
                marginBottom: 8,
              }}
              numberOfLines={1}
            >
              Payment method
            </Text>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 14,
                color: theme.COLORS.gray1,
                lineHeight: 14 * 1.5,
              }}
              numberOfLines={1}
            >
              7741 ******** 6644
            </Text>
          </View>
          <svg.CheckoutArrow />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: theme.SIZES.height * 0.1,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 131,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme.COLORS.lightBlue1,
            }}
          >
            <TextInput
              style={{
                width: "100%",
                height: "100%",
                paddingHorizontal: 30,
                paddingTop: 23,
                paddingBottom: 23,
              }}
              placeholder="Enter your comment"
              textAlignVertical="top"
              multiline={true}
            />
            <View
              style={{
                position: "absolute",
                top: -10,
                left: 20,
                paddingHorizontal: 10,
                backgroundColor: theme.COLORS.white,
              }}
            >
              <Text
                style={{
                  color: theme.COLORS.gray1,
                  fontFamily: "Mulish_600SemiBold",
                  fontSize: 12,
                  textTransform: "uppercase",
                }}
              >
                comment
              </Text>
            </View>
          </View>
        </View>

        <components.Button
          title="Confirm order"
          containerStyle={{
            marginBottom: 40,
            paddingHorizontal: 20,
          }}
          onPress={() => navigation.navigate("OrderSuccessful")}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Checkout;
