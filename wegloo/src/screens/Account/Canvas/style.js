import { Dimensions, StyleSheet } from "react-native";
import color from "../../../components/common/colors";
const styles = (height, width, portrait) => StyleSheet.create({
    container:{
        backgroundColor:color.white, height:'100%'
    },
    addPostIconContaier:{
        justifyContent:'center', 
        alignItems:'center', 
        paddingTop:15
    },
    addIcon:{
        width:45, 
        height:45, 
        borderRadius:45/2
    },
    addPhotoTextContainerStyle:{
        paddingTop:15
    },
    addPhotoTextStyle:{
        textAlign:'center', 
        color:color.black
    },
    actionSheetBg:{
        backgroundColor:color.mainColour
    },
    actionSheetInnerContainer:{
        margin:15, 
        marginHorizontal:30
    },
    actionSheetTouchableConatainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    actionSheetIconView:{
        margin:18,
        flexDirection:'row', 
        alignItems:'center', 
        color:color.black
    },
    actionSheetText : {
        textAlign:'center', 
        fontSize:16, 
        fontWeight:'500', 
        color:color.black
    },
    cancellView : {
        justifyContent:'center',
        alignItems:'center',
        marginTop:25
    },
    textContainer: {
        width:'60%'
    }
})

export default styles