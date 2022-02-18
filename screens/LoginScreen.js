import { Button, ImageBackground, StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import React, { useLayoutEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/core';


const LoginScreen = () => {
    const {signInWithGoogle,loading}= useAuth();
    const navigation = useNavigation();

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      });
    },[]);
  
  return (
      
    <View>

    <ImageBackground style={styles.ImageBackground} source={require( "../assets/tinder.png" )}>
        <Text>{loading?"Loading":""}</Text>
        <TouchableOpacity style={styles.buttonLogin} onPress={signInWithGoogle}>
          <Text style={styles.buttonText}>Login with google</Text>
        </TouchableOpacity>
    </ImageBackground>
     
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  ImageBackground:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    

  },
  buttonLogin:{
    position:'absolute',
    bottom:'20%',
    backgroundColor:'white',
    height:'5%',
    width:'50%',
    justifyContent:"center",
    alignItems:'center',
    borderRadius:10
  },
  buttonText:{
    fontWeight:'bold'
  }
})