import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import { showMessage } from "react-native-flash-message";
import { useNavigation, useRoute } from "@react-navigation/native";

import { theme } from "../constants";
import { components } from "../components";
import { svg } from "../svg";

const Product = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;
  const dispatch = useDispatch();

  const currentProduct = useSelector((state) => {
    return state.cart.list.find((item) => item.id === product.id);
  });

  const [productSize, setProductSize] = useState(
    currentProduct ? currentProduct.size : product.sizes[1]
  );
  const [productColor, setProductColor] = useState(
    currentProduct ? currentProduct.color : product.colors[1]
  );

  const wishlist = useSelector((state) => state.wishlist.list);
  const productList = useSelector((state) => state.cart.list);
  const itemExist = (product) => {
    return wishlist.find((i) => i.id === product.id);
  };
  const productExist = (product) => {
    return productList.find((i) => i.id === product.id);
  };

  const itemQuantity = () => {
    return productList.find((i) => i.id === product.id)?.quantity;
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const removeFromWishlistHandler = (product) => {
    return Alert.alert(
      "Message",
      "Are you sure you want to delete from wishlist ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => dispatch(removeFromWishlist(product)),
        },
      ]
    );
  };

  const productExistMessage = () => {
    return Alert.alert(
      "Alert!",
      "The product already exists in the cart, please remove the product from the cart",
      [
        {
          text: "Ok",
        },
      ]
    );
  };

  const cartItem = {
    id: product.id,
    name: product.name,
    is_sale: product.is_sale,
    price: product.price,
    oldPrice: product.old_price,
    image: product.image,
    size: productSize,
    color: productColor,
  };

  const renderButton = () => {
    return (
      <components.Button
        title="+ ADd to cart"
        onPress={() => {
          productExist(product)
            ? productExistMessage()
            : dispatch(addToCart(cartItem));
          !productExist(product) &&
            showMessage({
              message: "Success",
              description: `${cartItem.name} added to cart`,
              type: "success",
            });
        }}
        containerStyle={{ marginBottom: 40 }}
      />
    );
  };

  const renderHeader = () => {
    return <components.Header logo={true} goBack={true} bag={true} />;
  };

  const renderSizes = () => {
    return (
      <View>
        <Text
          style={{
            ...theme.FONTS.H5,
            color: theme.COLORS.black,
            marginTop: 20,
            marginBottom: 14,
          }}
        >
          Size
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          {product.sizes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 50,
                height: 50,
                marginRight: 7,
                borderWidth: 1,
                borderColor: theme.COLORS.lightBlue1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                backgroundColor:
                  productSize === item
                    ? theme.COLORS.lightBlue1
                    : theme.COLORS.transparent,
              }}
              onPress={() => setProductSize(item)}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 12,
                  textTransform: "uppercase",
                  color: theme.COLORS.black,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderColors = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            ...theme.FONTS.H5,
            color: theme.COLORS.black,
            marginTop: 20,
            marginBottom: 14,
            marginRight: 25,
          }}
        >
          Color
        </Text>
        {product.colors.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setProductColor(item)}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor:
                  item === "carrot"
                    ? "#FF6262"
                    : item === "blue"
                    ? "#63C7FF"
                    : item === "beige"
                    ? "#F8E7CD"
                    : item === "purple"
                    ? "#323858"
                    : item === "black"
                    ? "#111111"
                    : "",
                marginHorizontal: 7,
                borderRadius: 15,
                borderWidth: 4,
                borderColor:
                  item === productColor
                    ? theme.COLORS.lightBlue1
                    : theme.COLORS.transparent,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderCarousel = () => {
    return (
      <View style={{ marginTop: 17 }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        >
          {product.images.map((item, index) => {
            return (
              <components.ImageItem
                item={item}
                key={index}
                containerStyle={{
                  width: theme.SIZES.width,
                  height: 350,
                  backgroundColor: theme.COLORS.lightBlue2,
                }}
                resizeMode="contain"
              />
            );
          })}
        </ScrollView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {product.images.map((_, index) => (
            <View
              key={index}
              style={{
                width: currentSlideIndex === index ? 22 : 8,
                height: 8,
                marginHorizontal: 5,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: theme.COLORS.black,
                marginTop: 20,
                backgroundColor:
                  currentSlideIndex === index
                    ? theme.COLORS.white
                    : theme.COLORS.black,
              }}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderProductInfo = () => {
    return (
      <View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: theme.COLORS.lightBlue1,
            marginTop: 20,
            marginBottom: 30,
          }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ ...theme.FONTS.H3 }}>{product.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                itemExist(product)
                  ? removeFromWishlistHandler(product)
                  : dispatch(addToWishlist(product));
              }}
            >
              <svg.ProductLikeSvg
                fillColor={
                  itemExist(product)
                    ? theme.COLORS.accent
                    : theme.COLORS.transparent
                }
                strokeColor={
                  itemExist(product) ? theme.COLORS.accent : theme.COLORS.gray1
                }
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
            onPress={() =>
              navigation.navigate("Reviews", {
                reviews: product.reviews,
              })
            }
          >
            <svg.RatingSvg rating={product.rating} />
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                color: theme.COLORS.gray1,
                fontSize: 12,
                lineHeight: 12 * 1.7,
                marginLeft: 4,
              }}
            >
              ({product.reviews.length})
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                ...theme.FONTS.Mulish_600SemiBold,
                fontSize: 20,
                color: theme.COLORS.black,
                lineHeight: 20 * 1.5,
                marginBottom: 20,
              }}
            >
              ${product.price}
            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: theme.COLORS.lightBlue1,
              }}
            >
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart(product))}
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 25,
                  paddingVertical: 22,
                }}
              >
                <svg.MinusSvg />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Mulish_600SemiBold",
                  color: theme.COLORS.gray1,
                  fontSize: 14,
                  paddingHorizontal: 10,
                }}
              >
                {itemQuantity() > 0 ? itemQuantity() : 0}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(addToCart(cartItem))}
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 25,
                  paddingVertical: 22,
                }}
              >
                <svg.PlusSvg />
              </TouchableOpacity>
            </View>
          </View>

          {renderSizes()}
          {renderColors()}
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.black,
              marginBottom: 14,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              lineHeight: 16 * 1.7,
              color: theme.COLORS.gray1,
              marginBottom: 20,
            }}
          >
            Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad
            sint amet. Nostrud deserunt consectetur culpa minim mollit veniam
            aliquip pariatur exercitation ullamco ea voluptate et. Pariatur
            ipsum mollit magna proident nisi ipsum.
          </Text>
          {renderButton()}
        </View>
      </View>
    );
  };

  const renderReviews = () => {
    return (
      <View>
        <View
          style={{
            paddingHorizontal: 20,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ ...theme.FONTS.H3, color: theme.COLORS.black }}>
            Reviews ({product.reviews.length})
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Reviews", {
                reviews: product.reviews,
              })
            }
          >
            <svg.ViewAllSvg />
          </TouchableOpacity>
        </View>
        {product.reviews.map((item, index, array) => {
          return (
            index < 3 && (
              <View
                key={index}
                style={{
                  width: "100%",
                  paddingVertical: 20,
                  borderColor: theme.COLORS.lightBlue1,
                  borderBottomWidth: array.length - 1 === index ? 0 : 1,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                }}
              >
                <components.ImageItem
                  item={item}
                  containerStyle={{
                    width: 50,
                    height: 50,
                    marginRight: 14,
                  }}
                  imageStyle={{ borderRadius: 25 }}
                />
                <View style={{ flex: 1 }}>
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
                        color: theme.COLORS.black,
                        lineHeight: 16 * 1.2,
                        marginBottom: 6,
                      }}
                    >
                      {item.name}
                    </Text>
                    <svg.RatingSvg rating={item.rating} />
                  </View>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 10,
                      color: theme.COLORS.gray1,
                      lineHeight: 10 * 1.5,
                      marginBottom: 10,
                    }}
                  >
                    {item.created_at}
                  </Text>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 14,
                      lineHeight: 14 * 1.5,
                      color: theme.COLORS.gray1,
                    }}
                  >
                    {item.comment}
                  </Text>
                </View>
              </View>
            )
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: theme.COLORS.white,
        }}
        showsVerticalScrollIndicator={false}
      >
        {renderCarousel()}
        {renderProductInfo()}
        {renderReviews()}
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

export default Product;
