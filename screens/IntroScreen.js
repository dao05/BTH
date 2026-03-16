import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/intro.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Scan, Pay & Enjoy!</Text>

      <Text style={styles.text}>
        scan products you want to buy at your favorite store and pay by phone
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>Start</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
padding:20,
backgroundColor:"#F5F5F5"
},

image:{
width:250,
height:250,
resizeMode:"contain"
},

title:{
fontSize:22,
fontWeight:"bold",
marginTop:20
},

text:{
textAlign:"center",
marginTop:10,
color:"gray"
},

button:{
marginTop:40,
backgroundColor:"#5A6CF3",
padding:15,
borderRadius:12,
width:200,
alignItems:"center"
},

btnText:{
color:"#fff",
fontSize:16
}

});