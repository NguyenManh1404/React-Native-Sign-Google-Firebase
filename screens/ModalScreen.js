import { View, Text, SafeAreaView,StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'


const ModalScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text>ModalScreen</Text>
    </SafeAreaView>
  )
}

export default ModalScreen;
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