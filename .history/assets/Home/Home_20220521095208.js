import React, { useState, useEffect, useCallback } from 'react'
import { RefreshControl, View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Searchbar, TextInput as Input } from 'react-native-paper';
import envs from '../../Config/env'
import ProductCard from '../Components/Products/Card';


const Home = () => {
    const navigation = useNavigation();
    const [products, setProduct] = useState([])
    const [isLoading, setLoading] = useState(false)

    const [refreshing, setRefreshing] = useState(false);

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
        fetchProducts(true)
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

    return (
        <View style={{ flex: 1 }}>
            <Searchbar
                placeholder="Search"
            />
            {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                <FlatList
                    data={products}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    numColumns={2}
                    style={{ paddingTop: 10 }}
                    keyExtractor={({ _id }, index) => _id}
                    renderItem={(item) => (
                        <ProductCard item={item.item} />
                    )}
                />
            )}

        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    searchInput: {
        height: 45,
        paddingLeft: 20,
        backgroundColor: '#DCDCDC',
    }
});