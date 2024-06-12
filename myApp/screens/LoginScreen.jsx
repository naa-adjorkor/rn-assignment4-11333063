import { View, Text,StyleSheet, TextInput, Pressable,Image } from 'react-native'
import React, {useState} from 'react'

export default function LoginScreen({navigation}) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const handleLogin = () =>{
        navigation.navigate('HomeScreen', {name,email})
    }

  return (
    <View style={styles.login}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subTitle}>Welcome Back</Text>
      <Text style={styles.text}>Let’s log in. Apply to jobs!</Text>
    <View style={styles.form}>
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        </View>
        <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>
    </View>
    <View style={styles.alt}>
        <View style={styles.line}/>
        <Text style={styles.altText}>Or continue with</Text>
        <Text style={styles.line}/>
    </View>
    <View style={styles.altIcons}>
        <Pressable><Image source={require('../assets/images/apple.png')}style={styles.icons}/></Pressable>
        <Pressable><Image source={require('../assets/images/google.png')}style={styles.icons}/></Pressable>
        <Pressable><Image source={require('../assets/images/fb.png')}style={styles.icons}/></Pressable>
    </View>
    <Text style={styles.link}>Haven’t an account?<Text style={styles.register}>Register</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    login:{
        flex:1,
        top:100,
    },
    title:{
        color:'#356899',
        fontSize:22,
        fontWeight:600,
        left:24,
    },
    subTitle:{
        top:5,
        fontSize:24,
        fontWeight:600,
        left:24,
        color:'#0D0D26',
    },
    text:{
        top:5,
        fontSize:14,
        fontWeight:400,
        left:24,
        opacity:'40%',
        color:'#0D0D26',
    },
    form:{
        top:70,
        left:23,
    },
    input:{
        height:52,
        width:327,
        borderWidth:1,
        borderRadius:10,
        marginBottom:15,
        borderColor:'#AFB0B6',
        padding:12,
        fontSize:14,
        fontWeight:500,
        color:'#AFB0B6',
    },
    button:{
        backgroundColor:'#356899',
        height:52,
        width:327,
        borderRadius:5,
        alignItems:'center',
        marginTop:20,
    },
    buttonText:{
        fontSize:16,
        fontWeight:500,
        color:'#ffffff',
        top:15,
    },
    alt:{
        flexDirection:'row',
        top:150,
        left:24,
    },
    line:{
        height:0.5,
        backgroundColor:'#AFB0B6',
        width:100,
    },
    altText:{
        color:'#AFB0B6',
        marginTop:-10,
        paddingLeft:10,
        paddingRight:10,
    },
    altIcons:{
        flexDirection:'row',
        top:180,
        alignItems:'center',
        justifyContent:'center',
        gap:45,
    },
    icons:{
        height:26,
        width:26,
        backgroundColor:'#ffffff',
        padding:15,
        borderRadius:'50%',
    },
    link:{
        left:102,
        top:250,
        fontSize:14,
        fontWeight:400,
        color:'#AFB0B6',
    },
    register:{
        color:'#356899'
    },
})
