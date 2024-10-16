import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const Profile = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [avatarLoading, setAvatarLoading] = useState(true);

  const renderHeader = () => {
    return (
      <components.Header
        title="Profile"
        burgerMenu={true}
        bag={true}
        border={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <components.Line containerStyle={{ marginTop: 23, marginBottom: 20 }} />
        <TouchableOpacity
          style={{ width: 126, height: 126, marginBottom: 20 }}
          onPress={() => navigation.navigate("EditProfile")}
        >
          {avatarLoading && (
            <ActivityIndicator
              size="small"
              color={theme.COLORS.lightGray}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 0,
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EBF2FC",
                borderRadius: 126 / 2,
              }}
            />
          )}
          <Image
            source={{
              uri: "https://dl.dropbox.com/s/tcc67qouu0bzuzc/user.png?dl=0",
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 63,
              borderWidth: 6,
              borderColor: theme.COLORS.lightBlue1,
            }}
            onLoadStart={() => setAvatarLoading(true)}
            onLoadEnd={() => setAvatarLoading(false)}
          />
          <View style={{ position: "absolute", right: 6, bottom: 6 }}>
            <svg.ProfileEditSvg />
          </View>
        </TouchableOpacity>

        <Text style={{ ...theme.FONTS.H3, color: theme.COLORS.black }}>
          Kristin Watson
        </Text>
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 14,
            color: theme.COLORS.gray1,
            lineHeight: 14 * 1.7,
            marginBottom: 22,
          }}
        >
          kristinwatson@mail.com
        </Text>
        <View style={{ width: "100%" }}>
          <components.ProfileCategory
            title="Order history"
            icon={<svg.CalendarSvg />}
            onPress={() => navigation.navigate("OrderHistory")}
          />
          <components.ProfileCategory
            title="Payment method"
            icon={<svg.CreditCardSvg />}
            onPress={() => navigation.navigate("PaymentMethod")}
          />
          <components.ProfileCategory
            title="My address"
            icon={<svg.MapPinSvg />}
            onPress={() => navigation.navigate("MyAddress")}
          />
          <components.ProfileCategory
            title="My promocodes"
            icon={<svg.GiftSvg />}
            onPress={() => navigation.navigate("MyPromocodes")}
          />
          <components.ProfileCategory
            title="Sign out"
            icon={<svg.LogOutSvg />}
            categoryNavigation={false}
            onPress={() => setShowModal(true)}
          />
        </View>
      </ScrollView>
    );
  };

  const renderModal = () => {
    return (
      <View style={{ alignSelf: "center" }}>
        <Modal
          isVisible={showModal}
          onBackdropPress={() => setShowModal(false)}
          hideModalContentWhileAnimating={true}
          backdropTransitionOutTiming={0}
          style={{ margin: 0 }}
          animationIn="zoomIn"
          animationOut="zoomOut"
        >
          <View
            style={{
              width: 335,
              height: 335,
              backgroundColor: theme.COLORS.transparent,
              borderRadius: 200,
              borderWidth: 4,
              borderColor: theme.COLORS.white,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                width: 292,
                height: 292,
                backgroundColor: theme.COLORS.white,
                borderRadius: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Line /> */}
              <Text
                style={{
                  textAlign: "center",
                  ...theme.FONTS.H3,
                  paddingHorizontal: 30,
                  marginVertical: 20,
                }}
              >
                Are you sure you want to sign out ?
              </Text>
              <TouchableOpacity
                style={{
                  height: 50,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.COLORS.black,
                  marginBottom: 20,
                }}
                onPress={() => {
                  setShowModal(false);
                  navigation.navigate("SignIn");
                }}
              >
                <Text
                  style={{
                    color: theme.COLORS.white,
                    textTransform: "uppercase",
                    ...theme.FONTS.Mulish_600SemiBold,
                    fontSize: 14,
                    paddingHorizontal: 51,
                    textAlign: "center",
                  }}
                >
                  sure
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text
                  style={{
                    color: theme.COLORS.black,
                    textTransform: "uppercase",
                    ...theme.FONTS.Mulish_600SemiBold,
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderContent()}
      {renderModal()}
    </View>
  );
};

export default Profile;
