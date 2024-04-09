import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
// const {width, height} = Dimensions.get('screen')
// console.log('style ==>> height :',height, 'width : ',width);
const styles = (height, width, portrait) => StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:colors.white
    },
    logBg : {
        width : width,
        height : width*0.3,
        resizeMode : 'cover', // for standing pictur fill and fit.
    },
    ScrollView : {
        flex:1,
        backgroundColor : colors.white,
        // marginTop : portrait? -width*0.05 : -width*0.22,
        overflow : 'hidden',
        padding :portrait? width*0.038 : width*0.038,
        marginHorizontal:15
    },
    inkart : {
        width : portrait? width*0.41: width*0.35,
        marginLeft:-15,
        height :width*0.099,
        resizeMode : 'contain', // 'contain' stands for the picture must contain with the given height and weight
    },
    loginText : {
        textAlign:'center',
        fontFamily : 'Lato-Bold',
        fontSize : 30,
        paddingTop: height*0.014,
        color : '#000',
        fontWeight:'600',
        marginBottom:15
    },
    CreateNew : {
        fontFamily : 'Lato-regular',
        fontSize : 14,
        textAlign : 'center',
        color : colors.black_level_3,
        marginVertical : width*0.05
    },
    footer : {
        alignItems : 'center',
        justifyContent : 'center',
        padding : 20,
        backgroundColor : colors.primaryMajantha,
        borderTopWidth:5,
        borderColor:colors.white,
        bottom:1

    },
    footerText : {
        color : colors.black_level_3,
        fontSize:16,
        fontFamily : 'Lato-regular',
        fontWeight:'600'
    },
    dottedLineContainer : {
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
    },
    dottedLine : {
        flex:1,
        borderStyle:'dashed',
        borderWidth:1,
        color: colors.grey,
    },
    dashedText:{
        backgroundColor:'white',
        fontFamily:'Lato-Regular',
        fontSize:15,
        padding:5
    },
    WeeglooLogo : {
        // width : portrait? width*0.41: width*0.35,
        marginLeft:-15,
        // height :width*0.099,
        width:60,
        height:60,
        resizeMode : 'contain', // 'contain' stands for the picture must contain with the given height and weight
    },
    checkboxContainer: {
        paddingTop:10,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 15,
        justifyContent : 'space-between',
        paddingBottom:30
    },    
    checkbox: {
        alignSelf: 'center',
    },
    GoToSignIn:{
        flexDirection:'row',
        fontFamily : 'Lato-regular',
        fontSize : 14,
        marginVertical : width*0.05,
        marginBottom : width*0.09,
        color : colors.black_level_3,
        justifyContent:'center'
    },
    signUp:{
        paddingLeft:5,
        color:'#33dd',
        fontWeight:'600'
    }
})

export default styles