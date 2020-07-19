import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { ThemeType, useThemeContext } from '../../providers/ThemeProvider';

import MainNavigator from './MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export type RootStackParamList = {
  default: undefined;
  Intro: undefined;
  Home: undefined;
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default'
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): React.ReactElement {
  const { theme, themeType } = useThemeContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        }}
        headerMode={themeType === ThemeType.DARK ? 'screen' : 'float'}
      >
        {/* ROUTER CHANGE  */}
        <Stack.Screen name="Home" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
