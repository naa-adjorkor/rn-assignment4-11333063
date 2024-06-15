import { View, Text,StyleSheet,Image, TextInput } from 'react-native'
import React from 'react'



export default function HomeScreen({route}) {
  const {name,email} = route.params;

  return (
    <View style={styles.home}>
      <View>
        <Text style={styles.name}>Naa</Text>
        <Text style={styles.email}>naa@gmail.com</Text>
        <Image source={require('../assets/images/apple.png')} style={styles.user}/>
      </View>
      

        <TextInput
            style={styles.input}
            placeholder="Search jobs or position"
            placeholderTextColor={'#AFB0B6'}
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
  home:{
    top:64,
    left:24,
  },
  name:{
    fontSize: 24,
    fontWeight: 700,
  },
  email:{
    color: '#95969D',
    fontSize:20,
    fontWeight: 400,
  },
  user:{
    width: 54,
    height: 54,
    left:300,
    top:-52,
  },
  input:{
    height:50,
    width:265,
    borderWidth:1,
    borderColor:'#AFB0B6',
    padding:12,
    fontSize:14,
    fontWeight:500,
    color:'#000000',
    borderRadius:12,
    fontSize:15,
  },
})