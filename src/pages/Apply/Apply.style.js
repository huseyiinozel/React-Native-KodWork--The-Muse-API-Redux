import { StyleSheet,Dimensions } from "react-native";

const devicesize = Dimensions.get('window')
export default StyleSheet.create({
    button:{
        padding:8,
        margin :10,
        backgroundColor: 'white',
        borderRadius:5,
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
        color:'black'
    }

    


})