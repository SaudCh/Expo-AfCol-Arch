import React, { useState, useEffect, useCallback } from 'react'
import { RefreshControl, View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useHome } from '../Components/Hooks/homeHook';
import ProductCard from '../Components/Products/Card';


export default function BySubCategory({ route }) {

    const [products, setProduct] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [filterProd, setFilterProd] = useState([]);
    const [search, setSearch] = useState("")

    const { id } = route.params

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
            var data = responseData.data;
            if (id) {
                const newProd = data.filter((val) => {
                    return val.subCategory._id.toLowerCase().includes(id.toLowerCase())
                })
                setProduct(newProd)
                setFilterProd(newProd)
            } else {
                setProduct(data)
                setFilterProd(data)
            }


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
        setSearch("")
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        fetchProducts();
        return () => { }
    }, [id]);

    const NoProductFound = () => {
        return (
            <View>
                <Text>No Product Found</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Searchbar
                placeholder="Search"
                value={search}
                onChangeText={(text) => searchProducts(text)}
            />
            {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                <FlatList
                    data={products}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    ListEmptyComponent={<NoProductFound />}
                    numColumns={2}
                    style={{ paddingTop: 10 }}
                    keyExtractor={({ _id }) => _id}
                    renderItem={(item) => (
                        <ProductCard item={item.item} />
                    )}
                />
            )}

        </View>
    )
}