import { Dimensions, StyleSheet } from "react-native";
import color from "../common/colors";

const styles = (height,width,portrait) => StyleSheet.create({
    Button : { 
        flexDirection : 'row',
        alignItems :'center',
        justifyContent :'center',
        padding : portrait? width * 0.031 : width * 0.02441,
        borderRadius : 90,
        marginVertical : 10,
        width:330
    },
    Logo : {
        width : portrait? width*0.06 : width*0.03,
        height : portrait? width*0.06 : width*0.03,
        marginRight : width*0.01,
    }
})

export default styles