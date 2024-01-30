import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootBottomTabParamsList} from './types';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen.tsx';
import colors from '../utils/Theme/Colors.tsx';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const tab = createBottomTabNavigator<RootBottomTabParamsList>();

export const BottomTabNavigator = () => {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          left: 12,
          bottom: 8,
          right: 12,
          borderRadius: 8,
          backgroundColor: colors.lightgrey,
          justifyContent: 'center',
          padding: -14,
          height: 50,
          elevation: 1,
        },
        tabBarActiveTintColor: colors.spaceblack,
        tabBarInactiveTintColor: colors.darkgrey,
        tabBarShowLabel: false,
      }}>
      <tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" color={color} size={24} />
          ),
        })}
      />
      <tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={() => ({
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" color={color} size={24} />
          ),
        })}
      />
    </tab.Navigator>
  );
};
