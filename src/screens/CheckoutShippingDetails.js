import { Text, Image, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { theme } from "../constants";
import { components } from "../components";

const addresses = [
  {
    id: 1,
    name: "Home",
    address: "8000 S Kirkland Ave, Chicago",
  },
  {
    id: 2,
    name: "Work",
    address: "8000 S Kirkland Ave, Chicago",
  },
  {
    id: 3,
    name: "Other",
    address: "8000 S Kirkland Ave, Chicago",
  },
  {
    id: 4,
    name: "Current Location",
  },
];

const CheckoutShippingDetails = () => {
  const [selectedAddress, setSelectedAddress] = useState(
    addresses.length > 0 ? addresses[0].id : null
  );

  const [currentLocation, setCurrentLocation] = useState(false);

  const renderHeader = () => {
    return <components.Header title="Shipping details" goBack={true} />;
  };

  const renderMap = () => {
    return (
      <View
        style={{
          width: "100%",
          height: theme.SIZES.height * 0.45,
          borderBottomWidth: 1,
          borderBottomColor: theme.COLORS.lightBlue1,
        }}
      >
        <Image
          source={{
            uri: "https://dl.dropbox.com/s/p49ft4wwznrfiob/02.jpg?dl=0",
          }}
          style={{
            height: "100%",
            width: "100%",
            borderBottomWidth: 1,
          }}
        />
      </View>
    );
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
        {addresses.map((item, index, array) => {
          return index !== array.length - 1 ? (
            <TouchableOpacity
              key={index}
              style={{
                width: "100%",
                paddingTop: 10,
                paddingBottom: 10,
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderBottomColor: theme.COLORS.lightBlue1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onPress={() => setSelectedAddress(item.id)}
            >
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    ...theme.FONTS.H5,
                    color: theme.COLORS.black,
                    marginBottom: 4,
                  }}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: theme.COLORS.gray1,
                  }}
                  numberOfLines={1}
                >
                  {item.address}
                </Text>
              </View>
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
                {selectedAddress === item.id && (
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
          ) : (
            <TouchableOpacity
              key={index}
              style={{ marginTop: 20, paddingHorizontal: 20 }}
              onPress={() => setSelectedAddress(item.id)}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: theme.SIZES.width - 40 - 40 }}>
                  <components.InputField
                    placeholder="3646 S 58th Ave, Cicero, IL 608"
                    title="enter an address"
                  />
                </View>
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
                  {selectedAddress === item.id && (
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
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            marginTop: 10,
            marginBottom: 20,
          }}
          onPress={() => setCurrentLocation(!currentLocation)}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: theme.COLORS.lightBlue1,
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {currentLocation && (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: theme.COLORS.lightBlue1,
                  borderRadius: 2,
                }}
              />
            )}
          </View>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 14,
              lineHeight: 14 * 1.5,
              color: theme.COLORS.gray1,
            }}
          >
            Use current location
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
      {renderHeader()}
      {renderMap()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default CheckoutShippingDetails;
