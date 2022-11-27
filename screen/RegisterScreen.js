import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { Colors } from "../components/Database";

export default function RegisterScreen({ navigation }) {
  return (
    <View>
      <Text style={{ textAlign: "center", paddingTop: 100, fontSize: 40, paddingBottom:200 }}>
        Register
      </Text>
      <View style={{ 
        backgroundColor: Colors.white,
         borderColor:Colors.lightgrey,
         borderWidth:1, borderRadius:5, 
         paddingHorizontal:10, 
         marginVertical:5,
         width:'80%',
         alignSelf: "center",
         
         }}>
        <TextInput placeholder="Username" style={{ fontSize:18}} />
      </View>

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
        <TextInput placeholder="Email" style={{ fontSize:18}} />
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
        <Button title="Register" style={{fontWeight:'bold', fontSize:24}}/>
      </View>
    
      <TouchableOpacity>
        <Text style={{textAlign:"center",color:Colors.backgroundDark}} onPress={() => navigation.navigate('login')}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
