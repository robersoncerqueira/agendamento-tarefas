import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import TarefaItem from '../screens/Tarefaitem';
import { useNavigation } from '@react-navigation/native';
import { getData } from '../storage/async.storage';

export default function Home(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>ABRIL/2025</Text>
                <View style={styles.icone}></View>
            </View>

            <ScrollView style={styles.body}>
                
                <TarefaItem
                    nome= "Tarefa 1"
                    status= "concluido"
                    data= "24/04/2025"
                    categoria="Estudo"
                />
                 <TarefaItem
                    nome= "Tarefa 2"
                    status= "a cumprir"
                    data= "25/05/2025"
                    categoria="Anivesário"
                />
                 <TarefaItem
                    nome= "Tarefa 3"
                    status= "a cumprir"
                    data= "28/06/2025"
                    categoria="Compras"
                />
                <TarefaItem
                    nome= "Tarefa 1"
                    status= "concluido"
                    data= "24/04/2025"
                    categoria="Estudo"
                />
                 <TarefaItem
                    nome= "Tarefa 2"
                    status= "a cumprir"
                    data= "25/05/2025"
                    categoria="Anivesário"
                />
                 <TarefaItem
                    nome= "Tarefa 3"
                    status= "a cumprir"
                    data= "28/06/2025"
                    categoria="Compras"
                />
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                 navigation.navigate('NovaTarefa')
                }}
                style={styles.botaoAdcionar}>
                <Text style={styles.botaoMais}>+</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    icone: {
        backgroundColor: 'indigo',
        width: 40,
        height: 40,
        borderRadius: 20,
        right: 15,
        position: 'absolute'
    },
    body: {
        flex: 1
    },
    botaoAdcionar: {
        backgroundColor: 'blue',
        width: 60,
        height: 60,
        borderRadius: 30,
        right: 20,
        position: 'absolute',
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoMais: {
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: -15
    }
});