import React from 'react'
import DrawerNavigator from './DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer">
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ title: 'Jazaria Store', headerTintColor: "red" }} />
                {/* <Stack.Screen name="Signup" component={Signup} options={{ title: 'Jazaria Store', headerTintColor: COLORS.dPink, }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation