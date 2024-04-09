import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
import color from "../../components/common/colors";
const {width, height} = Dimensions.get('screen')

const styles = (height,width,portrait) => StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle : {
        color: 'black',
    },
    weglooLogo:{
        width:100,
        height:100, 
        marginBottom:15
    },
    button1Text:{
        color:'#FFFFFF',
        fontWeight:'600',
        textAlign:'center',
        fontSize:14
    },
    button2:{
        marginTop:15,
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15,
        backgroundColor:'#FFFFFF',
        borderRadius:90,
        width:330,
        height:40,
        borderWidth:1,
        borderColor:'#5538FE'
    },
    button2Text:{
        color:'#000',
        fontWeight:'600',
        textAlign:'center',
        fontSize:14
    },
    textBottom :{
        marginTop:60,
        fontSize:12,
        color:color.black
    }
})

export default styles