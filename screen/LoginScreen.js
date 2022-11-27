import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { Colors } from "../components/Database";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text style={{ textAlign: "center", paddingTop: 100, fontSize: 40, paddingBottom:200 }}>
        Login
      </Text>
      <View style={{ 
        backgroundColor: Colors.white,
         borderColor:Colors.lightgrey,
         borderWidth:1, borderRadius:5, 
         paddingHorizontal:10, 
         marginVertical:5,
         width:'80%',
         height:35,
         alignSelf: "center",
         
         }}>
        <TextInput placeholder="Username" style={{ fontSize:18}} />
      </View>
      <View style={{ backgroundColor: Colors.white, 
        borderColor:Colors.lightgrey,borderWidth:1, 
        borderRadius:5, 
        paddingHorizontal:10, 
        marginVertical:5,
        width:'80%',
        height:35,
        alignSelf: "center"
        }}>
        <TextInput placeholder="Password" secureTextEntry={true} style={{ fontSize:18}} />
      </View>
      <View style={{
        width:'80%',
        
        padding:15,
        marginVertical:5,
        alignSelf:"center",
        borderRadius:5
      }}>
        <Button title="Login" style={{fontWeight:'bold', fontSize:24}}/>
      </View >
      
      <View style={{flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              paddingTop:10}}>

      <TouchableOpacity>
        <Text style={{textAlign:"center",color:Colors.backgroundDark,}} onPress={() => navigation.navigate('register')}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:"center",color:Colors.backgroundDark}} onPress={() => navigation.navigate('forgot')}>Forgot Password ?</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
