import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDimentionsContext } from '../../../context'
import styles from './style'

export default function AboutMe() {
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
  return (
    <View style={responsiveStyle.container}>
      <View style={responsiveStyle.innerContainer}>
        <View style={responsiveStyle.textView}>
          <Text style={responsiveStyle.textStyle}>You haven’t enhanced your profile yet. Start now!</Text>
        </View>
        <TouchableOpacity style={responsiveStyle.buttonView}>
          <Text style={responsiveStyle.buttonText}>Start Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}