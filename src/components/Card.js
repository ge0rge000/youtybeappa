import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Styles, Text, View,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';import Constants from 'expo-constants';
import { Octicons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Dimensions} from 'react-native-web';


const Card=(props)=>{
return(
    <View style={{ elevation:4 , margin:10, borderBottomWidth:2,marginBottom:3}}>
        <Image
            source={{ uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault_live.jpg` }}
            style={
                {
                    width:"100%",
                    height:200
                }
            }
        />
        <View style={{         flexDirection:"row",
                            margin:5,
                            

                            }}>
        <MaterialCommunityIcons name="account-outline" size={40} color="black" />

            <View style={{ 
                marginLeft:10,
             }}>
                <Text style={
                    {
                        fontSize:20,
                        width:"80%"
                    }
                }
                ellipsizeMode="tail"
                numberOfLines={2}
                >
                    {props.title}

                </Text>
                <Text>
                {props.channel}
                </Text>
            </View>
        </View>

    </View>
)
}

export default Card