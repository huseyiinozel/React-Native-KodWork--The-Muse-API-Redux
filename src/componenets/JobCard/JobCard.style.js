import { StyleSheet,Dimensions } from "react-native";

const devicesize = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        
        backgroundColor:'white',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection:'column',
        borderRadius:10

    },
    jobname:{
        color:'black',
        fontWeight:'bold',
        fontSize:22,
        marginLeft:8


    },
    count:{
        backgroundColor:'red',
        borderRadius:20,
        width:200,
        
        height:30,
        margin:5

    },
    kind:{
        color:'black',
        fontSize:16,
        marginLeft:8

    },
    level:{
        textAlign:'right',
        margin:5,
        fontWeight:'bold',
        fontSize:18,
        color:'black'

    },
    text:{
        color:"white",
        textAlign:'center'
    }

    


})