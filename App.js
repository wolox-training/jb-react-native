/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import './src/config/ReactotronConfig';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';

export default TabNavigator({
    Home: { screen: Home },
    Settings: { screen: Details },
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return (
          <Ionicons name={iconName} size={25} color={tintColor} />
        ) 
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
);
