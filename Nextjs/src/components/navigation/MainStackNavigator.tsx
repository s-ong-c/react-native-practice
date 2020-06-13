import React, { ReactElement } from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { Text, TouchableOpacity } from 'react-native';
import { getString } from '../../../STRINGS';
import { ThemeType, useThemeContext } from '../../providers/ThemeProvider';
import Home from '../screen/Home';
import Header from '../shared/Header';
export type StackParamList = {
  default: undefined;
  HomeTab: undefined;
};

export type StackNavigationProps<
  T extends keyof StackParamList = 'default'
> = StackNavigationProp<StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();

function MainNavigator(): React.ReactElement {
  const { theme, changeThemeType } = useThemeContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
          borderBottomWidth: 0,
        },
        headerTitleStyle: { color: theme },
        headerTintColor: theme.tintColor,
        headerBackTitle: getString('BACK'),
      }}
    >
      <Stack.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerTitle: (): ReactElement => (
            <TouchableOpacity onPress={changeThemeType}>
              <Header>
                <Text
                  style={{
                    color: theme.fontColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                >
                  SONGC
                </Text>
              </Header>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
