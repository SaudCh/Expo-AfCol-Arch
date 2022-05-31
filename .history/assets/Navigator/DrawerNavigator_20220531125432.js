import { View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home/Home';
import { CustomDrawer } from './CustomDrawer';
import { COLORS } from '../Const/color';
import CartButton from '../Components/Buttons/CartButton';
import { useCart } from '../Components/Hooks/cartHook';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const {length} = useCart();

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>

            <Drawer.Screen name="Home" component={Home} options={{
                title: 'All Products',
                headerTintColor: COLORS.dPink,
                headerTitleAlign: 'center',
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>
                        <CartButton length={length} />
                    </View>
                )
            }}
            />
            {/* <Drawer.Screen name="prodDetails" component={ProductDetail} options={({ route }) => ({
                title: route.params ? route.params.name : "Details", headerTintColor: COLORS.dPink,
                headerLeft: () => (
                    <Button
                        onPress={() => navigation.navigate("Cart")}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
                    </Button>
                ),
                headerRight: () => (
                    <Button
                        onPress={() => navigation.navigate("Cart")}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
                    </Button>
                )
            })}

            /> */}
            {/* <Drawer.Screen name="Contact" component={Contact} options={{
                title: 'Contact Us',
                headerTintColor: COLORS.dPink,
            }}
            /> */}



        </Drawer.Navigator>
    )
}

export default DrawerNavigator