import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  RefreshControl,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import { components } from "../components";
import { theme, dummyData, homeCarousel } from "../constants";

const banner = "https://dl.dropbox.com/s/rhjldpcg8jkk505/02.png?dl=0";

const HomeOne = () => {
  const navigation = useNavigation();
  const featured = dummyData.filter((item) => item.featured);
  const bestSellers = dummyData.filter((item) => item.is_bestseller);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const renderHeader = () => {
    return <components.Header logo={true} burgerMenu={true} bag={true} />;
  };

  const renderCarousel = () => {
    return (
      <View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        >
          {homeCarousel.map((item, index) => {
            return (
              <components.ImageItem
                item={item}
                key={index}
                containerStyle={{ width: theme.SIZES.width, height: 300 }}
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
          {homeCarousel.map((_, index) => (
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
                marginBottom: 40,
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

  const renderBestSellers = () => {
    return (
      <View style={{ marginBottom: 40 }}>
        <components.ProductCategory
          title="Best sellers"
          containerStyle={{ marginHorizontal: 20, marginBottom: 14 }}
          onPress={() =>
            navigation.navigate("Shop", {
              title: "Best sellers",
              products: bestSellers,
            })
          }
        />
        <FlatList
          data={bestSellers}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
          renderItem={({ item, index }) =>
            index < 10 ? (
              <TouchableOpacity
                style={{ width: 200, marginRight: 14 }}
                onPress={() =>
                  navigation.navigate("Product", {
                    product: item,
                  })
                }
              >
                <components.ImageItem
                  item={item}
                  containerStyle={{
                    width: 200,
                    height: 250,
                    marginBottom: 6,
                    backgroundColor: theme.COLORS.lightBlue2,
                  }}
                  resizeMode="contain"
                >
                  {item.is_sale && <components.Sale />}
                  <components.Favorite item={item} />
                  <components.InCart item={item} />
                </components.ImageItem>

                <components.Rating item={item} />
                <components.ProductName item={item} />
                <components.Price item={item} />
              </TouchableOpacity>
            ) : null
          }
        />
      </View>
    );
  };

  const renderBanner = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Shop", { products: dummyData })}
      >
        <View
          style={{
            width: "100%",
            height: 150,
            marginBottom: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {bannerLoading && (
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
              }}
            />
          )}
          <Image
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            onLoad={() => setBannerLoading(false)}
            source={{ uri: banner }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderFeatured = () => {
    return (
      <View style={{ marginBottom: 40 }}>
        <components.ProductCategory
          title="Featured products"
          containerStyle={{ marginHorizontal: 20, marginBottom: 14 }}
          onPress={() =>
            navigation.navigate("Shop", {
              title: "Featured Products",
              products: featured,
            })
          }
        />
        <FlatList
          data={featured}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ width: 138, marginRight: 14 }}
              onPress={() =>
                navigation.navigate("Product", {
                  product: item,
                })
              }
            >
              <components.ImageItem
                item={item}
                containerStyle={{
                  width: "100%",
                  height: 170,
                  marginBottom: 6,
                  backgroundColor: theme.COLORS.lightBlue2,
                }}
                resizeMode="contain"
              >
                {item.is_sale === true && <components.Sale />}
                <components.Favorite item={item} />
                <components.InCart item={item} />
              </components.ImageItem>

              <components.Rating item={item} />
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
              <components.Price item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  const ifBestSellersIsEmpty = () => {
    return bestSellers.length > 0 && renderBestSellers();
  };

  const ifFeaturedIsEmpty = () => {
    return featured.length > 0 && renderFeatured();
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
        stickyHeaderHiddenOnScroll={true}
      >
        {renderCarousel()}
        {ifBestSellersIsEmpty()}
        {renderBanner()}
        {ifFeaturedIsEmpty()}
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default HomeOne;
