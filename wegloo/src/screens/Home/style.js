import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
const styles = (height, width, portrait) => StyleSheet.create({
    status:{
        margin:5,
        flexDirection:'row',
        backgroundColor:colors.majantha,
        padding:2,
        borderRadius:45
    },
    postContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    AnimatedContainer: {
        height: 5,
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
        position:'absolute',
        zIndex:1,
        top:50
    },
      progressBar: {
        height: '100%',
        backgroundColor: colors.secondaryMajantha, // Blue color for the progress bar
    },
})

export default styles