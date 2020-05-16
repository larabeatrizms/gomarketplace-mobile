import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Image, View } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { ThemeContext } from 'styled-components';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

import Logo from '../assets/logo.png';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: `${colors.background}` },
      }}
      initialRouteName="Dashboard"
    >
      <App.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          // headerTitle: () => <Image source={Logo} />,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        options={{
          headerTransparent: true,
          headerTitle: () => <Image source={Logo} />,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },

          headerBackImage: () => <FeatherIcon name="chevron-left" size={24} />,
        }}
        name="Cart"
        component={Cart}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
