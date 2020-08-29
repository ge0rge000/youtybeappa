import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import Constants from 'expo-constants';
import Videoplayer from './src/screens/Videoplayer'
import Explore from './src/screens/Explore'
import Subscribe from './src/screens/Subscribe'
import {reducer} from './src/reducers/reducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reducer)

const Stack=createStackNavigator()
const Tabs=createBottomTabNavigator()
const RootHome=()=>{
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
           
        } else if (route.name === 'Explore') {
          iconName = 'explore';
        }
        else if (route.name === 'Subscribe') {
          iconName = 'subscriptions';
        }        

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }}
    
    >
      <Tabs.Screen name="home" component={Home}/>
      <Tabs.Screen name="Explore" component={Explore}/>
      <Tabs.Screen name="Subscribe" component={Subscribe}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>

        <NavigationContainer>
            <Stack.Navigator headerMode="none">
            <Stack.Screen name="RootHome" component={RootHome} />
              <Stack.Screen name="search" component={Search} />
              <Stack.Screen name="Videoplayer" component={Videoplayer} />
            </Stack.Navigator>

          </NavigationContainer>
    </Provider>

  );
}

