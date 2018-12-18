import { AppRegistry } from "react-native";
import Navigator from "./src";

import { name as appName } from "./app.json";
import { createAppContainer } from "react-navigation";

const App = createAppContainer(Navigator.StackNavigator); // Descomente para usar o StackNavigator.
// const App = createAppContainer(Navigator.TabNavigator); // Descomente para usar o TabNavigator.
// const App = createAppContainer(Navigator.DrawerNavigator); // Descomente para usar o DrawerNavigator.

AppRegistry.registerComponent(appName, () => App);
