import React, { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity, Platform} from "react-native";
import styles from "./style";
import color from "../common/colors";
import { useDimentionsContext } from "../../context";
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';

const CustomeSearch = props => {
    const {type, handleText, placeholder} = props;
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)
    return (
        <View style={responsiveStyle.shadow}>
            <View style={responsiveStyle.container}>
                {type === 'search' ?<View style={{marginRight:10}}>
                    <Feather name="search" size={20} color={color.black}/>
                </View>: null}

                <TextInput 
                    onChangeText={handleText}           // passing the text value to login page through props.
                    placeholder={placeholder}
                    style={responsiveStyle.textInput}
                    selectionColor={color.secondaryMajantha}
                    placeholderTextColor={color.placeHolderTextColor}
                />            
            </View>
        </View>
    )
}

export default CustomeSearch