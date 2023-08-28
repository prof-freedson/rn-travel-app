import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";
import { MaterialIcons} from '@expo/vector-icons/'
import CartaoViagem from "../components/CartaoViagem";

export default function Viagens({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontFamily: 'playfair' }}>Minhas viagens</Text>
            <ScrollView style={{ height: '100%' }}>
                <CartaoViagem
                diaSemana="Sábado"
                dataViagem="31/12/2022"
                horaViagem="22h00min"
                codViagem="J-1362073FCR"
                nomeAero="Aeroporto de Congonhas"
                codAero="CGH"
                localAero="São Paulo, SP"
                />
                <CartaoViagem
                diaSemana="Domingo"
                dataViagem="31/03/2023"
                horaViagem="17h30min"
                codViagem="J-73FCR13620"
                nomeAero="Aeroporto Santos Dumont"
                codAero="SDU"
                localAero="Rio de Janeiro, RJ"
                />
                <CartaoViagem
                diaSemana="Quarta"
                dataViagem="01/07/2023"
                horaViagem="03h30min"
                codViagem="J-7313620FCR"
                nomeAero="Aeroporto Salgado Filho"
                codAero="POA"
                localAero="Rio Grande do Sul, RS"
                />
                
            </ScrollView>
            <Pressable style={styles.botaoViagem} onPress={() => navigation.navigate('criarviagem')}>
                <Text>AGENDAR NOVA VIAGEM</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#bce1f1',
        padding: 20
    },
    botaoViagem: {
        width: '100%',
        height: 35,
        backgroundColor: '#eacb57',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10
    },
    cartaoViagem:{
        marginVertical: 10
    },
    cartaoViagemSup: {
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
        width: 350,
        alignItems: 'center',
    },
    cartaoViagemDataHora: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        width: 350,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartaoViagemInf: {
        flexDirection: 'row',
        backgroundColor: '#0c2c3a',
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'flex-start',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})