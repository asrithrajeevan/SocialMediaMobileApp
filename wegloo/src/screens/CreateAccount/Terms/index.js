import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import color from '../../../components/common/colors';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import styles from './style';
import { useDimentionsContext } from '../../../context';
import LoadingSpinner from '../../../components/common/spinner';

const TermsService = () => {
    const [showSpinner, setSpinner] = useState(false)
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)
    const navigation = useNavigation()
    const spinner = () =>{
        setSpinner(true)
        setTimeout(() => {
            saveData()
        }, 2000);
    }
    const saveData =()=>{
        setSpinner(false)
        navigation.navigate('Privacy')
    }

  return (
    <ScrollView style={responsiveStyle.container} showsVerticalScrollIndicator={false}>
        <View style={responsiveStyle.head}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={responsiveStyle.backButton}>
                <Ionicons name="chevron-back" size={26} color={color.black}/>
            </TouchableOpacity>
            <View style={responsiveStyle.TermsService}>
                <Text style={responsiveStyle.TermsServiceText}>Terms of Service</Text>
            </View>
        </View>
        <View style={{margin:15}}>
            <Text style={responsiveStyle.fistParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin faucibus ut tempus leo, mi massa mauris consectetur suspendisse. Dignissim at neque bibendum tempor, vestibulum, massa posuere ut mauris. Non cras egestas curabitur nunc in integer. Tempor, faucibus scelerisque vitae ipsum ornare. Sagittis viverra volutpat orci tempus est sed eget massa, in. Turpis montes, quis et ullamcorper massa venenatis montes. Vulputate auctor sit vitae id. Blandit posuere molestie neque ipsum, praesent arcu fermentum, vel. Nulla arcu tempus et, tincidunt augue. Lectus ipsum sit pellentesque dis ipsum aliquet ac.
            </Text>
            <Text style={responsiveStyle.secondParagreaph}>
                Risus et sit magna urna nibh. Ac sem ut consequat venenatis. Bibendum nisl ac pellentesque quam vitae sed sit laoreet. Interdum nibh est blandit ultrices praesent malesuada id viverra. Urna in maecenas lobortis dui. Nisl, fames ultrices nunc, sed. Felis sem lectus arcu, justo convallis morbi dui sed. Amet, dignissim tincidunt eget pellentesque elit lorem elementum, egestas. Egestas commodo pretium, vel pellentesque tincidunt adipiscing tincidunt adipiscing porta. Semper porttitor nisi orci fermentum id consectetur amet pulvinar potenti.
            </Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center', padding:30, marginBottom:80}}>
            <TouchableOpacity onPress={spinner} style={{width:65, height:65, backgroundColor:color.white, justifyContent:'center', alignItems:'center', borderRadius:65/2, bottom:-50, position:'absolute', borderWidth:4.5, borderColor:color.white_level_3}}>
                {showSpinner ? <View style={{position:'absolute'}}>
                <LoadingSpinner spinnerSize={65}/>
                </View> : null}
                <FontAwesome5 name="angle-right" size={26} color={color.black}/>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default TermsService