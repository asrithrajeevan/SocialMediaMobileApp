import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import color from '../../../components/common/colors'
import { useDimentionsContext } from '../../../context'
import styles from './style'

export default function Experiance() {
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
  const [isShared, setShared] = useState(true)

  return (
    <View style={responsiveStyle.container}>
      <View style={responsiveStyle.buttonContainer}>
          <TouchableOpacity onPress={() => setShared(isShared ? isShared : !isShared)} style={[responsiveStyle.sharedButton, { backgroundColor: isShared ? color.secondaryMajantha : null }]}>
              <Text style={[responsiveStyle.sharedButtonText, { color: isShared ? color.white : color.black }]}>Shared</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShared(isShared ? !isShared : isShared)} style={[responsiveStyle.hiddenButton, { backgroundColor: isShared ? null : color.secondaryMajantha }]}>
              <Text style={[responsiveStyle.hiddenButtonText, { color: isShared ? color.black : color.white }]}>Hidden</Text>
          </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 15 }}>
          <View style={responsiveStyle.messageButtonContainer}>
              <View style={{ width: 250 }}>
                  <Text style={responsiveStyle.messageText}>You don’t have any experiences. Send a friend a message to create an experience together!</Text>
              </View>
              <TouchableOpacity style={responsiveStyle.startMessageButton}>
                  <Text style={responsiveStyle.startMessageButtonText}>Start Message</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}