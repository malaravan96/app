import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const Shop = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { title, products } = route.params || {};

  const renderHeader = () => (
    <components.Header title={title} goBack={true} bag={true} />
  );

  const renderFilterAndSort = () => (
    <View
      style={{
        marginTop: 12,
        marginBottom: 9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Filter")}
      >
        <svg.SettingsSvg />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <svg.SortingSvg />
      </TouchableOpacity>
    </View>
  );

  const renderProducts = () => (
    <FlatList
      data={products}
      contentContainerStyle={{
        flexGrow: 1,
        marginHorizontal: 20,
        marginTop: 8,
      }}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            width: theme.SIZES.width * 0.43,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("Product", { product: item })}
        >
          <components.ImageItem
            item={item}
            containerStyle={{
              height: 170,
              width: "100%",
              marginBottom: 6,
              backgroundColor: theme.COLORS.lightBlue2,
            }}
            resizeMode="contain"
          >
            {item.is_sale && <components.Sale />}
            <components.Favorite item={item} />
            <components.InCart item={item} />
          </components.ImageItem>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <svg.RatingSvg rating={item.rating} />
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 12,
                color: theme.COLORS.gray1,
                lineHeight: 12 * 1.7,
                marginLeft: 4,
              }}
            >
              ({item.rating})
            </Text>
          </View>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 14,
              color: theme.COLORS.gray1,
              lineHeight: 14 * 1.7,
            }}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          {item.oldPrice ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: theme.COLORS.gray1,
                  marginRight: 4,
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 12,
                  lineHeight: 12 * 1.5,
                  textDecorationLine: "line-through",
                }}
              >
                ${item.oldPrice}
              </Text>
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: theme.COLORS.accent,
                }}
              >
                ${item.price}
              </Text>
            </View>
          ) : (
            <Text
              style={{
                ...theme.FONTS.Mulish_600SemiBold,
                fontSize: 14,
                lineHeight: 14 * 1.5,
                color: theme.COLORS.black,
              }}
            >
              ${item.price}
            </Text>
          )}
        </TouchableOpacity>
      )}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.white }}>
      {renderHeader()}
      {renderFilterAndSort()}
      {renderProducts()}
    </SafeAreaView>
  );
};

export default Shop;
