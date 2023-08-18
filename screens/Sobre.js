import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Feather } from '@expo/vector-icons'
import { openBrowserAsync } from 'expo-web-browser'

export default function Sobre() {

    const creditos = "© 2023 - Todos os direitos reservados" +
        "\nDesenvolido por Tecaluga"
    
    const sobre = "Aplicativo de base para a atividade da UC" + 
    "\nMembros da equipe:" +
    "\nFulano" + 
    "\nCiclano" +
    "\nBeltrano" 


    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40, color: '#1a4252', fontWeight: 'bold'}}>Travel App</Text>
            <Image style={{marginVertical: 20, width: 30, height: 30, paddingVertical: 60, paddingHorizontal: 50}} source={require('../assets/images/travel-app-logo.png')}/>
            <Text style={{color:'#46a2c7', textAlign: 'center'}}>{creditos}</Text>
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