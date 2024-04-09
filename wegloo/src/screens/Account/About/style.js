import { Dimensions, StyleSheet } from "react-native";
import color from "../../../components/common/colors";
const styles = (height, width, portrait) => StyleSheet.create({
    container:{
        height:'100%', 
        width:'100%',
        backgroundColor:color.white
    },
    innerContainer : {
        paddingTop:75, 
        marginTop:30, 
        justifyContent:'center', 
        alignItems:'center'
    },
    textView:{
        width:250
    },
    textStyle:{
        textAlign:'center',
        lineHeight:20, 
        fontSize:15, 
        color:color.black
    },
    buttonView:{
        marginTop:60, 
        backgroundColor:color.secondaryMajantha, 
        padding:15, 
        borderRadius:15
    },
    buttonText:{
        color:color.white, fontWeight:'600'
    }
})

export default styles