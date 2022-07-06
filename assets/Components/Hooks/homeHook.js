import React, { useEffect, useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import envs from "../../../Config/env"


export const useHome = () => {

    const [products, setProduct] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [filterProd, setFilterProd] = useState([]);
    const [search, setSearch] = useState("")

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                `${envs.api}products/homepage`, {
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

            // console.log(responseData)
            setProduct(responseData.data)
            setFilterProd(responseData.data)

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

    useEffect(() => {
        fetchProducts();
        return () => {

        }
    }, []);

    const searchProducts = (text) => {
        if (text) {
            var newProd = products.filter((val) => {
                console.log(val.name)
                const prodData = val.name ? val.name.toUpperCase() : ''.toUpperCase();
                const searchData = text.toUpperCase();

                return prodData.indexOf(searchData) > -1;
            })
            setFilterProd(newProd)
            setSearch(text)

        } else {
            setFilterProd(products)
            setSearch(text)
        }
    }
    const NoProductFound = () => {
        return (
            <View>
                <Text>No Product Found</Text>
            </View>
        )
    }

    return { products, filterProd, isLoading, refreshing, onRefresh, search, searchProducts, NoProductFound }
}