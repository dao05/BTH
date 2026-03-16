import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CartScreen({ navigation }) {

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



{/* TITLE */}

<Text style={styles.title}>Your Cart 👍</Text>



{/* PRODUCTS */}

<Image
source={require("../assets/product1.png")}
style={styles.product}
/>

<Image
source={require("../assets/product2.png")}
style={styles.product}
/>

<Image
source={require("../assets/product3.png")}
style={styles.product}
/>



{/* TOTAL */}

<View style={styles.totalRow}>

<Text style={styles.totalText}>Total</Text>

<Text style={styles.price}>₹ 1,527</Text>

</View>



{/* CHECKOUT BUTTON */}

<TouchableOpacity
style={styles.checkoutBtn}
onPress={()=> navigation.navigate("Checkout")}
>

<Text style={styles.checkoutText}>
Proceed to checkout
</Text>

</TouchableOpacity>



{/* BOTTOM NAV */}

<View style={styles.bottomNav}>

<Image
source={require("../assets/icon-home.png")}
style={styles.navIcon}
/>

<Image
source={require("../assets/icon-bell.png")}
style={styles.navIcon}
/>

<Image
source={require("../assets/icon-scan-nav.png")}
style={styles.navIcon}
/>

<Image
source={require("../assets/icon-history.png")}
style={styles.navIcon}
/>

<Image
source={require("../assets/icon-cart.png")}
style={styles.navIcon}
/>

</View>

</View>

);
}

const styles = StyleSheet.create({

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
width:20,
height:20
},

title:{
fontSize:22,
fontWeight:"bold",
marginTop:20
},

product:{
width:"100%",
height:90,
marginTop:15,
resizeMode:"contain"
},

totalRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:20
},

totalText:{
fontSize:18,
fontWeight:"600"
},

price:{
fontSize:18,
fontWeight:"600",
color:"#F08A5D"
},

checkoutBtn:{
marginTop:20,
backgroundColor:"#F08A5D",
padding:18,
borderRadius:15,
alignItems:"center"
},

checkoutText:{
color:"#fff",
fontSize:16,
fontWeight:"600"
},

bottomNav:{
position:"absolute",
bottom:0,
left:0,
right:0,
height:70,
backgroundColor:"#fff",
flexDirection:"row",
justifyContent:"space-around",
alignItems:"center",
borderTopLeftRadius:25,
borderTopRightRadius:25
},

navIcon:{
width:25,
height:25
}

});