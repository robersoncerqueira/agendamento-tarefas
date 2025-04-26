import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function NovaTarefa(){
    return(
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}> Adicionar Tarefa </Text>
            </View>
            <View> 
                <Text> Nome da Tarefa</Text>
                <TextInput style={styles.input}
                  placeholder="Digite aqui..." >
                  </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    cabecalho:{
        backgroundColor:"blue",
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    titulo:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'white'
    }
})
