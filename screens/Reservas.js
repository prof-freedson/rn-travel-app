import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";
import CartaoReserva from "../components/CartaoReserva";

export default function Reservas({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontFamily: 'playfair' }}>Minhas reservas</Text>
            <ScrollView style={{ height: '100%' }}>      
                <CartaoReserva
                nomeHotel="The Ritz Hotel"
                localHotel="Londres, UK"
                dataEntrada="01/01/2023"
                dataSaida="04/01/2023"
                preco="899"
                imagem={require('../assets/images/ritz-hotel.jpg')}
                />
                <CartaoReserva
                nomeHotel="Pod Times Square"
                localHotel="Nova Iorque, EUA"
                dataEntrada="01/04/2023"
                dataSaida="04/04/2023"
                preco="699"
                imagem={require('../assets/images/pod-times-square.jpg')}
                />
                <CartaoReserva
                nomeHotel="Jeri Village Hotel"
                localHotel="Jericoacoara, Brasil"
                dataEntrada="01/07/2023"
                dataSaida="04/07/2023"
                imagem={require('../assets/images/jeri-hotel.jpg')}
                />
                
            </ScrollView>
            <Pressable style={styles.botaoReserva} onPress={() => navigation.navigate('criarreserva')}>
                <Text>AGENDAR NOVA RESERVA</Text>
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
    botaoReserva: {
        width: '100%',
        height: 35,
        backgroundColor: '#eacb57',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 5
    },
    cartaoReservaTitulo: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartaoReservaSup: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: 350,
        height: 80,
        backgroundColor: '#f9d04c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartaoReserva: {
        paddingVertical: 10
    }
})