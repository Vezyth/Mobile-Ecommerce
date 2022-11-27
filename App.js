import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "./screen/homeScreen";
import secondScreen from "./screen/secondScreen";
import thirdScreen from "./screen/thirdScreen";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import EmailConfirmScreen from "./screen/EmailConfirmScreen";
import ForgotPasswordScreen from "./screen/ForgotPasswordScreen";
import ResetPasswordScreen from "./screen/ResetPasswordScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="reset" component={ResetPasswordScreen} />
        <Stack.Screen name="forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="email" component={EmailConfirmScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="second" component={secondScreen} />
        <Stack.Screen name="third" component={thirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


