import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="" screenOptions={{headerShown: 'false'}}>
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='cadastro' component={Cadastro} />
        <Stack.Screen name='inicio' component={Inicio} />
        <Stack.Screen name='reservas' component={Reservas} />
        <Stack.Screen name='viagens' component={Viagens} />
        <Stack.Screen name='sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
