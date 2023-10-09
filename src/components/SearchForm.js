import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";


export default function SearchForm({ onSearch }) {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const onSearchPress = async () => {
        onSearch({ from, to })
    }

    return (
        <View style={styles.card}>
            <Text style={styles.title}>
                Search the best prices for your next trip!
            </Text>
            <TextInput
                placeholder="From"
                value={from}
                onChangeText={setFrom}
                style={styles.input}
            />
            <TextInput
                placeholder="To"
                value={to}
                onChangeText={setTo}
                style={styles.input}
            />

            <Button title="Search" onPress={onSearchPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: 'white',
        margin: 10,
        padding: 15,
        borderRadius: 10,

        // Shadows
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 10,
        alignSelf: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginVertical: 5,
        padding: 10,
    },
})