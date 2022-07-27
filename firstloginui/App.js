import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
const App = () => {
  return (
   <View style={{backgroundColor:"rgba(28,34,58,255)",flex:1}}>
   <View style={styles.container} >
<Text style={{color:"white",fontSize:20,textAlign:"center",paddingTop:100}}>Admin Dashboard</Text>
<Text style={{color:"rgba(255,255,255,.5)",fontSize:16,textAlign:"center",paddingTop:10}}>Sign in to your account.</Text>
<View style={{paddingTop:80,paddingHorizontal:20}}>
  <TextInput placeholder='Email' style={{backgroundColor:"rgba(39,46,74,255)",borderRadius:5,padding:10}} />
  <TextInput placeholder='Password' style={{backgroundColor:"rgba(39,46,74,255)",borderRadius:5,marginTop:20,padding:10}} />
<Text style={{color:"rgba(73,87,130,255)",textAlign:"right",marginTop:17}}>Forgot Password?</Text>
<TouchableOpacity>
  <View style={{backgroundColor:"rgba(128,95,236,255)",padding:20,borderRadius:25,marginTop:50}}>
    <Text style={{textAlign:"center",fontSize:18}}>Sign in</Text>
  </View>
</TouchableOpacity>
<Text style={{color:"rgba(73,87,130,255)",textAlign:"center",marginTop:17}}>Don't have an account? Sign up</Text>
</View>

    </View>
    </View>
  )
}
const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:"rgba(33,40,66,255)",
marginHorizontal:20,
marginVertical:20,
borderRadius:25,
borderTopWidth:9,
borderBottomWidth:9,
borderTopColor:"rgba(127,168,244,255)",
borderBottomColor:"rgba(137,210,122,255)"
},
})

export default App