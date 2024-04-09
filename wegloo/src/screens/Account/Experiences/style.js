import { Dimensions, StyleSheet } from "react-native";
import color from "../../../components/common/colors";

const styles = (height, width, portrait) => StyleSheet.create({
    container:{
        backgroundColor:color.white, 
        height:'100%'
    },
    buttonContainer:{
        justifyContent:'center', 
        alignItems:'center',
        marginTop:25, 
        flexDirection:'row'
    },
    sharedButton: {
        paddingHorizontal: 5,
        padding: 2,
        borderRadius: 5
    },
    sharedButtonText: {
        fontWeight: '600'
    },
    hiddenButton: {
        paddingHorizontal: 5,
        padding: 2,
        borderRadius: 5,
        marginLeft: 15
    },
    hiddenButtonText: {
        fontWeight: '600'
    },
    messageText: {
        textAlign: 'center',
        lineHeight: 20,
        fontSize: 15,
        color: color.black
    },
    startMessageButton: {
        marginTop: 50,
        backgroundColor: color.secondaryMajantha,
        padding: 15,
        borderRadius: 15
    },
    startMessageButtonText: {
        color: color.white,
        fontWeight: '600'
    },
    messageButtonContainer:{ 
        marginTop: 30, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
    
})

export default styles
