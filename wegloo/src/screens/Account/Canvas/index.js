import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import ActionSheet from 'react-native-actions-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import color from '../../../components/common/colors';
import { useDimentionsContext } from '../../../context';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function Canvas() {
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
  const ActionSheetRef = useRef();
  const handleActionSheet = () => {
    ActionSheetRef.current?.setModalVisible(true);
  };
  const handleCloseActionSheet = () => {
    ActionSheetRef.current?.setModalVisible(false);
  };

  return (
    <View style={responsiveStyle.container}>
      <View style={responsiveStyle.addPostIconContaier}>
        <TouchableOpacity onPress={handleActionSheet} style={responsiveStyle.addIcon}>
          <Ionicons name="add-circle-sharp" size={45} color={color.black}/>
        </TouchableOpacity>
      </View>
      <View style={responsiveStyle.addPhotoTextContainerStyle}>
        <Text style={responsiveStyle.addPhotoTextStyle}>Add photos to your profile!</Text>
      </View>
      <ActionSheet containerStyle={responsiveStyle.actionSheetBg} ref={ActionSheetRef}>
        <View style={responsiveStyle.actionSheetInnerContainer}>
          <TouchableOpacity style={responsiveStyle.actionSheetTouchableConatainer}>
            <Text style={responsiveStyle.actionSheetIconView}>
              <Ionicons name="camera-outline" size={33} color={color.black}/>
            </Text>
            <View style={responsiveStyle.textContainer}>
              <Text style={responsiveStyle.actionSheetText}>Open Camera</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={responsiveStyle.actionSheetTouchableConatainer}>
            <Text style={responsiveStyle.actionSheetIconView}>
                <MaterialCommunityIcons name="folder-multiple-plus" size={33} color={color.black}/>
            </Text>
            <View style={responsiveStyle.textContainer}>
              <Text style={responsiveStyle.actionSheetText}>Add from Library</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={responsiveStyle.actionSheetTouchableConatainer}>
            <View style={{margin:18,flexDirection:'row', alignItems:'center'}}>
                <Image source={require('../../../assets/images/WeeglooLogo.png')} style={{width:35, height:35}}/>
            </View>
            <View style={responsiveStyle.textContainer}>
              <Text style={responsiveStyle.actionSheetText}>Add from Experience</Text>
            </View>
          </TouchableOpacity>

          <View style={responsiveStyle.cancellView}>
            <TouchableOpacity onPress={handleCloseActionSheet}>
              <Text style={responsiveStyle.actionSheetText}>Cancel</Text>
            </TouchableOpacity> 
          </View>
        </View>
        
      </ActionSheet>
    </View>
  )
}