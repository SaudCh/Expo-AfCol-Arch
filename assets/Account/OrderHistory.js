import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import jwt_decode from "jwt-decode";
import envs from "../../Config/env"
import { globalStyle } from '../Components/Styles/GlobalStyles';
import { COLORS } from '../Const/color';
import { changeNS } from '../Components/Functions/Global';


export default function OrderHistory() {
    const [isLoading, setLoading] = useState(false)
    const [orders, setOrder] = useState([])

    useEffect(() => {
        const getOrder = async () => {
            var user;
            await AsyncStorage.getItem("@authen").then((val) => {
                if (val) {
                    const jsonValue = JSON.parse(val);
                    var decoded = jwt_decode(jsonValue.token);
                    user = decoded;
                } else {
                    user = "";
                }
            });


            try {
                setLoading(true)
                const response = await fetch(
                    `${envs.api}orders?user=${user._id}`, {
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

                console.log(responseData.data[0])
                setOrder(responseData.data);

                setLoading(false);
            } catch (err) {
                setLoading(false);

                let errs = {}
                errs.api = err.message || "Something went wrong, please try again."
                console.log(err.message)
            }
        }
        getOrder()
    }
        , [])

    const getDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        var date = new Date(date);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return day + '/' + month + '/' + year + ' ' + strTime;

    }

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                // ListEmptyComponent={<NoProductFound />}
                style={{ paddingTop: 10 }}
                keyExtractor={({ _id }) => _id}
                renderItem={(order) => {
                    const { item } = order;
                    return (
                        <View style={{ ...styles.order, ...globalStyle.shadow }} >
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ color: COLORS.dPink, fontSize: 16 }}>Order #{item.trackingId}</Text>
                                <Text style={styles.orderDate}>{getDate(item.createdAt)}</Text>
                            </View>
                            {
                                item.items.map((item) => {
                                    const { name, price, images } = item.product;
                                    const mainImage = images[0];
                                    return (
                                        <View style={styles.orderProduct}>
                                            <Image
                                                style={{ ...styles.cardImage }}
                                                source={{
                                                    uri: images.length ? mainImage.url : null,
                                                }} />
                                            <View style={{ marginLeft: 5 }}>
                                                <Text style={{ fontSize: 15, fontWeight: "bold", color: COLORS.dPink }}>{name}</Text>
                                                <Text style={styles.orderItemPrice}>Rs. {changeNS(price)}</Text>
                                                <Text>Quantity: {item.quantity}</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }

                            <Text style={{ fontSize: 14 }}>Total: {changeNS(item.subtotal + item.shipping)}</Text>

                            {item.status == "Pending" ? <Text style={{ textAlign: "right", color: COLORS.danger }}>{item.status}</Text> : null}
                            {item.status == "Processing" ? <Text style={{ textAlign: "right", color: COLORS.yellow }}>{item.status}</Text> : null}
                        </View>
                    )
                }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    order: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
    },
    orderProduct: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    cardImage: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 10
    },
});