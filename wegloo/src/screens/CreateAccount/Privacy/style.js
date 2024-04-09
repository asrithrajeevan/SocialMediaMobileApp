import { Dimensions, StyleSheet } from "react-native";
import color from "../../../components/common/colors";
const {width, height} = Dimensions.get('screen')

const styles = (height,width,portrait) => StyleSheet.create({
    headContainer:{
        padding:5,
        flexDirection:'row',
        width:'100%'
    },
    backButton:{
        alignItems:'flex-start',
        width:'10%'
    },
    privacyTextView:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%'
    },
    privacyText:{
        fontWeight:'500',
        fontSize:16, 
        color:color.black
    },
    content:{
        margin:15
    },
    frirstParagraph : {
        lineHeight:25, 
        color:color.black
    },
    secondParagraph:{
        lineHeight:25,
        marginTop:15, 
        color:color.black},
        bottomRoundButtonVew:{
        justifyContent:'center',alignItems:'center', 
        marginBottom:80
    },
    bottomRoundButton:{
        width:55, 
        height:55, 
        backgroundColor:color.white_level_3, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:55/2, 
        bottom:-50
    }
}) 
export default styles 