import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { Colors } from "../components/Database";
import { useForm, Controller } from "react-hook-form";

export default function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    
  } = useForm();

  const onLoginPress = () => {
    navigation.navigate('home');
    
  };

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          paddingTop: 100,
          fontSize: 40,
          paddingBottom: 200,
        }}
      >
        Login
      </Text>

      <Controller
        control={control}
        name="username"
        rules={{ required: 'Username is required' }}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
          <View
            style={{
              backgroundColor: Colors.white,
              borderColor: error ? Colors.red : Colors.lightgrey,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginVertical: 5,
              width: "80%",
              height: 35,
              alignSelf: "center",
            }}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Username"
              style={{ fontSize: 18 }}
            />
          </View>
          {error && <Text style={{color:Colors.red, alignSelf:'stretch', paddingLeft:43}}>{error.message||'Error'}</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Password is required', minLength: {value:3,message:'Password should be minimum 3 characters long'} }}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View
              style={{
                backgroundColor: Colors.white,
                borderColor: error ? Colors.red : Colors.lightgrey,
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
                marginVertical: 5,
                width: "80%",
                height: 35,
                alignSelf: "center",
              }}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Password"
                secureTextEntry={true}
                style={{ fontSize: 18 }}
              />
            </View>
            {error &&<Text style={{color:Colors.red, alignSelf:'stretch', paddingLeft:43}}>{error.message||'Error'}</Text>}
          </>
        )}
      />

      <View
        style={{
          width: "80%",
          padding: 15,
          marginVertical: 5,
          alignSelf: "center",
          borderRadius: 5,
        }}
      >
        <Button
          title="Login"
          style={{ fontWeight: "bold", fontSize: 24 }}
          onPress={handleSubmit(onLoginPress)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          paddingTop: 10,
        }}
      >
        <TouchableOpacity>
          <Text
            style={{ textAlign: "center", color: Colors.backgroundDark }}
            onPress={() => navigation.navigate("register")}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ textAlign: "center", color: Colors.backgroundDark }}
            onPress={() => navigation.navigate("forgot")}
          >
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
