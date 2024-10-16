import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const SignUp = () => {
  const navigation = useNavigation();
  const renderHeader = () => {
    return <components.Header title="Sign up" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: theme.SIZES.height * 0.06,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <components.Line containerStyle={{ marginBottom: 14 }} />
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H1,
            marginBottom: 30,
            textTransform: "capitalize",
            color: theme.COLORS.black,
          }}
        >
          Sign up
        </Text>
        <components.InputField
          title="name"
          placeholder="Kristin Watson"
          containerStyle={{ marginBottom: 20 }}
          check={true}
        />
        <components.InputField
          title="Email"
          placeholder="kristinwatson@mail.com"
          containerStyle={{ marginBottom: 20 }}
          check={true}
        />
        <components.InputField
          title="password"
          placeholder="••••••••"
          containerStyle={{ marginBottom: 20 }}
          eyeOffSvg={true}
          secureTextEntry={true}
        />
        <components.InputField
          title="confirm password"
          placeholder="••••••••"
          containerStyle={{ marginBottom: 20 }}
          eyeOffSvg={true}
          secureTextEntry={true}
        />
        <components.Button
          title="Sign up"
          containerStyle={{ marginBottom: 20 }}
          onPress={() => navigation.navigate("VerifyYourPhoneNumber")}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              fontFamily: "Mulish_400Regular",
              fontSize: 16,
              color: theme.COLORS.gray1,
              marginRight: 3,
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                color: theme.COLORS.black,
              }}
            >
              Sign in.
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ marginHorizontal: 7 }} onPress={() => {}}>
            <svg.FacebookSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 7 }} onPress={() => {}}>
            <svg.TwitterSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 7 }} onPress={() => {}}>
            <svg.GoogleSvg />
          </TouchableOpacity>
        </View>
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

export default SignUp;
