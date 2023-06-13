import React from "react";
import { useEffect, useState } from "react";
import {View,Text,Button,TouchableOpacity,ScrollView,Alert} from 'react-native';
import styles from './Detail.style';
import HTMLView from 'react-native-htmlview';
import {useDispatch}  from 'react-redux'
import {useSelector} from 'react-redux'




function Detail ({route}) {
    const dispatch = useDispatch();
    
    const list = useSelector((state) => state.applyList);
    const favlist = useSelector((state) => state.favList);
    
    
    
 




    const addFav = () => {
        const lastItemIds = favlist.length > 0 ? favlist[favlist.length - 1].id : null;
        if (lastItemIds === info.id) {
            Alert.alert("error", "Already Taken");
          }
        else {
        dispatch({type: 'ADD_FAV',payload:{fav: info}})
        Alert.alert("Favorites","Successfully")
        }
    }

    const addApp = () => {
        const lastItemId = list.length > 0 ? list[list.length - 1].id : null;
      
        if (lastItemId === info.id) {
          Alert.alert("error", "Already apply");
        } else {
          dispatch({ type: 'ADD_APPLY', payload: { app: info } });
          Alert.alert("Apply", "Successfully");
        }
      };
      

    const {info} = route.params;

    function renderHTML(htmlString) {
        return <HTMLView value={htmlString} />;
      }

      const apiResponse = info.contents;
        const cleanText = renderHTML(apiResponse);

    return (
        <ScrollView>
        <View style={styles.container}  >
       
        <View  style={styles.first}  >
            <Text style={styles.jobname} >{info.name}</Text>
            
            <Text style={styles.loc}  >Location :  <Text style={styles.loc2}  >{info.locations[0].name}</Text> </Text>
            <Text style={styles.loc}  >Job Level :  <Text style={styles.loc2}  >{info.levels[0].name}</Text> </Text>
            
            

        </View>
        
        <View style={styles.second} >


            <Text style={styles.title} >Job Detail</Text>
            <Text style={styles.detail} >{cleanText}</Text>
            
        
        </View>

        <View style={styles.third} >

            
            <TouchableOpacity  style={styles.button} onPress={addApp} >
                <Text style={styles.buttontext} > Apply </Text>

                
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button} onPress={addFav} >
                <Text  style={styles.buttontext} > Add Favorites </Text>
            </TouchableOpacity>
            

        </View>
        
        </View>
        </ScrollView>


    )
}

export default Detail;