import React from 'react'
import { FlatList, Text, View,StatusBar, Pressable,Image } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './styles';

const Profile = () => {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <StatusBar barStyle='light-content'  backgroundColor={"#14717c"}/>
        <Card containerStyle={styles.Cardcontainer}>
        <Text style={styles.Headgreet}>Profile</Text>
        </Card>
        </View>
    )
}

export default Profile
