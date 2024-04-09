import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors"
// const {width, height} = Dimensions.get('screen')
// console.log('style ==>> height :',height, 'width : ',width);
const styles = (height, width, portrait) => StyleSheet.create({
    shadow : {
        elevation:5, // Shadow depth (for Android)
        borderRadius:11,
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 1, height: 2 }, // Shadow offset (for iOS)
        shadowOpacity: 0.3, // Shadow opacity (for iOS)
        shadowRadius: 3, // Shadow radius (for iOS)
    },
    slide: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
    fontSize: 20,
    },
    shadow : {
    elevation:10, // Shadow depth (for Android)
    borderRadius:11,
    shadowColor: '#000', // Shadow color (for iOS)
    shadowOffset: { width: 1, height: 2 }, // Shadow offset (for iOS)
    shadowOpacity: 0.3, // Shadow opacity (for iOS)
    shadowRadius: 3, // Shadow radius (for iOS)
    }
})

export default styles