import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './BottomTabNavigator';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
