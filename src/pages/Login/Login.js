import React,{useState} from "react";
import {View,Text,FlatList,SafeAreaView,Image,TextInput,Button,Alert} from 'react-native';
import styles from './Login.style';
import { useDispatch } from "react-redux";
import Loading from "../../componenets/Loading/Loading";
import Error from "../../componenets/Error/Error";
import {useSelector} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik , isEmptyArray} from 'formik';
import { useNavigation } from '@react-navigation/native';
import usePost from "../../hooks/UsePost/UsePost";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login () {
  const { error, loading, data,postData,handleLogin} = usePost()
  const navigation = useNavigation();
  const dispatch = useDispatch();
  

  

    if (data && !error) {
      Alert.alert("WELCOME", "Welcome");
      dispatch({type:'SET_USER',payload:{user}})
      
      navigation.navigate("Job");
        }

    if (error && (error.response?.status === 401 || error.response?.status === 400)) {
      Alert.alert("Error", "Username or Password wrong");
    }
    

    
    return (
      <SafeAreaView style={styles.container} >

             <View  style={styles.logo_container} >
             
                <Image  style={styles.logo} source={require('../../assets/job.png')} />
            </View>
            <Formik
            initialValues={{username:'',password:''}}
            onSubmit={handleLogin}
            >
               { ({handleSubmit,handleChange,values}) => (
                <View style={styles.body_container}  >
                  <TextInput  style={styles.textinput} placeholder="Username" placeholderTextColor={"black"} onChangeText={handleChange('username')} value={values.username}   ></TextInput>
                  <TextInput style={styles.textinput} placeholder="Password" secureTextEntry placeholderTextColor={"black"} onChangeText={handleChange('password')} value={values.password}   ></TextInput>
                  <Button title="Login" color={'black'}   onPress={handleSubmit}></Button>

                </View> )}



            </Formik>
            </SafeAreaView>
        

    )
}

export default Login;

const user = {
  
    "address": {
    "geolocation": {
    "lat": "50.3467",
    "long": "-20.1310"
    },
    "city": "San Antonio",
    "street": "Hunters Creek Dr",
    "number": 6454,
    "zipcode": "98234-1734"
    },
    "id": 4,
    "email": "don@gmail.com",
    "username": "donero",
    "password": "ewedon",
    "name": {
    "firstname": "don",
    "lastname": "romer"
    },
    "phone": "1-765-789-6734",
    "__v": 0
    
}