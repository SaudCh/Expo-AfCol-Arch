import { Button } from 'react-native-paper'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home/Home';
import { CustomDrawer } from './CustomDrawer';
import { COLORS } from '../Const/color';
import { Entypo } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import ProductDetail from '../ProductDetail/ProductDetail';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const navigation = useNavigation()
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>

            <Drawer.Screen name="Home" component={Home} options={{
                title: 'All Products',
                headerTintColor: COLORS.dPink,
                headerRight: () => (
                    <Button
                        onPress={() => navigation.navigate("Cart")}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
                    </Button>
                )
            }}

            />
            <Drawer.Screen name="prodDetails" component={ProductDetail} options={
                // ({ route }) => ({
                //     title: route.params.name,
                //     headerTintColor: COLORS.dPink,
                //     headerRight: () => (
                //         <Button
                //             onPress={() => navigation.navigate("Cart")}
                //             style={{ backgroundColor: 'transparent' }}
                //         >
                //             <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
                //         </Button>
                //     )
                // })
                ({ route }) => {
                    console.log(route.params.name)
                }
            }
            />
            {/* <Drawer.Screen name="Contact" component={Contact} options={{
                title: 'Contact Us',
                headerTintColor: COLORS.dPink,
            }}
            /> */}



        </Drawer.Navigator>
    )
}

export default DrawerNavigator