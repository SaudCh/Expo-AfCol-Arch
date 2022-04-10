import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home/Home';
import { CustomDrawer } from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name="Home" component={Home} drawerContent={(props) => <CustomDrawer {...props} />} />
            {/* <Drawer.Screen name="Contact" component={Contact} options={{
                title: 'Contact Us',
                headerTintColor: COLORS.dPink,
            }}
            /> */}



        </Drawer.Navigator>
    )
}

export default DrawerNavigator