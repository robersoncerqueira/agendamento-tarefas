import {View, Text, StyleSheet} from 'react-native'

export default function Tarefa(){

    return(
        <View style= {styles.container}>
            <Text style= {styles.titulo}> Tarefa 1</Text>
            <Text style= {styles.data}> 03/04/2025</Text>
            <Text style= {styles.categoria}> estudo</Text>
            <View style={styles.status}>
                <Text style={styles.textoStatus}> a cumprir</Text>

            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container :{
        with: '100%',
        height: 100,
        padding: 15,
        borderBottonWidth: 1,
        borderColor: '#ccc'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    data:{
        margintop: 5,
        marginleft: 3.5
    },
    categoria: {
        margintop: 8
    },
    status:{
        Backgroundcolor: 'orange',
        with: 150,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItens: 'center',
        position: 'absolute'
    },
    textoStatus:{
        color: "white"
    }
});

