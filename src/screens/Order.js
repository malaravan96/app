import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { setScreen } from "../store/tabSlice";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const Order = () => {
  const navigation = useNavigation();
  const discount = 9.69;
  const products = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total.toFixed(2));

  const dispatch = useDispatch();

  const renderHeader = () => {
    return (
      <components.Header
        title="Order"
        bag={true}
        goBack={products.length > 0 ? true : false}
        burgerMenu={products.length > 0 ? false : true}
        border={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        {products?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: "100%",
                height: 100,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <ImageBackground
                source={{ uri: item.image }}
                style={{
                  width: 100,
                  height: 100,
                  marginRight: 14,
                }}
              >
                {item.is_sale === true && <components.Sale />}
              </ImageBackground>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.gray1,
                    lineHeight: 14 * 1.7,
                  }}
                >
                  {item.name}
                </Text>
                <components.Price item={item} />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: theme.COLORS.gray1,
                      lineHeight: 14 * 1.7,
                    }}
                  >
                    Size: {""}
                  </Text>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: theme.COLORS.gray1,
                      lineHeight: 14 * 1.7,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.size ? item.size : "-"}
                  </Text>
                </View>

                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.gray1,
                    lineHeight: 14 * 1.7,
                    textTransform: "capitalize",
                  }}
                >
                  Color: {item.color ? item.color : "-"}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <TouchableOpacity
                  onPress={() => dispatch(addToCart(item))}
                  style={{
                    width: 30,
                    height: 30,
                    borderWidth: 1,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: theme.COLORS.lightBlue1,
                  }}
                >
                  <svg.PlusSvg />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 10,
                    color: theme.COLORS.gray1,
                  }}
                >
                  {item.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => dispatch(removeFromCart(item))}
                  style={{
                    width: 30,
                    height: 30,
                    borderWidth: 1,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: theme.COLORS.lightBlue1,
                  }}
                >
                  <svg.MinusSvg />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View
          style={{
            borderTopWidth: 1,
            borderColor: theme.COLORS.lightBlue1,
            marginBottom: 30,
          }}
        />
        <TouchableOpacity style={{ marginBottom: 30 }} onPress={() => {}}>
          <svg.ApplyPromocodeSvg />
        </TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                ...theme.FONTS.H5,
                marginBottom: 10,
                color: theme.COLORS.black,
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{
                ...theme.FONTS.H5,
                marginBottom: 10,
                color: theme.COLORS.black,
              }}
            >
              ${total}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 9,
            }}
          >
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                color: theme.COLORS.gray1,
                fontSize: 16,
                lineHeight: 16 * 1.7,
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                color: theme.COLORS.gray1,
                fontSize: 16,
                lineHeight: 16 * 1.7,
              }}
            >
              -{discount}
            </Text>
          </View>
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
                ...theme.FONTS.Mulish_400Regular,
                color: theme.COLORS.gray1,
                fontSize: 16,
                lineHeight: 16 * 1.7,
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                color: "#00824B",
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                lineHeight: 16 * 1.7,
              }}
            >
              Free
            </Text>
          </View>
        </View>
        <View
          style={{
            width: theme.SIZES.width,
            height: 1,
            backgroundColor: theme.COLORS.lightBlue1,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              ...theme.FONTS.H4,
              color: theme.COLORS.black,
            }}
          >
            Total
          </Text>
          <Text
            style={{
              ...theme.FONTS.H4,
              color: theme.COLORS.black,
            }}
          >
            ${(total - discount).toFixed(2)}
          </Text>
        </View>
        <components.Button
          title="proceed to checkout"
          onPress={() => navigation.navigate("Checkout")}
          containerStyle={{ marginBottom: 30 }}
        />
      </ScrollView>
    );
  };

  const renderCartIsEmpty = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: theme.SIZES.height * 0.05,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <svg.ShoppingBagSvg />
        </View>
        <components.Line containerStyle={{ marginBottom: 14 }} />
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H2,
            color: theme.COLORS.black,
            paddingHorizontal: 60,
            marginBottom: 14,
          }}
        >
          Your cart is empty!
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.gray1,
            lineHeight: 16 * 1.7,
            paddingHorizontal: 50,
            marginBottom: 30,
          }}
        >
          Looks like you haven't made your order yet.
        </Text>
        <components.Button
          title="shop now"
          onPress={() =>
            navigation.navigate("MainLayout", dispatch(setScreen("Home")))
          }
        />
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {products.length === 0 ? renderCartIsEmpty() : renderContent()}
    </View>
  );
};

export default Order;
