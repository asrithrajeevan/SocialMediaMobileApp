import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Platform} from "react-native";
import styles from "./style";
import color from "../common/colors";
import { useDimentionsContext } from "../../context";
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';

const CustomeTextInput = props => {
    const {type, handleText, placeholder, value, check, multiline, validations} = props;
    const [eyeIon, setEye] = useState(true)   // for implementing eye open and close
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)
    const keyboardType =
    type === 'email' ? 'email-address' :
    type === 'password' ? 'default' :
    type === 'name' ? 'default' :
    'default';
        const handleEye = () => {
            setEye(eyeIon ? false : true)
        }

        const secureTextEntry = type === 'password' ? (eyeIon ? true : false) : false;
        const icon = type ==='password' ?
                eyeIon ?  'eye-off' : 'eye'
            :type ==='mobile'? require('../../assets/images/smartphone.png') : false
    return (
        <View>
            <View style={[responsiveStyle.container,{backgroundColor:type==='search'? '#EEEEFECC' : color.primaryMajantha,borderWidth:1, borderColor : validations?  'red':color.primaryMajantha}]}>
                {type === 'search' ?<View style={{marginRight:10}}>
                    <Feather name="search" size={20} color={color.black}/>
                </View>: null}

                <TextInput 
                    onChangeText={handleText}
                    // passing the text value to login page through props.
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    style={[responsiveStyle.textInput,{height:Platform.OS=='ios'?multiline?dimensions.windowHeight*0.1 : null:null}]}
                    selectionColor={color.secondaryMajantha}
                    autoCapitalize={type==='email'? 'none':'words'}
                    value={value}
                    placeholderTextColor={color.placeHolderTextColor}
                    multiline ={multiline? true:false}
                />
         
                <TouchableOpacity>
                    {check ? <Text style={responsiveStyle.checkText}>Check</Text> : null}
                </TouchableOpacity>

                <TouchableOpacity disabled={type==='password'? false : true} onPress={handleEye}>
                    {!icon ? null : <MaterialCommunityIcons name={icon} size={20} color={color.placeHolderTextColor} />}
                </TouchableOpacity>
            </View>

            {validations?
                <View style={{flexDirection:'row', alignItems:'center', marginBottom:5, marginTop:-2}}>
                    <AntDesign name="exclamationcircle" size={13} color="red"/>
                    <Text style={{marginLeft:5, fontSize:13, color:color.black}}>{validations}</Text>
                </View> 
            : null}
        </View>
    )
}

export default CustomeTextInput

// 'none': No auto-capitalization.
// 'sentences': Capitalize the first word of each sentence.
// 'words': Capitalize the first letter of each word.
// 'characters': Capitalize all characters. 
