import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
    return (
        <View styles={styles.counterContainer}>
            <Text> You Clicked the button 0 times</Text>
            <Button title='Click Me' />
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        width: '80vw',
        margin: '14',
        padding: '14',
        backgroundColor: 'beige',
    },
    counterText: {
        fontSize: 30,
        textAlign: 'center',
    }
})