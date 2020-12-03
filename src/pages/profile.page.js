import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar, Image} from 'react-native';
import {MainImage} from '../../assets';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#43cad1' barStyle="dark-content" translucent/>

        {/* Header */}
        <View style={{backgroundColor:"#43cad1",  paddingTop: 40, justifyContent:'center', alignItems:'center', paddingBottom:20, borderBottomWidth:2, borderBottomColor:'#ababab'}}>
          <Image source={MainImage} style={{height:200, width:300,}}/>
        </View>

        {/* Foto */}
        <View style={{alignItems:'center', justifyContent:'center', marginTop: -40}}>
          <Image source={MainImage} style={{height:120, width:120, borderRadius:100, backgroundColor:'white'}}/>
        </View>

        <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Randi Nur Ardianto</Text>
          <Text style={{marginBottom:20}}>21120118130069</Text>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#43cad1'}}>randinur30@Gmail.com</Text>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Universitas Diponegoro</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
});
