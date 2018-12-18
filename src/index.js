import Page1 from './Page1';
import Page2 from './Page2';

import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Page1,
  About: Page2,
});

const TabNavigator = createBottomTabNavigator({
  Home: Page1,
  About: Page2,
});

const DrawerNavigator = createDrawerNavigator({
  Home: Page1,
  About: Page2,
});

export default { StackNavigator, TabNavigator, DrawerNavigator };