import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Canvas from '../Canvas';
import Experiance from '../Experiences';
import AboutMe from '../About';
import color from '../../../components/common/colors';
import LinearGradient from 'react-native-linear-gradient';

const MyTabBar = ({ state, descriptors, navigation, position }) => {
  return(
    <>
      <View style={{
        width:'100%',
        backgroundColor:color.white,
        flexDirection:'row', 
        justifyContent: 'space-between', 
        alignItems:'center',
        zIndex:1,
        paddingBottom:25
      }}>
        {
          state.routes.map((routes, index)=>{
            const isFocused = state.index === index;
            const label = routes.name === 'Canvas'? "Canvas"
              :routes.name === 'Experience'? "Experiences"
              :routes.name === 'AboutMe'? "About Me":''
              return (
                <TouchableOpacity onPress={()=>navigation.navigate(routes.name)} key={index} style={{ flexDirection: 'row', paddingTop: 20 }}>
                  <Text style={{color:color.black, fontWeight:'500', fontSize:16}}>{label}</Text>
                  {isFocused ? <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{height:3, width:30, backgroundColor:color.black_level_1, position:'absolute', bottom:-10, borderRadius:100}}>
                    <View></View>
                  </LinearGradient> : null}
                </TouchableOpacity>
              )
          })
        }
      </View>
      <View style={{borderBottomWidth:1, borderBottomColor:color.underLineColor, marginHorizontal:15}}></View>
    </>
  )
}

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar  {...props}/>}>
        <Tab.Screen name="Canvas" component={Canvas} />
        <Tab.Screen name="Experience" component={Experiance} />
        <Tab.Screen name="AboutMe" component={AboutMe} />
    </Tab.Navigator>
  );
}
