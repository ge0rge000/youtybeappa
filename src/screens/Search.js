import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView ,TextInput,FlatList,ActivityIndicator} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Constants from 'expo-constants';
import MiniCard from '../components/MiniCard'
import {NavigatorIOS} from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'


///https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[AIzaSyCxPVfrjebbD68cYEw-MMp_MUtFTxG_bMU]
const SearchScreen=({navigation})=>{

    const[value,setValue]=useState("")/////هنا هياخد كلام 
    //const[miniCardData,setMiniCard]=useState([])//// هنا هياخد كل حاجه 
    const miniCardData= useSelector(state=>{
        return state
    })
    const dispatch = useDispatch()
    const[loading,setLoading]=useState(false)
    const fetchData=()=>{
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&videoType=any&key=AIzaSyCxPVfrjebbD68cYEw-MMp_MUtFTxG_bMU`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.items)
            setLoading(false)
            dispatch({type:"add",payload:data.items})

         //  setMiniCard(data.items)
        })
    }

    return(
        <View style={{ flex:1 }}>
            <View style={{ 
                padding:5,
                flexDirection:"row",
                justifyContent:"space-around",
                elevation:5,
                backgroundColor:"white",
                marginTop:Constants.statusBarHeight,


}}> 
            <Ionicons name="ios-arrow-round-back" size={30} color="black"
            
            onPress={() => {
                navigation.goBack();
              }}
                          />
            <TextInput
            style={{ width:"70%" ,
        backgroundColor:"#e6e6e6"
        }}
            value={value}
            onChangeText={(text)=>{
                setValue(text)

            }}
            />
            <MaterialCommunityIcons name="send" size={30} color="black"
            onPress={()=>fetchData()}
            />
            </View>
{  loading ? <ActivityIndicator style={{ marginTop:10 }}   size="large"  color="black"/>:null}
        <FlatList
        data={miniCardData}
        renderItem={({item})=>{
            return <MiniCard
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            />
        }}
        keyExtractor={item=>{item. id.videoId}}
        />

        </View>
    )



}

export default SearchScreen