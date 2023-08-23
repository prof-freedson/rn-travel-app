import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Feather } from '@expo/vector-icons'
import { openBrowserAsync } from 'expo-web-browser'
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";

export default function Sobre() {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    const creditos = "© 2023 - Todos os direitos reservados" +
        "\nDesenvolido por Tecaluga"
    
    const sobre = "Aplicativo de base para a atividade da UC" + 
    "\nMembros da equipe:" +
    "\nFulano" + 
    "\nCiclano" +
    "\nBeltrano" 


    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40, color: '#1a4252', fontFamily: 'playfair'}}>Travel App</Text>
            <Image style={{width: 100, height: 100, objectFit: 'contain', marginVertical: 20}} source={require('../assets/images/travel-app-logo.png')}/>
            <Text style={{color:'#46a2c7', textAlign: 'center'}}>© 2023 - Todos os direitos reservados.{`\n`}Desenvolvido por Tecaluga</Text>
            <Text style={{color:'#46a2c7', textAlign: 'center', marginVertical: 20}}>{sobre}</Text>
            <Pressable onPress={() => openBrowserAsync('https://github.com/prof-freedson/rn-travel-app')}>
                <Feather name="github" size={30} color={'#46a2c7'}/>
            </Pressable>
            <Text style={{color:'#46a2c7'}}>Visite nosso projeto. Toque no gatinho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bce1f1'
    }
})