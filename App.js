import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CheckoutScreen from "./screens/CheckoutScreen";
import SuccessScreen from "./screens/SuccessScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right"
        }}
      >

        <Stack.Screen 
        name="Checkout" 
        component={CheckoutScreen} 
        />

        <Stack.Screen 
        name="Success" 
        component={SuccessScreen} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}