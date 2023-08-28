import { StyleSheet, View, Text } from "react-native"
import { MaterialIcons} from '@expo/vector-icons/'

export default function CartaoViagem({ diaSemana, dataViagem, horaViagem, codViagem, nomeAero, codAero, localAero }){
    return(
        <View style={styles.cartaoViagem}>
                    <View style={styles.cartaoViagemSup}>
                        <View style={styles.cartaoViagemDataHora}>
                            <View style={styles.cartaoViagemData}>
                                <Text>{diaSemana}</Text>
                                <Text>{dataViagem}</Text>
                            </View>
                            <Text style={{fontSize: 18}}>{horaViagem}</Text>
                        </View>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#0c2c3a'}}>{codViagem}</Text>
                    </View>
                    <View style={styles.cartaoViagemInf}>
                        <MaterialIcons style={{marginRight: 10}} name="push-pin" color={'#f9d04c'} size={25}/>
                        <Text style={{color: 'white'}}>
                            {nomeAero} ({codAero}){'\n'}{localAero}
                        </Text>
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
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