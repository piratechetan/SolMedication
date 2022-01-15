import React from 'react'
import { FlatList, Text, View,StatusBar, Pressable,Image } from 'react-native'
import { Card,Icon } from 'react-native-elements';
import styles from './styles';
import {Medications } from '../../assets/dummydata';
import info from '../../assets/img/info.png'
const Medication = () => {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <StatusBar barStyle='light-content'  backgroundColor={"#14717c"}/>
        <Card containerStyle={styles.Cardcontainer}>
        <Text style={styles.Headgreet}>Medication</Text>
        <Text style={styles.date}>Current prescribed medication.</Text>
        </Card>
        <View>
                <FlatList
                data={Medications}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>item.id}
                ListFooterComponent={()=>{
                    return(
                        <View style={{height:210,width:'100%'}}/>
                    )
                }}
                renderItem={({item})=>{

                    return(
                        <Card containerStyle={[styles.mediList,{marginTop:10}]}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={item.img} style={{width:30,height:30,marginHorizontal:15,marginTop:10}}/>
                                <Text style={[styles.medicationtitle,{marginHorizontal:15,marginVertical:15}]}>{item.Medi_name}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Image source={info} style={{width:25,height:25,marginHorizontal:15,marginTop:10}} tintColor={'#14717c'}/>
                                
                            </View>
                            </View>
                            <View>
                                <Text style={[styles.medicationtitle,{marginHorizontal:20,marginVertical:10,fontSize:13}]}>{item.description}</Text>
                            </View>
                            
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <View style={{marginRight:20}}>
                                    <Text style={{fontSize:15,fontWeight:'500',color:'rgba(0,0,0,0.3)'}}>Qty</Text>
                                    <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.medicationtitle,{fontSize:14}]}>{item.quantity}</Text>
                                    <Text style={[styles.medicationtitle,{fontSize:14,marginLeft:5}]}>Days</Text>
                                    </View>
                                    
                                </View>
                                <View>
                                <Text style={{fontSize:15,fontWeight:'500',color:'rgba(0,0,0,0.3)'}}>Fills</Text>
                               
                                <View style={{flexDirection:'row'}}>
                                <Text style={[styles.medicationtitle,{fontSize:14}]}>{item.pills_left}</Text>
                                    <Text style={[styles.medicationtitle,{fontSize:14,marginLeft:5}]}>left</Text>
                                    </View>
                                </View>
                                <View>
                                <Text style={{fontSize:15,fontWeight:'500',color:'rgba(0,0,0,0.3)'}}>Rx</Text>
                               
                                <View style={{flexDirection:'row'}}>
                                <Text style={[styles.medicationtitle,{fontSize:14}]}>{item.Rx}</Text>
                            
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:'rgba(0,0,0,0.05)',margin:20,width:'60%',height:30,alignItems:'center',borderRadius:10,flexDirection:'row',paddingHorizontal:10}}>
                                <Icon type="ionicon" name="time-outline" size={20} color="rgba(0,0,0,0.3)" style={{marginRight:5}}/>
                                <Text>1 pill daily every morning</Text>
                            </View>
                            
                        </Card>
                    )
                }}/>
            </View>
        </View>
    )
}

export default Medication