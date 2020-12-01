import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import {MainImage} from '../../assets'; 

let data =[
    {
        key:1,
        image:MainImage,
        title:"Kasus Pelanggaran Ham",
        isi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac arcu quis quam vehicula aliquam. Nulla in molestie augue. Integer laoreet non purus et porta. Mauris viverra nulla vitae justo imperdiet gravida. Sed neque ipsum, ornare suscipit magna et, accumsan pulvinar felis. Vestibulum malesuada pulvinar sapien, cursus luctus nulla. Nullam id velit nec odio eleifend maximus. Pellentesque tristique lectus at eros ornare, at tempus est condimentum. Morbi semper orci id nulla imperdiet varius. Pellentesque faucibus enim ipsum, ac pulvinar nulla viverra at. Praesent non nunc sed nunc dignissim placerat. Suspendisse eget vulputate ipsum, vel consequat diam."
    },
    {
        key:2,
        image:MainImage,
        title:"Asiknya jalan-jalan di kota batu",
        isi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac arcu quis quam vehicula aliquam. Nulla in molestie augue. Integer laoreet non purus et porta. Mauris viverra nulla vitae justo imperdiet gravida. Sed neque ipsum, ornare suscipit magna et, accumsan pulvinar felis. Vestibulum malesuada pulvinar sapien, cursus luctus nulla. Nullam id velit nec odio eleifend maximus. Pellentesque tristique lectus at eros ornare, at tempus est condimentum. Morbi semper orci id nulla imperdiet varius. Pellentesque faucibus enim ipsum, ac pulvinar nulla viverra at. Praesent non nunc sed nunc dignissim placerat. Suspendisse eget vulputate ipsum, vel consequat diam."
    },
    {
        key:3,
        image:MainImage,
        title:"Statistik Covid 19 naek Bos",
        isi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac arcu quis quam vehicula aliquam. Nulla in molestie augue. Integer laoreet non purus et porta. Mauris viverra nulla vitae justo imperdiet gravida. Sed neque ipsum, ornare suscipit magna et, accumsan pulvinar felis. Vestibulum malesuada pulvinar sapien, cursus luctus nulla. Nullam id velit nec odio eleifend maximus. Pellentesque tristique lectus at eros ornare, at tempus est condimentum. Morbi semper orci id nulla imperdiet varius. Pellentesque faucibus enim ipsum, ac pulvinar nulla viverra at. Praesent non nunc sed nunc dignissim placerat. Suspendisse eget vulputate ipsum, vel consequat diam."
    },
    {
        key:4,
        image:MainImage,
        title:"Randi Bacot",
        isi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac arcu quis quam vehicula aliquam. Nulla in molestie augue. Integer laoreet non purus et porta. Mauris viverra nulla vitae justo imperdiet gravida. Sed neque ipsum, ornare suscipit magna et, accumsan pulvinar felis. Vestibulum malesuada pulvinar sapien, cursus luctus nulla. Nullam id velit nec odio eleifend maximus. Pellentesque tristique lectus at eros ornare, at tempus est condimentum. Morbi semper orci id nulla imperdiet varius. Pellentesque faucibus enim ipsum, ac pulvinar nulla viverra at. Praesent non nunc sed nunc dignissim placerat. Suspendisse eget vulputate ipsum, vel consequat diam."
    },
]

export default function Home({navigation}) {
    const onPressedProfile = () => {
        navigation.navigate('Profile');
    };
    const onPressedArtikelDetail = (data) => {
        navigation.navigate('DetailArtikel', data);
    };
    const onPressedArtikel = () => {
        navigation.navigate('Artikel');
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#43cad1' barStyle="dark-content" translucent/>

            {/* Header */}
            <View style={{flexDirection:'row', padding:10, justifyContent:'space-between', backgroundColor:'#43cad1', paddingBottom:50, paddingTop:40}}>
                <Text style={{marginLeft:20, marginTop:20, color:'white', fontSize:20, fontWeight: 'bold'}}>Home</Text>
                <Image source={MainImage} style={{width:200, height:130, marginRight:20}}/>
            </View>

            {/* Profile */}
            <TouchableOpacity onPress={onPressedProfile}>
                <View style={{marginTop:-40}}>
                    <View style={{backgroundColor: 'white', marginHorizontal:50, flexDirection:'row', justifyContent:'space-between', padding:10, borderRadius:10, alignItems:'center', paddingVertical:20}}>
                        <Text style={{fontSize:20, flex:1, fontWeight:'bold', color:'#5e5e5e', paddingLeft:10 }}>Randi Nur Ardianto</Text>
                        <Text style={{flex:0, fontSize:15, textAlign:'right', color:'#138e94', paddingHorizontal:10, fontWeight:'bold'}}>21120118130060</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{padding:20}}>
            <View style={styles.sessionWrapper}>
                    <Text style={styles.sessionTitle}>Artikel Favorit</Text>
                    <TouchableOpacity onPress={onPressedArtikel}>
                        <Text style={{color:"#138e94"}}>See All</Text>
                    </TouchableOpacity>
            </View>


            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {data.map((data) => (
                    <View key={data.key}style={styles.listWrapper}>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.listImage} source={data.image}/> 
                            </View>
                            <View style={styles.listMidWrapper}>
                                <Text style={styles.midTextName}>{data.title}</Text>
                                <Text style={styles.midTextCaption}>{data.isi}</Text>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => onPressedArtikelDetail(data)}>
                                <Text style={styles.buttonText}>Detail</Text>
                            </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            
            </View>

        </View>
    )
}

const width = Dimensions.get('window').width/4.5;
const height = Dimensions.get('window').height/11;
const styles = StyleSheet.create({
    buttonText:{
        color:'#138e94'
    },
    container:{
        flex:1
    },
    button:{
        flex:0, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft:15
    },
    midTextCaption:{
        color:'grey', 
        textAlign:'left',
        height:46
    },
    midTextName:{
        fontSize:16, 
        fontWeight: 'bold'
    },
    listMidWrapper:{
        marginTop:7,
        flex:2, 
        marginLeft:3
    },
    listImage:{
        width, 
        height, 
        borderRadius:10
    },
    imageWrapper:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'baseline'
    },
    scrollView:{
        marginBottom:299
    },
    sessionTitle:{
        fontSize:18, 
        fontWeight: 'bold'
    },
    sessionWrapper:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        alignItems:'center'
    },
    image:{
        width: width + 50, 
        height: width + 30,
    },
    headerTextWrapper:{
        padding:10, 
        marginTop:7
    },
    headerWrapper:{
        borderRadius: 20, 
        backgroundColor: '#34ebd8', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding:20
    },
    wrapper:{
        padding: 20
    },
    headerText:{
        color: '#fcfcfc', 
        fontSize:22, 
        fontWeight: 'bold'
    },
    listWrapper:{
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding:10,
        borderRadius:20,
    }
})
