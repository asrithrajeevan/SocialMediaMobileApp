import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { lazy } from 'react'
import styles from './style'
import { useDimentionsContext } from '../../context'
import { useNavigation } from '@react-navigation/native'
import CostomeBotton from '../../components/CostomeBotton'

const LandingPage = () => {
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
    const navigation = useNavigation()
  return (
    <View style={responsiveStyle.container}>
        <View style={{justifyContent:'center', alignItems:'center', bottom:-35}}>
            <Image source={require('../../assets/images/appicon.png')} style={responsiveStyle.weglooLogo}/>
            <Text style={responsiveStyle.textStyle}>Shared Experiences with Friends</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', bottom:-120}}>
            <CostomeBotton
                type = 'primary'
                handleButtonPress={()=>navigation.navigate('CreateAccount')}
                buttonText={'Create an Account'}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={responsiveStyle.button2}>
                <Text style={responsiveStyle.button2Text}>Login</Text>
            </TouchableOpacity>
            <Text style={responsiveStyle.textBottom}>View the User Agreement and Privacy Policy</Text>
        </View>
    </View>
  )
}
export default LandingPage