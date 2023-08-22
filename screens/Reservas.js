import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";

export default function Reservas(){
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold', fontFamily: 'playfair' }}>Minhas reservas</Text>
            <View>
                <Text>Nenhuma reserva marcada</Text>
            </View>
            <Pressable style={styles.botaoReserva}>
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
        borderRadius: 5
    }
})