// Instalação do pacote de fonte do Google Fonts
// - comando: npx expo install expo-font @expo-google-fonts/nome-da-fonte

// OBSERVAÇÃO: consulte as fontes no endereço https://fonts.google.com/
// para a instalação da fonte desejada

// EXEMPLO 1: para baixar a fonte Inter
// o comando é: npx expo install expo-font @expo-google-fonts/inter

// EXEMPLO 2: para baixar a fonte Playfair Display(com nome composto)
// o comando é: npx expo install expo-font @expo-google-fonts/playfair-display

// Seguem nos imports abaixo a forma de
// usar as fontes e o estilo de cada uma

// OBSERVAÇÃO: a importação do método 'useFonts'
// é dada somente uma vez

// RECOMENDAÇÃO: poderá ser adotado um 'apelido'
// como substituição do uso do nome da fonte original

import { StyleSheet, View, Text, ScrollView, StatusBar } from "react-native";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { PlayfairDisplay_900Black as playfair } from "@expo-google-fonts/playfair-display";

export default function Teste() {

    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black, playfair
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
        
            <ScrollView style={styles.container}>
                <View style={styles.cx1}>
                    <Text style={{ fontFamily: 'Inter_900Black', color: 'white'}}>Caixa 1</Text>
                </View>
                <View style={styles.cx2}>
                    <Text style={{color: 'white'}}>Caixa 2</Text>
                </View>
                <View style={styles.cx3}>
                    <Text style={{ fontFamily: 'playfair', fontSize: 30, color: 'white'}}>Caixa 3</Text>
                </View>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    cx1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        display: 'flex',
        height: 100
        //flex: 1
    },
    cx2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        //flex: 2
        height: 100
    },
    cx3: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        //flex: 3
        height: 100
    }
})