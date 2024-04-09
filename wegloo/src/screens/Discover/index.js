import { View, Text, SafeAreaView, ScrollView, Image, FlatList, Platform } from 'react-native'
import React, { useRef, useState } from 'react'
import color from '../../components/common/colors'
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import { useDimentionsContext } from '../../context';
import styles from './style';
import TopTab from './TopTab';

const Discover = () => {
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page

  return (
    <SafeAreaView style={{ backgroundColor:color.white, flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:50, paddingTop:Platform.OS=='ios'? 50 : 10}}>
        <View style={{width:'100%', flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
          <View style={{marginLeft:15}}>
            <Image source={require('../../assets/images/WeeglooLogo.png')} style={{width:50, height:50, resizeMode:'contain'}}/>
          </View>
          <View style={{flexDirection:'row', marginRight:15}}>
            <View style={{padding:10}}>
              <Octicons name="diff-added" size={30} color={color.black}/>
            </View>
            <View style={{padding:10}}>
              <Feather name="send" size={30} color={color.black}/>
            </View>
          </View>
        </View>
        <View style={{paddingLeft:35,paddingVertical:20}}>
          <View style={{width:120, borderBottomWidth:1, padding:2}}>
            <Text style={{fontSize:20, fontWeight:'600',color:color.black}}>Discover</Text>
          </View>
          <View style={{marginTop:5,flexDirection:'row'}}>
            <EvilIcons name="location" size={20} color={color.black}/>
            <Text style={{fontSize:16, fontWeight:'400',color:color.black}}>Philadelphia, PA</Text>
          </View>
        </View>
        <View style={{minHeight:650,}}>
          {/* <MyCarousel showDetails={showDetails} entries={discover} /> */}
          <TopTab />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Discover