import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './homeComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const MenuNavigator = createAppContainer(
  createStackNavigator(
    {
      Menu: { screen: Menu },
      Dishdetail: { screen: Dishdetail },
    },
    {
      initialRouteName: 'Menu',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#D1C4E9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
      },
    }
  )
);
const HomeNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#D1C4E9',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
      }),
    }
  )
);
const MainNavigator = createAppContainer(
  createDrawerNavigator(
    {
      Home: {
        screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
        },
      },
      Menu: {
        screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu',
        },
      },
    },
    {
      drawerBackgroundColor: '#D1C4E9',
    }
  )
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}
export default Main;
