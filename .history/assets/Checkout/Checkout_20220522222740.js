import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, List } from 'react-native-paper'
import { useCart } from '../Components/Hooks/cartHook'
import CartSection from './CartSection';
import { globalStyle } from '../Components/Styles/GlobalStyles';
import ContactInfo from './ContactInfo';
import { changeNS } from '../Components/Functions/Global';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Checkout() {
    const [user, setUser] = useState("")
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);
    const { cart, isLoading, total } = useCart()

    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("Pakistan")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [addressDetails, setAddressDetails] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phone, setPhone] = useState("")

    const getUser = async () => {
        var usr;
        const jsonValue = await AsyncStorage.getItem('@authen')
        jsonValue != null ? usr = JSON.parse(jsonValue) : null;
        setUser(usr)
    }

    const logout = async () => {
        let isMounted = true;
        try {
            await AsyncStorage.removeItem("@authen");
            ToastAndroid.show("Logged Out", ToastAndroid.SHORT);
        }
        catch (exception) {
            return false;
        }
        return () => { isMounted = false };
    };

    useEffect(() => {
        let isMounted = true;
        getUser()
        return () => { isMounted = false };

    }, [logout])
    return (
        <View>
            <ScrollView style={{ flex: 1 }}>
                <List.Section >
                    <List.Accordion
                        title="Cart"
                    >
                        <View style={{ ...styles.card, ...globalStyle.shadow }}>
                            {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                                <FlatList
                                    data={cart}
                                    ListEmptyComponent={<View style={{ justifyContent: 'center', alignItems: "center" }}><Text>Empty</Text></View>}
                                    style={{ paddingTop: 10 }}
                                    keyExtractor={({ id }) => id}
                                    renderItem={(item) => (
                                        <CartSection item={item.item} />
                                    )}
                                />
                            )}

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
                                <Text>Sub Total</Text>
                                <Text>Rs. {changeNS(total)}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
                                <Text>Shipping</Text>
                                <Text>---</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
                                <Text style={{ fontWeight: "bold" }}>Total</Text>
                                <Text style={{ fontWeight: "bold" }}>Rs. {changeNS(total)}</Text>
                            </View>

                        </View>
                    </List.Accordion>

                    <List.Accordion
                        title="Information"
                        expanded={expanded}
                        onPress={handlePress}>
                        <ContactInfo user={user} logout={logout}
                            email={email} setEmail={setEmail}
                            firstName={firstName} setFirstName={setFirstName}
                            lastName={lastName}
                            address={address}
                            addressDetails={address}
                            city={city}
                            postalCode={postalCode}
                            phone={phone}

                        />
                    </List.Accordion>
                </List.Section>

            </ScrollView>
            <View style={{}}>
                <Button onPress={() => navigation.goBack()}>Return to Cart</Button>
                <Button onPress={() => handleSubmit()}>Continue to Shipping</Button>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
    },

});