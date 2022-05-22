import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, ToastAndroid, Button, StatusBar } from "react-native";

export const useCart = () => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = async (item, quantity) => {
        const itm = {
            id: item._id,
            name: item.name,
            images: item.images,
            price: item.price,
            subCategory: {
                name: item.subCategory.name,
                _id: item.subCategory._id,
                discount: item.subCategory.discount,
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

            ToastAndroid.show("Added to Cart", ToastAndroid.SHORT);


        } else {
            ToastAndroid.show("Already Exist", ToastAndroid.SHORT);
        }
    };

    useEffect(async () => {
        var crt;
        const jsonValue = await AsyncStorage.getItem('@cart')
        jsonValue != null ? crt = JSON.parse(jsonValue) : null;
        setCart(crt)
        let tot = 0;
        crt.map((e) => {
            let actprice = e.subCategory.discount ? e.price - e.subCategory.discount : e.price
            tot = tot + actprice * e.quantity
        })

        setTotal(tot)
    }, [])

    return { addToCart, cart, total }

}