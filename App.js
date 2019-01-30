import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import SideMenu from './src/screens/drawer/SideMenu';
import MainScreen from './src/screens/main/MainScreen';
import BottomTabScreen from './src/screens/tab/BottomTabScreen';
import MaterialBottomTabScreen from './src/screens/tab/MaterialBottomTabScreen';
import MaterialTopTabScreen from './src/screens/tab/MaterialTopTabScreen';
import SwitchNavigatorScreen from './src/screens/switch/SwitchNavigatorScreen';
import NavigationScreen from './src/screens/navigation/NavigationScreen';


const Drawer = createDrawerNavigator({
    Home: {
      screen: MainScreen,
    },
    BottomTab: {
      screen: BottomTabScreen
    },
    MaterialBottomTab: {
      screen: MaterialBottomTabScreen
    },
    MaterialTopTab: {
      screen: MaterialTopTabScreen
    },
    Switch: {
      screen: SwitchNavigatorScreen
    },
    Navigation: {
      screen: NavigationScreen
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width * 0.8
  }
);

const App = createAppContainer(Drawer);

export default App;
