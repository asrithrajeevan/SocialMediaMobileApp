import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React from 'react'
import color from '../../components/common/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Canvas from './Canvas';
import Experiance from './Experiences';
import AboutMe from './About';
import { useDimentionsContext } from '../../context';
import TopTab from './TopTab';

const Account = () => {
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
  const Tab = createMaterialTopTabNavigator();

  return (
      <ScrollView showsVerticalScrollIndicator={false} style={responsiveStyle.scrollViewContainer}>
        <View style={responsiveStyle.container}>
          <View>
            <View style={responsiveStyle.userDetailsContainer}>
              <View style={responsiveStyle.userNameView}>
                {/* <Ionicons name="chevron-back" size={25} color={color.black}/> */}
                <Text style={responsiveStyle.userNameText}>@username</Text>
              </View>
              <View style={responsiveStyle.flexRow}>
                <View style={responsiveStyle.margin}>
                <Octicons name="diff-added" size={25} color={color.black}/>
                </View>
                <View style={responsiveStyle.margin}>
                <Feather name="send" size={25} color={color.black}/>
                <View style={responsiveStyle.notificationView}>
                <Text style={responsiveStyle.notificationText}>1</Text>
                </View>
                </View>
                <View style={responsiveStyle.margin}>
                <Octicons name="three-bars" size={25} color={color.black}/>
                </View>
              </View>
            </View>

            <View style={responsiveStyle.leftContainerView}>
              <View>
                <View>
                  <Image src={'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'} style={responsiveStyle.userImage}/>
                </View>

                <View style={responsiveStyle.nameView}>
                  <Text style={responsiveStyle.nameStyle}>Rio Perse</Text>
                </View>

                <View style={responsiveStyle.locationTextContainer}>
                  <EvilIcons name="location" size={23} color={color.black}/>
                  <Text style={responsiveStyle.locationTextstyle}>Raleigh, NC</Text>
                </View>

                <View style={responsiveStyle.isActiveContainer}>
                  <View style={responsiveStyle.isActiveCircle}></View>
                  <Text style={responsiveStyle.activeTextStyle}>Active 3hr ago</Text>
                </View>
              </View>

              <View>

                <View style={responsiveStyle.letfComponents}>
                  <Text style={responsiveStyle.text1}>900</Text>
                  <Text style={responsiveStyle.text2}>Connections</Text>
                </View>
                <View style={responsiveStyle.letfComponents}>
                  <Text style={responsiveStyle.text1}>2k</Text>
                  <Text style={responsiveStyle.text2}>Followers</Text>
                </View>
                <View style={responsiveStyle.letfComponents}>
                  <Text style={responsiveStyle.text1}>90</Text>
                  <Text style={responsiveStyle.text2}>Experiences</Text>
                </View>

                <View style={responsiveStyle.frendsView}>
                  <View>
                    <Image src={'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'} style={responsiveStyle.frendsProfilePhoto1}/>
                  </View>
                  <View style={{zIndex:1}}>
                    <Image src={'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'} style={responsiveStyle.frendsProfilePhoto2}/>
                  </View>
                  <View>
                    <Image src={'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'} style={responsiveStyle.frendsProfilePhoto3}/>
                  </View>
                </View>
                
                <View style={{marginVertical:5}}>
                  <Text style={responsiveStyle.topFriendText}>Top Friends</Text>
                </View>
              </View>
            </View>
            <View style={responsiveStyle.editProfileButtonView}>
              <TouchableOpacity onPress={()=>console.log('Login')} style={responsiveStyle.button2}>
                <Text style={responsiveStyle.button2Text}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{margin:15, height:500, flex:1}}>
          <TopTab />
        </View>
      </ScrollView>
  )
}

export default Account