import { TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { showMessage } from "react-native-flash-message";
import React from "react";

import { svg } from "../svg";

const InCart = ({ item }) => {
  const wishlist = useSelector((state) => state.wishlist.list);
  const productList = useSelector((state) => state.cart.list);
  const itemExist = (item) => {
    return wishlist.find((i) => i.id === item.id);
  };
  const productExist = (item) => {
    return productList.find((i) => i.id === item.id);
  };

  const dispatch = useDispatch();

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

  return (
    <TouchableOpacity
      style={{
        padding: 8,
        position: "absolute",
        right: 0,
        top: 38,
      }}
      onPress={() => {
        productExist(item) ? productExistMessage() : dispatch(addToCart(item));
        !productExist(item) &&
          showMessage({
            message: "Success",
            description: `${item.name} added to cart`,
            type: "success",
          });
      }}
    >
      <svg.ItemBagSvg />
    </TouchableOpacity>
  );
};

export default InCart;
