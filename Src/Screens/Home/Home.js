import React,{useState,useEffect} from 'react'
import { FlatList, Text, View,StatusBar, Pressable,Image } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './styles';
import { Medications,Appointment } from '../../assets/dummydata';
import moment from 'moment';
const Home = () => {
    const [currentdate, setcurrentdate] = useState(moment(new Date()).format('dddd, MMMM D'))
    const [hour, sethour] = useState(moment(new Date()).format('HH'))
    
    const FollowButton = ({onButtonPressed = () => {}}) => {
        const [isPressed, setIsPressed] = useState(false);
        const onPressed = () => {
          setIsPressed(!isPressed);
          onButtonPressed();
        };
        return (
          <Pressable style={{alignSelf:'center',marginTop:25,borderWidth:1,width:130,alignItems:'center',borderRadius:8,borderColor:'#CAD5E2'}} 
            onPress={onPressed}>
            <Text style={{padding:10,color:'#14717c',fontSize:15,fontWeight:'500'}}>
              {isPressed ? 'Taken' : 'Mark as taken'}
            </Text>
          </Pressable>
        );
      };
    useEffect(() => {
        const timer = setInterval(() => { 
        setcurrentdate(moment(new Date()).format('dddd, MMMM D'));
        sethour(moment(new Date()).format('HH'))
      }, 60 * 1000);
      return () => {
        clearInterval(timer); 
      }
    }, []);
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <StatusBar barStyle='light-content'  backgroundColor={"#14717c"}/>
            <Card containerStyle={styles.Cardcontainer}>
            <Text style={styles.Headgreet}>Good {(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}!</Text>
            <Text style={styles.date}>{currentdate}th</Text>
            </Card>

            <View style={styles.medication}>
                <Text style={styles.medicationtitle}>Today's Medication</Text>
            </View>
            <View>
                <FlatList
                data={Medications}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>{
                    
                    return(
                        <Card containerStyle={styles.mediList}>
                            <View style={styles.datefield}>
                                <Text style={styles.datefieldtitle}>{item.time}</Text>
                                <Text style={styles.value}>Daily</Text>
                            </View>
                            <View>
                                <Image source={item.img} style={{width:30,height:30,marginHorizontal:15,marginTop:10}}/>
                                <Text style={[styles.medicationtitle,{marginHorizontal:15,marginVertical:15}]}>{item.Medi_name}</Text>
                            </View>
                            <View style={{flexDirection:'row',paddingHorizontal:15}}>
                                <View style={{marginRight:20}}>
                                    <Text style={{fontSize:15,fontWeight:'500',color:'rgba(0,0,0,0.3)'}}>Qty</Text>
                                    <View style={{flexDirection:'row',marginTop:5}}>
                                    <Text style={[styles.medicationtitle,{fontSize:14}]}>{item.quantity}</Text>
                                    <Text style={[styles.medicationtitle,{fontSize:14,marginLeft:5}]}>Days</Text>
                                    </View>
                                    
                                </View>
                                <View>
                                <Text style={{fontSize:15,fontWeight:'500',color:'rgba(0,0,0,0.3)'}}>Fills</Text>
                               
                                <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={[styles.medicationtitle,{fontSize:14}]}>{item.pills_left}</Text>
                                    <Text style={[styles.medicationtitle,{fontSize:14,marginLeft:5}]}>left</Text>
                                    </View>
                                </View>
                            </View>
                            <FollowButton/>
                        </Card>
                    )
                }}/>
            </View>
            <View style={styles.medication}>
                <Text style={styles.medicationtitle}>Next Appointment</Text>
            </View>
            <View>
                <Card containerStyle={styles.appointment}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center',width:190,justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize:25,fontWeight:'600',color:'#14717c',marginLeft:10,marginVertical:3}}>{Appointment[0].month}</Text>
                        <Text style={{fontSize:20,fontWeight:'600',marginLeft:20}}>{Appointment[0].date}</Text>
                    </View>
                    <View style={{width:1,height:40,backgroundColor:'grey'}}/>
                    <View>
                    <Text style={[styles.medicationtitle]}>{Appointment[0].doctor_name}</Text>
                        <Text style={[styles.medicationtitle,{fontWeight:'normal'}]}>{Appointment[0].time}</Text>
                    </View>
                    </View>
                    <View style={{marginRight:10}}>
                   <Image source={{uri:Appointment[0].profile}} style={{width:50,height:50,borderRadius:30}}/>
                    </View>
                </View>
                </Card>
            </View>
        </View>
    )
}

export default Home;


