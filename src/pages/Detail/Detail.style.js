import { StyleSheet,Dimensions } from "react-native";

const devicesize = Dimensions.get('window')
export default StyleSheet.create({

    container:{
        flex:1
        
    },
    first:{
        backgroundColor:'lavender'
    },
    jobname:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        margin:8,
        padding:5,
        textAlign:'center'
        

    },
    loc:{
        color:'red',
        fontSize:18,
        fontWeight:'700',


    },
    loc2:{
        color:'black',
        fontWeight:'500',
        
        

    },
    second:{
        textAlign:'center',
        
        

    },
    title:{
        fontSize:20,
        color:'black',
        fontWeight:'500',
        textAlign:'center',
        margin:18

    },
    detail:{
        fontSize:16,
        fontWeight:'800',
        
        
        
        
        

    },

    third:{
        

    },
    button:{
        padding:8,
        margin :10,
        backgroundColor: 'red',
        borderRadius:30,
        alignItems:'center'

    },
    buttontext:{
        color:'white',
        fontWeight:'bold'
    }
    

    


})