import Page1 from './Page1';
import Page2 from './Page2';

import { createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
  })
);

// const TabNavigator = createAppContainer(
//   createBottomTabNavigator({
//     Home: Page1,
//     About: Page2,
//   })
// );

// const DrawerNavigator = createAppContainer(
//   createDrawerNavigator({
//     Home: Page1,
//     About: Page2,
//   })
// );

export default Routes;