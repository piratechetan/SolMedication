import React from 'react'
import { FlatList, Text, View,StatusBar, Pressable,Image } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './styles';
import { Appointments } from '../../assets/dummydata';
const Appointment = () => {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <StatusBar barStyle='light-content'  backgroundColor={"#14717c"}/>
        <Card containerStyle={styles.Cardcontainer}>
        <Text style={styles.Headgreet}>Appointment</Text>
        <Text style={styles.date}>Upcoming appointments</Text>
        </Card>
        </View>
    )
}

export default Appointment