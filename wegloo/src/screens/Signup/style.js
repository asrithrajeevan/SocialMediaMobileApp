import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
const {width, height} = Dimensions.get('screen')

const styles = (height,width,portrait) => StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:colors.white,
        marginTop:15
    },
    logBg : {
        width : width,
        height : width*0.3,
        resizeMode : 'cover', // for standing pictur fill and fit.
    },
    ScrollView : {
        flex:1,
        backgroundColor:colors.white,
        marginTop : portrait? -width*0.05 : -width*0.22,
        overflow : 'hidden',
        padding :portrait? width*0.038 : width*0.038,
    },
    WeeglooLogo : {
        // width : portrait? width*0.41: width*0.35,
        marginLeft:-15,
        // height :width*0.099,
        width:60,
        height:60,
        resizeMode : 'contain', // 'contain' stands for the picture must contain with the given height and weight
    },
    loginText : {
        textAlign:'center',
        fontFamily : 'Lato-Bold',
        fontSize : 30,
        paddingTop: height*0.024,
        color : '#000',
        fontWeight:'600',
        marginBottom:20

    },
    GoToLogin : {
        flexDirection:'row',
        fontFamily : 'Lato-regular',
        fontSize : 14,
        marginVertical : width*0.05,
        marginBottom : width*0.09,
        color : colors.black_level_3,
        justifyContent:'center'
    },
    OrSignUpWith : {
        fontFamily : 'Lato-regular',
        fontSize : 14,
        color : colors.black,
        justifyContent:'center',
        alignItems:'center'
    },
    validationContainer : {
        padding:5,
        marginTop:20
    },
    validationText : {
        color : colors.red
    },
    checkboxContainer: {
        paddingTop:10,
        marginHorizontal:15,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 15,
    },
    checkbox: {
        alignSelf: 'center',
        // color:colors.black
    },
    login : {
        paddingLeft:5,
        color:'#33dd',
        fontWeight:'600'
    }
})

export default styles