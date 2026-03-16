import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ScanScreen({ navigation }) {

return(

<View style={styles.container}>

{/* BACK BUTTON */}

<TouchableOpacity
style={styles.backBtn}
onPress={()=> navigation.navigate("Home")}
>

<Image
source={require("../assets/icon-arrow1.png")}
style={styles.backIcon}
/>

</TouchableOpacity>



{/* SCAN FRAME */}

<Image
source={require("../assets/scan-frame.png")}
style={styles.frame}
/>



{/* PRODUCT IMAGE */}

<Image
source={require("../assets/juice.png")}
style={styles.product}
/>



{/* BOTTOM CARD - 1 IMAGE */}

<Image
source={require("../assets/bottom-card.png")}
style={styles.bottomCard}
/>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#D7C6B2",
justifyContent:"center",
alignItems:"center"
},

backBtn:{
position:"absolute",
top:60,
left:20,
width:45,
height:45,
backgroundColor:"#fff",
borderRadius:12,
justifyContent:"center",
alignItems:"center",
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:10,
elevation:5
},

backIcon:{
width:20,
height:20
},

frame:{
position:"absolute",
width:280,
height:420,
resizeMode:"contain"
},

product:{
width:200,
height:350,
resizeMode:"contain"
},

bottomCard:{
position:"absolute",
bottom:40,
width:"85%",
height:80,
resizeMode:"contain"
}

});