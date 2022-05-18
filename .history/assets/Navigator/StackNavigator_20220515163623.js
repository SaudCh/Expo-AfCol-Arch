import React from 'react'
import DrawerNavigator from './DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login/Login';
import { COLORS } from '../Const/color';
import Signup from '../Signup/Signup';
import ForgetPassword from '../Login/ForgetPassword';
import ProductDetail from '../ProductDetail/ProductDetail';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer">
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ title: 'AF Collection', headerTintColor: COLORS.dPink }} />
                <Stack.Screen name="Signup" component={Signup} options={{ title: 'AF Collection', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ title: 'AF Collection', headerTintColor: COLORS.dPink, }} />
                <Stack.Screen name="prodDetails" component={ProductDetail} options={({ route }) => ({
                    title: route.params ? route.params.name : "Details", headerTintColor: COLORS.dPink,
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate("Cart")}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
                        </Button>
                    )
                })}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation