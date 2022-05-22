import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
// import { TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../Const/color';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '../Components/Icons/Icon';

export default function ContactInfo({ user, logout }) {
    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [addressDetails, setAddressDetails] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phone, setPhone] = useState("")
    const [errors, setErrors] = useState("")

    const handleSubmit = () => {
        const data = {
            email,
            country,
            firstName,
            lastName,
            address,
            addressDetails,
            city,
            postalCode,
            phone
        }

        console.log(data)
    }

    return (
        <View style={{ ...styles.card }}>
            <View>
                <Text style={{ color: "#000", fontSize: 20 }}>Contact Info</Text>
                {user ?

                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Avatar size={50} />
                        <View style={{ marginLeft: 10 }}>
                            <Text>{user.email}</Text>
                            <TouchableOpacity onPress={() => logout()}><Text style={{ color: COLORS.dPink, fontWeight: "bold" }}>Logout</Text></TouchableOpacity>

                        </View>
                    </View>
                    :
                    <>
                        <TextInput
                            style={{ ...styles.input }}
                            // style={{ height: 40, marginTop: errors.api ? 5 : 10 }}
                            placeholder="Email"
                            value={email}
                            onChangeText={email => setEmail(email)}
                        />
                        <View style={{ alignItems: "flex-end", marginTop: 5 }}>
                            <Text >Already have an account? <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={{ color: COLORS.dPink, fontWeight: "bold" }}>Login</Text></TouchableOpacity></Text>
                        </View>
                    </>
                }
            </View>
            <View>
                <Text style={{ color: "#000", fontSize: 20, marginVertical: 10 }}>Shipping Address</Text>

                <View style={{ ...styles.input }}>
                    <Picker
                        selectedValue={country}
                        onValueChange={(itemValue, itemIndex) =>
                            setCountry(itemValue)
                        }>
                        <Picker.Item label="Pakistan" value="Pakistan" />
                    </Picker>
                </View>

                <TextInput
                    style={{ ...styles.input }}
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={e => setFirstName(e)}
                />
                <TextInput
                    style={{ ...styles.input }}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={e => setLastName(e)}
                />
                <TextInput
                    style={{ ...styles.input }}
                    placeholder="Address"
                    value={address}
                    onChangeText={e => setAddress(e)}
                />
                <TextInput
                    style={{ ...styles.input }}
                    placeholder="Appartment, suite etc. (Optional)"
                    value={addressDetails}
                    onChangeText={e => setAddressDetails(e)}
                />
                <TextInput
                    style={{ ...styles.input }}
                    placeholder="City"
                    value={city}
                    onChangeText={e => setCity(e)}
                />
                <TextInput
                    style={{ ...styles.input }}
                    placeholder="Postal code"
                    value={postalCode}
                    onChangeText={e => setPostalCode(e)}
                />
                <TextInput
                    style={{ ...styles.input }}
                    placeholder="refPhone"
                    value={phone}
                    onChangeText={e => setPhone(e)}
                />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
    },
    input: {
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 3,
        backgroundColor: COLORS.light,
        justifyContent: "center",
        height: 40,
        paddingLeft: 5
    }
});