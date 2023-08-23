import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Splash from "./screens/Splash";
import Cadastro from "./screens/Cadastro";
import Inicio from "./screens/Inicio";
import Reservas from "./screens/Reservas";
import Viagens from "./screens/Viagens";
import Sobre from "./screens/Sobre";
import CriarViagem from "./screens/CriarViagem";
import CriarReserva from "./screens/CriarReserva";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='cadastro' component={Cadastro} />
        <Stack.Screen name='inicio' component={Inicio} />
        <Stack.Screen name='reservas' component={Reservas} />
        <Stack.Screen name='viagens' component={Viagens} />
        <Stack.Screen name='sobre' component={Sobre} />
        <Stack.Screen name='criarviagem' component={CriarViagem} />
        <Stack.Screen name='criarreserva' component={CriarReserva} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
