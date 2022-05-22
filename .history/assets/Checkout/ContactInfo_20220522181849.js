import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../Const/color';

export default function ContactInfo() {

    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [errors, setErrors] = useState("")


    return (
        <View style={{ ...styles.card }}>
            <View>
                <Text style={{ color: "#000", fontSize: 20 }}>Contact Info</Text>
                <TextInput
                    mode="outlined"
                    label="Email"
                    style={{ height: 40, marginTop: errors.api ? 5 : 10 }}
                    placeholder="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View>
                <Text style={{ color: "#000", fontSize: 20, marginTop: 10, marginBottom: 20 }}>Shipping Address</Text>

                <View style={{ borderWidth: 1, borderColor: COLORS.secondary, borderRadius: 3, backgroundColor: COLORS.light, justifyContent: "center", height: 40 }}>
                    <Picker
                        selectedValue={country}
                        onValueChange={(itemValue, itemIndex) =>
                            setCountry(itemValue)
                        }>
                        <Picker.Item label="Pakistan" value="Pakistan" />
                    </Picker>
                </View>

                <TextInput
                    mode="outlined"
                    style={{ height: 40, marginTop: 10, marginBottom: 10 }}
                    label="First Name"
                    placeholder="First Name"
                // value={}
                // onChangeText={e => (e)}
                />
                <TextInput
                    mode="outlined"
                    style={{ height: 40, marginTop: 10, marginBottom: 10 }}
                    label="Last Name"
                    placeholder="Last Name"
                // value={}
                // onChangeText={e => (e)}
                />
                <TextInput
                    mode="outlined"
                    style={{ height: 40, marginTop: 10, marginBottom: 10 }}
                    label="Address"
                    placeholder="Address"
                // value={}
                // onChangeText={e => (e)}
                />
                <TextInput
                    mode="outlined"
                    style={{ height: 40, marginTop: 10, marginBottom: 10 }}
                    label="Address Details"
                    placeholder="Appartment, suite etc. (Optional)"
                // value={}
                // onChangeText={e => (e)}
                />
                <TextInput
                    mode="outlined"
                    style={{ height: 40, marginTop: 10, marginBottom: 10 }}
                    label="City"
                    placeholder="City"
                // value={}
                // onChangeText={e => (e)}
                />
                <TextInput
                    mode="outlined"
                    style={{ height: 40, marginTop: 10, marginBottom: 10 }}
                    label="Postal code"
                    placeholder="Postal code"
                // value={}
                // onChangeText={e => (e)}
                />
                <TextInput
                    mode="outlined"
                    style={{ height: 40, marginTop: 10, marginBottom: 10 }}
                    label="refPhone"
                    placeholder="refPhone"
                // value={}
                // onChangeText={e => (e)}
                />
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