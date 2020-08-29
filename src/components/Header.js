import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Styles, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Octicons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';



export default function Header(){
  const navigation = useNavigation();

  return (
    <View style={{ 
        marginTop:Constants.statusBarHeight,
        height:40,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between" ,
        elevation:4,
        shadowOffset:{  width: 10,  height: 10,  },
shadowColor: 'black',
shadowOpacity: 1.0,
         }} >
        <View style={styles.Header}>
<AntDesign 

name="youtube" size={35} color="red" />    
    <Text style={{marginLeft:5 ,fontSize:25 ,fontWeight:"bold"}}>YouTube</Text>
           </View>
           <View style={{ flexDirection:"row",
            justifyContent:"space-around"
            ,width:120,
            margin:5}}>
           <Octicons name="device-camera-video" size={30} color="black" />
           <EvilIcons name="search" size={30} color="black" 
           
           onPress={()=>navigation.navigate("search")}
           />
           <AntDesign name="profile" size={30} color="black" />

           </View>
    </View>
  );
}


const styles=StyleSheet.create({
    Header:{
        flexDirection:"row",
        margin:4,
        marginLeft:20,
        justifyContent:"space-between"
    }
})