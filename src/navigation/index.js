import {
    faHome,
    faUserCircle,
    faBook
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../pages/home.page';
import HomeDetailPage from '../pages/home-detail.page';
import ProfilePage from '../pages/profile.page';
import SplashPage from '../pages/splash.page';
import ArtikelPage from '../pages/artikel.page';
import ArtikelDetailPage from '../pages/artikel-detail.page';

const HomeStack = createStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={HomeDetailPage}
        options={{
            headerTitle: 'Form',
        }}
      />
    </HomeStack.Navigator>
  );
}

const ArtikelStack = createStackNavigator();
function Artikel() {
  return (
    <ArtikelStack.Navigator>
      <ArtikelStack.Screen
        name="Artikel"
        component={ArtikelPage}
        options={{
          headerShown: false
        }}
      />
    </ArtikelStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function Profile() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerShown: false
          }}
        />
      </ProfileStack.Navigator>
    );
  }


const Tab = createBottomTabNavigator();
function Navigation(){
  return(
    <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            name: 'Home',
            headerTitle: 'Home',
            headerShown: true,
            tabBarIcon:() => {
                return <FontAwesomeIcon icon={faHome} size={20}/>
            }
          }}
        />
        <Tab.Screen
          name="Artikel"
          component={Artikel}
          options={{
            headerTitle: 'Artikel',
            headerShown: true,
            tabBarIcon:() => {
                return <FontAwesomeIcon icon={faBook} size={20}/>
            }
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: 'Profile',
            headerShown: true,
            tabBarIcon:() => {
                return <FontAwesomeIcon icon={faUserCircle} size={20}/>
            }
          }}
        />
      </Tab.Navigator>
  )
}

export default function Index() {
    const InitialStack = createStackNavigator();
  return (
    <NavigationContainer>
      <InitialStack.Navigator>
        <InitialStack.Screen
          name="Splash"
          component={SplashPage}
          options={{
            headerShown: false,
          }}
        />
        <InitialStack.Screen
          name="Initial"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />
        <InitialStack.Screen
          name="DetailArtikel"
          component={ArtikelDetailPage}
          options={{
            headerShown: true,
            headerTitle:'Artikel'
          }}
        />
    </InitialStack.Navigator>
    </NavigationContainer>
  );
}
