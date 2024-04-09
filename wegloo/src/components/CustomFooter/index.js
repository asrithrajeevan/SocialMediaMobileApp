import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { useDimentionsContext } from '../../context'
import Feather from 'react-native-vector-icons/dist/Feather';
import color from '../common/colors';
import Octicons from 'react-native-vector-icons/dist/Octicons';

const CustomFooter = ({state, navigation}) => {
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
  return (
    <View style={responsiveStyle.container}>
         { state.routes.map((routes, index) => {
            const isFocused = state.index === index;
            const icon = routes.name === 'Home'? "home"
                :routes.name === 'Discover'? "users"
                :routes.name === 'Notification'? "bell"
                :routes.name === 'Search'?  "search" 
                : "user"

            return(
                <TouchableOpacity
                    key={index} 
                    onPress={()=>navigation.navigate(routes.name)} 
                    // style={responsiveStyle.touchContainer}
                    >
                    { icon !== 'user'? <Feather name={icon} size={27} color={isFocused? color.secondaryMajantha:color.placeHolderTextColor}/>
                     :
                      <Image src={'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'} style={{height:30, width:30, borderRadius:30/2}}/>
                     }
                    {isFocused? 
                    <View style={responsiveStyle.dotStyle}>
                      <Octicons name='dot-fill' size={20} color={color.secondaryMajantha}/>
                    </View>
                    :null}
                </TouchableOpacity>
            )
        } )}
    </View>
  )
}
export default CustomFooter