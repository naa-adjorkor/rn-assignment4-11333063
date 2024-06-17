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
      <View style={styles.search}>
        <Image source={require('../assets/images/search.png')} style={styles.searchIcon}/>
        <TextInput
            style={styles.searchInput}
            placeholder="Search jobs or position"
            placeholderTextColor={'#95969D'}
        />
        <View style={styles.menu}>
        <Image source={require('../assets/images/menu.png')} style={styles.menuIcon}/>
        </View>
      </View>
      
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
  search:{
    flexDirection:'row',
    height:50,
    width:265,
    borderWidth:1,
    backgroundColor:'#F2F2F3',
    borderColor:'#000000',
    borderRadius:12,
  },
  searchIcon:{
    height:26,
    width:26,
    left:16,
    top:10,
  },
  searchInput:{
    fontSize:15,
    fontWeight:500,
    color:'#000000',
    left:34,
  },
  menu:{
    left:120,
    borderWidth:1,
    backgroundColor:'#F2F2F3',
    borderColor:'#000000',
    borderRadius:12,
    padding:10,
  },
  menuIcon:{
    height:30,
    width:30,
  }
})