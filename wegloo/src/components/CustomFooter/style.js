import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
import color from "../../components/common/colors";
const styles = (height, width, portrait) => StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        backgroundColor:color.white,
        height: portrait? width*0.15 : width*0.11, 
        flexDirection:'row', 
        justifyContent: 'space-between', 
        alignItems:'center',
        padding:width*0.035,
        zIndex:1,
        bottom:0
    },
    dotStyle:{
        position:'absolute',
        top:-17,
        right:8.5
    },
})

export default styles