import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { ScreensArray } from '../components/array';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNav1 = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
      //  headerShown:false,
        drawerStyle: styles.drawerStyles,
        drawerType: 'front',
        swipeEdgeWidth: Platform.OS === 'android' && 180,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {ScreensArray.map((_, i) => (
        <Drawer.Screen key={i} name={_.route} component={_.component}
          options={{
            item: _,
          }}
        />
      ))}
    </Drawer.Navigator>
  )
}

export default DrawerNav1

const styles = StyleSheet.create({
  drawerStyles: {
    width: 260,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
})