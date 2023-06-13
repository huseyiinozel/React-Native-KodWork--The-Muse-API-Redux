import React from "react";
import {View,Text,Button,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import styles from './JobCard.style';

function JobCard({job,select}) {
    return(
        <TouchableWithoutFeedback onPress={select}  >
        <View style={styles.container}>
            
        <Text style={styles.jobname} >{job.name}</Text>
            <Text style={styles.kind}  >{job.company.name}</Text>
            <TouchableOpacity disabled={true} style={styles.count}  >
                <Text style={styles.text}  >{job.locations[0].name}</Text>
            </TouchableOpacity >
            <Text  style={styles.level} >{job.levels[0].name}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default JobCard;