import { StyleSheet, View, Text, Image } from 'react-native'

export default function CartaoReserva({ nomeHotel, localHotel, dataEntrada, dataSaida, preco, imagem}){
    return(
        <View style={styles.cartaoReserva}>
                    <View style={styles.cartaoReservaSup}>
                        <View style={styles.cartaoReservaTitulo}>
                            <View style={{ justifyContent: 'space-around', height: 70 }}>
                                <Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>{nomeHotel}</Text>{'\n'}{localHotel}</Text>
                                <Text>{dataEntrada} a {dataSaida}</Text>
                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>${preco}</Text>
                        </View>
                    </View>
                    <View style={styles.cartaoReservaInf}>
                        <Image style={{ width: 350, height: 150, objectFit: 'cover' }} source={imagem} />
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
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

