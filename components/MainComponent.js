import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './homeComponent';
import Contact from './ContactusComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import {
  View,
  Platform,
  Image,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

const MenuNavigator = createAppContainer(
  createStackNavigator(
    {
      Menu: { screen: Menu },
      defaultNavigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="menu"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
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
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#D1C4E9',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
        headerLeft: (
          <Icon
            name="menu"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    }
  )
);

const ContactNavigator = createAppContainer(
  createStackNavigator(
    {
      Contact: { screen: Contact },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#D1C4E9',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
        headerLeft: (
          <Icon
            name="menu"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    }
  )
);
const AboutNavigator = createAppContainer(
  createStackNavigator(
    {
      About: { screen: About },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#D1C4E9',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
        headerLeft: (
          <Icon
            name="menu"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    }
  )
);
const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('./images/logo.png')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion </Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createAppContainer(
  createDrawerNavigator(
    {
      Home: {
        screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon name="home" type="font-awesome" size={24} color={tintColor} />
          ),
        },
      },
      About: {
        screen: AboutNavigator,
        navigationOptions: {
          title: 'About Us',
          drawerLabel: ' About Us',

          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name="info-circle"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        },
      },
      Menu: {
        screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu',

          drawerIcon: ({ tintColor, focused }) => (
            <Icon name="list" type="font-awesome" size={24} color={tintColor} />
          ),
        },
      },
      Contact: {
        screen: ContactNavigator,
        navigationOptions: {
          title: 'Conatct Us',
          drawerLabel: 'Contact Us',

          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name="address-card"
              type="font-awesome"
              size={22}
              color={tintColor}
            />
          ),
        },
      },
    },
    {
      drawerBackgroundColor: '#D1C4E9',
      contentComponent: CustomDrawerContentComponent,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});
export default Main;
