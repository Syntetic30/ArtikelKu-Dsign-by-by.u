import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeDetail() {
    return (
        <View style={styles.container}>
            <Text>Home Detail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
