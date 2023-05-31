import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNav1 from './src/Tab/screens/TabNav1'
import { NavigationContainer } from '@react-navigation/native';
//import TabNav3 from './src/Tab/screens/TabNav2';
import TabNav2 from './src/Tab/screens/TabNav2';
import TabNav from './src/Tab/screens/TabNav';
import CustomDrawer1 from './src/drawer/screens/CustomDrawer';
import DrawerNav1 from './src/drawer/screens/DrawerNav';
import Ionicon from 'react-native-vector-icons/Ionicons'
const App = () => {
  return (
  
   
  <NavigationContainer>
   <TabNav1/>
  </NavigationContainer>
  
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})