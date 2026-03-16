import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SuccessScreen({ navigation }) {

return(

<View style={styles.container}>

<TouchableOpacity
style={styles.backBtn}
onPress={()=> navigation.navigate("Home")}
>
<Image
source={require("../assets/Arrow2.png")}
style={styles.backIcon}
/>
</TouchableOpacity>


<Image
source={require("../assets/payment-success.png")}
style={styles.image}
/>


<Text style={styles.title}>
Payment Success, Yayy!
</Text>


<Text style={styles.text}>
we will send order details and invoice in your contact no. and registered email
</Text>


<TouchableOpacity style={styles.detailsRow}>

<Text style={styles.detailsText}>
Check Details
</Text>

<Image
source={require("../assets/icon-arrow-right.png")}
style={styles.arrow}
/>

</TouchableOpacity>



<TouchableOpacity style={styles.downloadBtn}>

<Text style={styles.downloadText}>
Download Invoice
</Text>

</TouchableOpacity>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F5F5",
alignItems:"center",
padding:20
},

backBtn:{
marginTop:40,
alignSelf:"flex-start",
width:45,
height:45,
backgroundColor:"#fff",
borderRadius:12,
justifyContent:"center",
alignItems:"center"
},

backIcon:{
width:10,
height:20
},

image:{
width:200,
height:200,
resizeMode:"contain",
marginTop:40
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

detailsRow:{
flexDirection:"row",
alignItems:"center",
marginTop:20
},

detailsText:{
color:"#5A6CF3",
fontWeight:"600"
},

arrow:{
width:26,
height:18,
marginLeft:5
},

downloadBtn:{
marginTop:40,
backgroundColor:"#5A6CF3",
padding:18,
borderRadius:18,
width:"100%",
alignItems:"center"
},

downloadText:{
color:"#fff",
fontSize:16,
fontWeight:"600"
}

});