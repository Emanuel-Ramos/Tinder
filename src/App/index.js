import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screen/Home'
import UserScreen from '../screen/User'
import GoldScreen from '../screen/Gold'
import ChatScreen from '../screen/Chat'

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: { uri: 'https://img.icons8.com/fluent/240/000000/--tinder.png' }
  },
  Gold: {
    name: { uri: 'https://img.icons8.com/ios-filled/96/000000/diamonds.png' }
  },
  Chat: {
    name: { uri: 'https://img.icons8.com/ios-glyphs/110/000000/chat.png' }
  },
  User: {
    name: { uri: 'https://img.icons8.com/ios-glyphs/110/000000/user.png' }
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }} labeled={false} screenOptions={({ route }) => ({

        tabBarIcon: () => {
          const { name } = icons[route.name]
          return <Image style={styles.iconImg} source={name} />
        }

      })
      }>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gold" component={GoldScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="User" component={UserScreen}>

        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  iconImg: {
    width: 35,
    height: 35

  }
})


export default App;
