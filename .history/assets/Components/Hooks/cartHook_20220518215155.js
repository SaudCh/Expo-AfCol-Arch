import { useState, useCallback, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCart = () => {

    const addToCart = async (item, quantity) => {
        const itm = {
            id: item._id,
            name: item.name,
            images: item.images,
            price: item.price,
            subCategory: {
                name: item.subCategory.name,
                _id: item.subCategory._id,
            },
            quantity: quantity
        };

        var cart;
        var flag = 0;

        const jsonValue = await AsyncStorage.getItem('@cart')
        jsonValue != null ? cart = JSON.parse(jsonValue) : null;

        if (!cart) {
            cart = [];
        }
        if (cart) {
            cart.map((e) => (e.id === item._id ? (flag = 1) : null));
        }

        if (flag === 0) {
            if (cart.length === 0) {
                const crt = [];
                crt.push(itm);
                await AsyncStorage.setItem('@cart', JSON.stringify(crt))
            } else {
                cart.push(itm);
                await AsyncStorage.setItem('@cart', JSON.stringify(cart))
            }
            console.log("Added")

        } else {
            console.log("Already Exist")
        }
    };

    return { addToCart }

}