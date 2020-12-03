import React from 'react'
import { StatusBar, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import {
    faBook
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {MainImage} from '../../assets';

let data1 =[
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
]

let data2 =[
    {
        key:1,
        image:MainImage,
        title:"Manfaat Travelling",
        isi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac arcu quis quam vehicula aliquam. Nulla in molestie augue. Integer laoreet non purus et porta. Mauris viverra nulla vitae justo imperdiet gravida. Sed neque ipsum, ornare suscipit magna et, accumsan pulvinar felis. Vestibulum malesuada pulvinar sapien, cursus luctus nulla. Nullam id velit nec odio eleifend maximus. Pellentesque tristique lectus at eros ornare, at tempus est condimentum. Morbi semper orci id nulla imperdiet varius. Pellentesque faucibus enim ipsum, ac pulvinar nulla viverra at. Praesent non nunc sed nunc dignissim placerat. Suspendisse eget vulputate ipsum, vel consequat diam."
    },
    {
        key:2,
        image:MainImage,
        title:"Dampak Tanpa Persiapan",
        isi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac arcu quis quam vehicula aliquam. Nulla in molestie augue. Integer laoreet non purus et porta. Mauris viverra nulla vitae justo imperdiet gravida. Sed neque ipsum, ornare suscipit magna et, accumsan pulvinar felis. Vestibulum malesuada pulvinar sapien, cursus luctus nulla. Nullam id velit nec odio eleifend maximus. Pellentesque tristique lectus at eros ornare, at tempus est condimentum. Morbi semper orci id nulla imperdiet varius. Pellentesque faucibus enim ipsum, ac pulvinar nulla viverra at. Praesent non nunc sed nunc dignissim placerat. Suspendisse eget vulputate ipsum, vel consequat diam."
    },
    {
        key:3,
        image:MainImage,
        title:"Kategori Riding",
        isi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac arcu quis quam vehicula aliquam. Nulla in molestie augue. Integer laoreet non purus et porta. Mauris viverra nulla vitae justo imperdiet gravida. Sed neque ipsum, ornare suscipit magna et, accumsan pulvinar felis. Vestibulum malesuada pulvinar sapien, cursus luctus nulla. Nullam id velit nec odio eleifend maximus. Pellentesque tristique lectus at eros ornare, at tempus est condimentum. Morbi semper orci id nulla imperdiet varius. Pellentesque faucibus enim ipsum, ac pulvinar nulla viverra at. Praesent non nunc sed nunc dignissim placerat. Suspendisse eget vulputate ipsum, vel consequat diam."
    },
    {
        key:4,
        image:MainImage,
        title:"Bacot Bet Randy anjir",
        isi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac arcu quis quam vehicula aliquam. Nulla in molestie augue. Integer laoreet non purus et porta. Mauris viverra nulla vitae justo imperdiet gravida. Sed neque ipsum, ornare suscipit magna et, accumsan pulvinar felis. Vestibulum malesuada pulvinar sapien, cursus luctus nulla. Nullam id velit nec odio eleifend maximus. Pellentesque tristique lectus at eros ornare, at tempus est condimentum. Morbi semper orci id nulla imperdiet varius. Pellentesque faucibus enim ipsum, ac pulvinar nulla viverra at. Praesent non nunc sed nunc dignissim placerat. Suspendisse eget vulputate ipsum, vel consequat diam."
    },
]

export default function Artikel({navigation}) {
    const onPressedArtikelDetail = (data) => {
        navigation.navigate('DetailArtikel', data);
    };
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#43cad1' barStyle="dark-content" translucent/>

            {/* Header */}
            <View style={{padding:10, justifyContent:'space-between', backgroundColor:'#43cad1', paddingBottom:50, paddingTop:40}}>
                <Text style={{marginLeft:20, marginTop:20, color:'black', fontSize:18, fontWeight: 'bold', paddingTop:20}}>Hai, Randi su</Text>
                <Text style={{marginLeft:20, color:'white', fontSize:20, fontWeight: 'bold', marginTop:10}}>Artikel Terbaru</Text>
            </View>

            <View style={{marginTop:-20}}>
                <View style={{backgroundColor: 'white', marginHorizontal:50, justifyContent:'space-between', padding:10, borderRadius:10, alignItems:'center', paddingVertical:20}}>
                    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between', paddingHorizontal:10}}>
                        <Text style={{flex:1, fontWeight:'bold'}}>Tulisan</Text>
                        <FontAwesomeIcon icon={faBook} style={{flex:1}} />
                    </View>
                

                    {data1.map((data) => (
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
                </View>
            </View>

            <View style={{padding:20}}>
                <View style={styles.sessionWrapper}>
                        <Text style={styles.sessionTitle}>Tema</Text>
                </View>
            </View>

            <ScrollView horizontal style={{paddingHorizontal:20}} showsHorizontalScrollIndicator={false}>
                {data2.map((data) => (
                    <TouchableOpacity key={data.key} onPress={() => onPressedArtikelDetail(data)}>
                        <View  style={{backgroundColor:'white', alignItems:'center', padding:10, borderRadius:30, marginRight:10, height:150 }}>
                            <Image style={styles.listImage} source={data.image}/>
                            <Text style={{width:100, textAlign:'center', marginTop:3, fontWeight:'bold'}}>{data.title}</Text>
                            <Text>Detail</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={{padding:20}}>
                <View style={styles.sessionWrapper}>
                        <Text style={styles.sessionTitle}>Tema</Text>
                </View>
            </View>

            <ScrollView horizontal style={{paddingHorizontal:20}} showsHorizontalScrollIndicator={false}>
                {data2.map((data) => (
                    <TouchableOpacity key={data.key} onPress={() => onPressedArtikelDetail(data)}>
                        <View  style={{backgroundColor:'white', alignItems:'center', padding:10, borderRadius:30, marginRight:10, height:150, marginBottom:10 }}>
                            <Image style={styles.listImage} source={data.image}/>
                            <Text style={{width:100, textAlign:'center', marginTop:3, fontWeight:'bold'}}>{data.title}</Text>
                            <Text>Detail</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </ScrollView>
    )
}

const width = Dimensions.get('window').width/6.5;
const height = Dimensions.get('window').height/15;
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    midTextCaption:{
        color:'grey', 
        textAlign:'left',
        height:24,
        fontSize:10
    },
    midTextName:{
        fontSize:14, 
        fontWeight: 'bold'
    },
    listMidWrapper:{
        marginTop:7,
        flex:2, 
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
    listWrapper:{
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding:8,
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#d1d1d1',
    },
    button:{
        flex:0, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft:10
    },
    buttonText:{
        color:'#138e94'
    },
    sessionTitle:{
        fontSize:18, 
        fontWeight: 'bold'
    },
    sessionWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        alignItems:'center'
    },
})
