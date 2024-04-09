import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
import color from "../../components/common/colors";
const {width, height} = Dimensions.get('screen')

const styles = (height,width,portrait) => StyleSheet.create({
    shadow:{
        marginTop:5,
        elevation:8, // Shadow depth (for Android)
        borderRadius:11,
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 1, height: 2 }, // Shadow offset (for iOS)
        shadowOpacity: 0.3, // Shadow opacity (for iOS)
        shadowRadius: 3, // Shadow radius (for iOS)
        marginBottom:15,
        marginLeft:10
    },
    card:{
        width:150,
        height:100,
        backgroundColor:color.white,
        margin:5,
        // marginHorizontal:6,
        borderRadius:11,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default styles