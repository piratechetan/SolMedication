import React from 'react'
import { FlatList, Text, View,StatusBar, Pressable,Image } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './styles';

const Chat = () => {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <StatusBar barStyle='light-content'  backgroundColor={"#14717c"}/>
        <Card containerStyle={styles.Cardcontainer}>
        <Text style={styles.Headgreet}>Messages</Text>
        <Text style={styles.date}>Live chat with Doctors</Text>
        </Card>
        </View>
    )
}

export default Chat