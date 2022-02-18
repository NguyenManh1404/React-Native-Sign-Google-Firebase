import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity 
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const { logout, user } = useAuth();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.headerHomePage}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 100,}}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Modal')} >
          <Image  
            style={{ width: 50, height: 50, borderRadius: 100,}} 
            source={require( "../assets/logo.png" )}
          />     
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <FontAwesome name="wechat" size={24} color="black" />
        </TouchableOpacity>
        
      </View>
      <View>
      <Image style={{height:'80%',width:'100%'}} source={require( "../assets/tinder.png" )}></Image>
      </View>
  
    
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerHomePage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:20
  },
  SafeAreaView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
