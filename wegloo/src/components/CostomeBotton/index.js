import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import color from "../common/colors";
import { useDimentionsContext } from "../../context";
import LinearGradient from 'react-native-linear-gradient';

const CostomeBotton = props => {
    const {type, icon, handleButtonPress, buttonText} = props
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)

    return(
        <TouchableOpacity onPress={handleButtonPress}>
            <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={responsiveStyle.Button}>

                {icon? <Image style={responsiveStyle.Logo} source={icon}/> :null}

                <Text style={{
                    color : type === 'primary' ? color.white : color.black_level_3,
                    fontSize : type === 'primary' ? dimensions.portrait? 15: 20:15,
                    // fontFamily : type == 'primary' ? 'Lato-Bold' : 'Lato-Regular',
                    fontWeight:'700'
                }}>{buttonText}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CostomeBotton