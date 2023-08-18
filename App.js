import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Splash from "./screens/Splash";
import Cadastro from "./screens/Cadastro";
import Inicio from "./screens/Inicio";
import Reservas from "./screens/Reservas";
import Viagens from "./screens/Viagens";
import Sobre from "./screens/Sobre";
import Teste from "./screens/Teste";
import InicioTeste from "./screens/InicioTeste";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicioteste" screenOptions={{headerShown: false}}>
        <Stack.Screen name='teste' component={Teste} />
        <Stack.Screen name='inicioteste' component={InicioTeste} />
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
