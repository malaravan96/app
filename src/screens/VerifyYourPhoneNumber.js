import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-input";

import { theme } from "../constants";
import { components } from "../components";

const VerifyYourPhoneNumber = () => {
  const navigation = useNavigation();
  const renderHeader = () => {
    return <components.Header title="Verify your phone number" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingVertical: 30,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.gray1,
            lineHeight: 25,
            marginBottom: 40,
          }}
        >
          We have sent you an SMS with a code to number +17 0123456789.
        </Text>
        <components.InputField
          title="phone number"
          placeholder="+17123456789"
          containerStyle={{ marginBottom: 20 }}
        />
        <components.Button
          title="confirm"
          onPress={() => navigation.navigate("ConfirmationCode")}
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

export default VerifyYourPhoneNumber;
