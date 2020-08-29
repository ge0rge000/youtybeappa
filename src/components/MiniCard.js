import React from 'react';
import { StyleSheet,Styles, Text, View,Image } from 'react-native';

const MiniCard =(props)=>{
    return(
        <View style={styles.miniCard}>
            <Image
            source={{ uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault_live.jpg` }}
            style={
                {
                    width:"45%",
                    height:100
                }
            }
        />
        <View style={{ 
            paddingLeft:10  
         }} >
            <Text style={{ 
                fontSize:15,
                width:"100%"
             }}
             ellipsizeMode="tail"
             numberOfLines={3}
             >
                {props.title}
            </Text>
            <Text style={{ fontSize:12 }}>
        {props.channel}
                </Text>
        </View>
        </View>
    )


}

const styles = StyleSheet.create({
    miniCard:{
        flexDirection:"row",
        margin:15
    }
})
export default MiniCard