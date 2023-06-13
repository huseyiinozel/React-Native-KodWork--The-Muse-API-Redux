import { StyleSheet,Dimensions } from "react-native";

const devicesize = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#64b5f6'



    },
    logo_container:{
       flex:1,
       justifyContent:'center'

    },
    body_container:{
        flex:1
        
    },
    logo:{
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width,
        resizeMode:'contain',
        alignSelf:'center',
        borderRadius:200
        
    },
    textinput:{
        padding:3,
        margin :10,
        backgroundColor: 'white',
        borderRadius:5,
        flexDirection:'row'
    }


    


})