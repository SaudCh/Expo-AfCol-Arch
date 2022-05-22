import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

export default function ContactInfo() {
    const [email, setEmail] = useState("")
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