import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { components } from "../components";
import { theme } from "../constants";

const ConfirmationCode = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return <components.Header title="Confirmation Code" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.gray1,
            paddingTop: 20,
            lineHeight: 25,
            marginBottom: 30,
          }}
        >
          Enter your OTP code here.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <components.OtpNumber />
          <components.OtpNumber />
          <components.OtpNumber />
          <components.OtpNumber />
          <components.OtpNumber />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              color: theme.COLORS.gray1,
              marginRight: 3,
              lineHeight: 16 * 1.7,
            }}
          >
            Didn’t receive the OTP?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                color: theme.COLORS.black,
              }}
            >
              Resend.
            </Text>
          </TouchableOpacity>
        </View>
        <components.Button
          title="verify"
          onPress={() => navigation.navigate("AccountCreated")}
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

export default ConfirmationCode;
