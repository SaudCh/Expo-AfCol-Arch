import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';

export default function ContactInfo() {

    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [errors, setErrors] = useState("")


    return (
        <View style={{ ...styles.card }}>
            <View>
                <Text>Contact Info</Text>
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
                <Text>Shipping Address</Text>
                <View>
                    <Picker
                        style={{ borderWidth: 1 }}
                        selectedValue={country}
                        onValueChange={(itemValue, itemIndex) =>
                            setCountry(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
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