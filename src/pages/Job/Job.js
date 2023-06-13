import React,{useState} from "react";
import {View,Text,FlatList} from 'react-native';
import styles from './Job.style';
import JobCard from "../../componenets/JobCard/JobCard";
import UseUser from "../../hooks/UseUser/UseUser";
import UseFetch from "../../hooks/UseFetch/UseFetch";
import Loading from "../../componenets/Loading/Loading";
import Error from "../../componenets/Error/Error";
import {useSelector} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function Job ({navigation}) {
  function goDetail (info) {

    navigation.navigate("Detail",{info})
  }




    
    const {loading,data,error} = UseFetch("https://www.themuse.com/api/public/jobs" + '?page=')
    
      const renderJob = ({item}) =>  <JobCard job={item} select={()=> goDetail(item)} ></JobCard>

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
      return <Error></Error>
    }

  

    

    const flatListData = data.flatMap(item => item.results);
    return (
        <View style={styles.container}>
          
          
            
            <FlatList
            data={flatListData}
            renderItem={renderJob}
            
          />
  
        </View>


    )
}

export default Job;