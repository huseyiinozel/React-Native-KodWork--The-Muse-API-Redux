import React from "react";
import {View,Text,FlatList ,TouchableOpacity,Alert} from 'react-native';
import styles from './Apply.style';
import {useSelector} from 'react-redux'
import {useDispatch}  from 'react-redux'
import JobCard from "../../componenets/JobCard/JobCard";

function Apply ({navigation}) {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.applyList);

    function goDetail (info) {

        navigation.navigate("Detail",{info})
      }

    


    const renderjob =({item}) => (

        <View>
         <JobCard job={item} select={()=> goDetail(item)} ></JobCard>

         <TouchableOpacity  style={styles.button}  onPress={() => remove(item)} >
            <Text style={styles.title} > Delete  </Text>
         </TouchableOpacity>
        </View> 
     )
     const remove = (item) => {
        dispatch({ type: 'REMOVE_APPLY', payload: { appid: item.id } });
        Alert.alert('Apply', 'removed');
      };
      

    const flatListData = list
    return (
        <View style={{backgroundColor:'black'}}  > 
            
            <FlatList 
            data={flatListData}
            renderItem={renderjob}
            
            
            
            
            />

        </View>


    )
}

export default Apply;