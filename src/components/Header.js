import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setScreen } from "../store/tabSlice";
import Modal from "react-native-modal";

import { svg } from "../svg";
import { theme } from "../constants";
import ContactCategory from "./ContactCategory";

const Header = ({
  containerStyle,
  goBack,
  burgerMenu,
  title,
  logo,
  search,
  bag,
  border,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart.list);
  const elements = list.length;
  const total = useSelector((state) => state.cart.total).toFixed(2);

  const [showModal, setShowModal] = useState(false);

  const renderContacts = () => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{ margin: 0 }}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <View
          style={{
            width: 270,
            height: theme.SIZES.height,
            backgroundColor: theme.COLORS.black,
            paddingHorizontal: 20,
            paddingTop: 60,
            paddingBottom: 50,
            justifyContent: "space-between",
          }}
        >
          <View>
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: theme.COLORS.white,
                marginBottom: 14,
              }}
            />
            <Text
              style={{
                ...theme.FONTS.H2,
                color: theme.COLORS.white,
                marginBottom: 10,
              }}
            >
              Contact us
            </Text>
            <ContactCategory
              lineOne="27 Division St, New York,"
              lineTwo="NY 10002, USA"
              icon={<svg.ContactMapPinSvg />}
            />
            <ContactCategory
              lineOne="manerosale@mail.com"
              lineTwo="manerosupport@mail.com"
              icon={<svg.ContactMailSvg />}
            />
            <ContactCategory
              lineOne="+17  123456789"
              lineTwo="+17  987654321"
              icon={<svg.ContactPhoneSvg />}
            />
          </View>
          <View>
            <Text
              style={{
                color: "#B3B9C7",
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 14,
                lineHeight: 14 * 1.7,
                marginBottom: 18,
              }}
            >
              Track your order
            </Text>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                borderColor: "rgba(219,227,245, 0.2)",
                borderWidth: 1,
                borderRadius: 25,
                paddingLeft: 30,
                paddingRight: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onPress={() => {
                setShowModal(false);
                navigation.navigate("TrackYourOrder", {
                  orderNumber: "100345",
                });
              }}
            >
              <Text
                style={{
                  color: "#B3B9C7",
                  paddingHorizontal: 10,
                  position: "absolute",
                  top: -11,
                  left: 20,
                  backgroundColor: theme.COLORS.black,
                  textTransform: "uppercase",
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 12,
                  lineHeight: 12 * 1.7,
                }}
              >
                order number
              </Text>
              <Text style={{ color: theme.COLORS.white }}>100345</Text>
              <svg.GoToOrderSvg />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const cartIsEmpty = () => {
    return Alert.alert(
      "Message",
      "Your cart is empty, add something to cart.",
      [
        {
          text: "OK",
        },
      ]
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 42,
        ...containerStyle,
        borderBottomWidth: border ? 1 : 0,
        borderBottomColor: theme.COLORS.lightBlue1,
      }}
    >
      {goBack && (
        <View
          style={{
            position: "absolute",
            left: 0,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
            onPress={() => navigation.goBack()}
          >
            <svg.GoBackSvg />
          </TouchableOpacity>
        </View>
      )}
      {burgerMenu && (
        <View
          style={{
            position: "absolute",
            left: 0,
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <svg.BurgerMenuSvg />
          </TouchableOpacity>
        </View>
      )}
      {title && (
        <Text
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            ...theme.FONTS.H4,
            color: theme.COLORS.black,
          }}
        >
          {title}
        </Text>
      )}
      {search && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: theme.SIZES.width - 200,
          }}
        >
          <View style={{ marginRight: 7 }}>
            <svg.HeaderSearchSvg />
          </View>

          <TextInput
            placeholder="Search"
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      )}
      {logo && (
        <View style={{ top: -3 }}>
          <svg.LogoSvg />
        </View>
      )}
      {bag && (
        <View
          style={{
            position: "absolute",
            right: 0,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            style={{ paddingLeft: 20, flexDirection: "row" }}
            onPress={() => {
              list.length > 0
                ? dispatch(setScreen("Order")) &&
                  navigation.navigate("MainLayout")
                : cartIsEmpty();
            }}
          >
            <svg.HeaderBagSvg />
            <View
              style={{
                position: "absolute",
                right: 15,
                bottom: -3,
                backgroundColor: theme.COLORS.accent,
                borderRadius: 30,
                zIndex: 2,
              }}
            >
              <Text
                style={{
                  color: theme.COLORS.white,
                  ...theme.FONTS.Mulish_700Bold,
                  fontSize: 10,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  lineHeight: 10 * 1.5,
                }}
              >
                ${elements > 0 ? total : 0}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {renderContacts()}
    </View>
  );
};

export default Header;
