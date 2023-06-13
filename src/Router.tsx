import React from "react";
import Apply from "./pages/Apply/Apply";
import Job from "./pages/Job/Job";
import Favorites from "./pages/Favorites/Favorites";
import Detail from "./pages/Detail/Detail";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import FavProvider from "./context/FavProvider/FavProvider";




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Router() {
  return (
    
    
    <NavigationContainer>
      <Drawer.Navigator  >
      


        <Drawer.Screen name="Job" component={HomeStack} options={{
          headerShown:false,
          

          
          
        }} />
        <Drawer.Screen name="Favorites" component={FavoritesStack} options={{
          headerShown:false,
          

          
        }}  />
        <Drawer.Screen name="Apply" component={ApplyStack} options={{
          headerShown:false
        }} />
                   

      </Drawer.Navigator>
    </NavigationContainer>
    
   
  );
}

function HomeStack() {

 
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jobs" component={Job} options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
          }} />
      <Stack.Screen name="Detail" component={Detail} options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
           
          }}    />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
           
          }} />
      <Stack.Screen name="Detail" component={Detail}  options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
           
          }} />
    </Stack.Navigator>
  );
}

function ApplyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Apply" component={Apply}  options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
           
          }} />
      <Stack.Screen name="Detail" component={Detail}  options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
           
          }} />
    </Stack.Navigator>
  );
}




export default Router;
