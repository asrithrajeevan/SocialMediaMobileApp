import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import DimentionsContextProvider from "../../context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../Home';
import Signup from '../Signup';
import Login from '../Login';
import Discover from '../Discover';
import CustomFooter from '../../components/CustomFooter';
import Notification from '../Notification';
import Search from '../Search';
import Account from '../Account';
import LandingPage from '../LandingPage';
import CreateAccount from '../CreateAccount';
import TermsService from '../CreateAccount/Terms';
import Privacy from '../CreateAccount/Privacy';

const Stack = createNativeStackNavigator();
const Footer = createMaterialTopTabNavigator();

const FooterTabs = () =>{
  return(
    <Footer.Navigator  tabBar={props=><CustomFooter {...props}/>}>
      <Footer.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Footer.Screen name='Search' component={Search} />
      <Footer.Screen name='Discover' component={Discover} />
      <Footer.Screen name='Notification' component={Notification} />
      <Footer.Screen name='Account' component={Account} options={{headerShown:false}}/>
    </Footer.Navigator>
  )
}

const App = () => {
  return (
    <DimentionsContextProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
                <Stack.Screen name="FooterTabs" component={FooterTabs} options={{headerShown:false}}/>
                <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown:false}}/>
                <Stack.Screen name="TermsService" component={TermsService} options={{headerShown:false}}/>
                <Stack.Screen name="Privacy" component={Privacy} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    </DimentionsContextProvider>
  );
}

export default App