import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

export default function CheckoutScreen({ navigation }) {

return(

<View style={styles.container}>

{/* BACK */}

<TouchableOpacity
style={styles.backBtn}
onPress={()=> navigation.navigate("Cart")}
>
<Image
source={require("../assets/icon-arrow1.png")}
style={styles.backIcon}
/>
</TouchableOpacity>


{/* HEADER CARD */}

<View style={styles.topCard}>

<View>
<Text style={styles.title}>Checkout 💳</Text>
</View>

<View style={{alignItems:"flex-end"}}>
<Text style={styles.price}>₹ 1,527</Text>
<Text style={styles.tax}>Including GST (18%)</Text>
</View>

</View>


{/* PAYMENT METHOD */}

<View style={styles.methodRow}>

<View style={styles.creditBtn}>
<Image
source={require("../assets/icon-card.png")}
style={styles.methodIcon}
/>
<Text style={styles.creditText}>Credit card</Text>
</View>

<View style={styles.appleBtn}>
<Image
source={require("../assets/icon-apple.png")}
style={styles.methodIcon1}
/>
<Text style={styles.appleText}>Apple Pay</Text>
</View>

</View>



{/* FORM */}

<Text style={styles.label}>Card number</Text>

<View style={styles.inputBox}>

<TextInput
placeholder="5261 4141 0151 8472"
style={styles.input}
/>

<View style={styles.iconContainer}>

<Image
source={require("../assets/icon-mastercard.png")}
style={styles.cardIcon}
/>

<Image
source={require("../assets/icon-scan-card.png")}
style={styles.scanIcon}
/>

</View>

</View>


<Text style={styles.label}>Cardholder name</Text>

<TextInput
placeholder="Christie Doe"
style={styles.inputBox}
/>



<View style={styles.row}>

<View style={{flex:1,marginRight:10}}>

<Text style={styles.label}>Expiry date</Text>

<TextInput
placeholder="06 / 2024"
style={styles.inputBox}
/>

</View>


<View style={{flex:1}}>

<Text style={styles.label}>CVV / CVC</Text>

<TextInput
placeholder="915"
style={styles.inputBox}
/>

</View>

</View>


<Text style={styles.note}>
We will send your order details to your email after the successful payment
</Text>



{/* PAY BUTTON */}

<TouchableOpacity
style={styles.payBtn}
onPress={()=> navigation.navigate("Success")}
>

<Image
source={require("../assets/icon-lock.png")}
style={styles.lockIcon}
/>

<Text style={styles.payText}>Pay for the order</Text>

</TouchableOpacity>


</View>

);
}

const styles = StyleSheet.create({

iconContainer:{
flexDirection:"row",
alignItems:"center"
},

scanIcon:{
width:28,
height:22,
marginLeft:10
}, 

container:{
flex:1,
backgroundColor:"#F5F5F5",
padding:20
},

backBtn:{
marginTop:40,
width:45,
height:45,
backgroundColor:"#fff",
borderRadius:12,
justifyContent:"center",
alignItems:"center"
},

backIcon:{
width:10,
height:20,
},

topCard:{
marginTop:20,
backgroundColor:"#fff",
borderRadius:25,
padding:20,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

title:{
fontSize:20,
fontWeight:"bold"
},

price:{
fontSize:20,
fontWeight:"bold",
color:"#2ECC71"
},

tax:{
fontSize:12,
color:"gray"
},

methodRow:{
flexDirection:"row",
marginTop:20
},

creditBtn:{
flex:1,
flexDirection:"row",
backgroundColor:"#2ECC71",
padding:15,
borderRadius:15,
alignItems:"center",
justifyContent:"center",
marginRight:10
},

creditText:{
color:"#fff",
fontWeight:"600",
marginLeft:8
},

appleBtn:{
flex:1,
flexDirection:"row",
backgroundColor:"#fff",
padding:15,
borderRadius:15,
alignItems:"center",
justifyContent:"center"
},

appleText:{
marginLeft:8
},

methodIcon:{
width:26,
height:18
},

methodIcon1:{
width:18,
height:22
},

label:{
marginTop:20,
fontWeight:"600"
},

inputBox:{
marginTop:5,
backgroundColor:"#EDEDED",
borderRadius:12,
padding:15,
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between"
},

input:{
flex:1
},

cardIcon:{
width:35,
height:20
},

row:{
flexDirection:"row"
},

note:{
marginTop:20,
fontSize:12,
textAlign:"center",
color:"gray"
},

payBtn:{
marginTop:25,
backgroundColor:"#2ECC71",
padding:18,
borderRadius:18,
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
},

payText:{
color:"#fff",
fontSize:16,
fontWeight:"600",
marginLeft:8
},

lockIcon:{
width:18,
height:22
}

});