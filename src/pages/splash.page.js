import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {SplashImage} from '../../assets';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Initial');
        }, 2000);
    }, [navigation]);
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#43cad1' barStyle="dark-content" translucent/>
            <Image source={SplashImage}/>
            <View>
                <Text style={styles.text}>ARTIKEL ' KU</Text>
            </View>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#43cad1'
    },
    text:{
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        color:'white'
    }
})
