import React, { useEffect, useState, useCallback } from 'react'
import { useNavigation } from "@react-navigation/native";


export const useHome = () => {

    const navigation = useNavigation();
    const [products, setProduct] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [filterProd, setFilterProd] = useState([]);
    const [search, setSearch] = useState("")

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                //envs.DEV_API + `products`, {
                `https://afcollection.herokuapp.com/api/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }


            setProduct(responseData.data)
            setLoading(false);
        } catch (err) {
            setLoading(false);

            let errs = {}
            errs.api = err.message || "Something went wrong, please try again."
            console.log(err.message)
        }
    }

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchProducts()
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(async () => {

        try {
            setLoading(true)
            const response = await fetch(
                //envs.DEV_API + `products`, {
                `https://afcollection.herokuapp.com/api/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }


            setProduct(responseData.data)
            setLoading(false);
        } catch (err) {
            setLoading(false);

            let errs = {}
            errs.api = err.message || "Something went wrong, please try again."
            console.log(err.message)
        }

    }, []);

    const searchProducts = (text) => {
        if (text) {

        } else {
            setFilterProd(products)
            setSearch(text)
        }
    }

    return { navigation, products, isLoading, refreshing, onRefresh, search, searchProducts }
}