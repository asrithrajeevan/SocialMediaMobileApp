import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Connections from '../connections';
import LiveExperence from '../liveExperiance';
import RecentlyWith from '../recentlyWith';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../../components/common/colors';
import ViewAll from '../ViewAll';

const MyTabBar = ({ state, descriptors, navigation, position }) => {
  const flatListRef = React.useRef(null);

  const scrollTo = (name, index) => {
    navigation.navigate(name)
    flatListRef.current.scrollToIndex({ animated: true, index });

  };
  return(
    <View style={{
      width:'100%',
      backgroundColor:color.white,
      flexDirection:'row', 
      justifyContent: 'space-between', 
      alignItems:'center',
      zIndex:1,
      paddingBottom:15,
      paddingHorizontal:15
    }}>
      {/* {
        state.routes.map((routes, index)=>{
          const isFocused = state.index === index;
          const label = routes.name === 'ViewAll'? "ViewAll"
            :routes.name === 'Connections'? "Connections"
            :routes.name === 'LiveExperence'? "Live Experence"
            :routes.name === 'RecentlyWith'? "Recently With":''
            return (
              <TouchableOpacity onPress={()=>navigation.navigate(routes.name)} key={index} style={{ flexDirection: 'row', paddingTop: 20 }}>
                <Text style={{color: isFocused? color.black : color.placeHolderTextColor, fontWeight:'500', fontSize:16}}>{label}</Text>
                {isFocused ? <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{height:3, width:30, backgroundColor:color.black_level_1, position:'absolute', bottom:-10, borderRadius:100}}>
                  <View></View>
                </LinearGradient> : null}
              </TouchableOpacity>
            )
        })
      } */}
      <FlatList
        horizontal={true}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        data={state.routes}
        renderItem={({item,index})=>{
          const isFocused = state.index === index
          const name = item.name
          return(
            <View style={{flexDirection:'row', marginBottom:12}}>
              <TouchableOpacity onPress={()=>scrollTo(name, index)} key={index} style={{ flexDirection: 'row', paddingTop: 20, marginRight:30}}>
                <Text style={{color: isFocused? color.black : color.placeHolderTextColor, fontWeight:'500', fontSize:16}}>{item.name}</Text>
              </TouchableOpacity>
                {isFocused ? <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{height:3, width:30, backgroundColor:color.black_level_1, bottom:-10, borderRadius:100,position:'absolute'}}>
                  <View></View>
                </LinearGradient> : null}
            </View>
          )
        }}
      />
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator tabBar={props=><MyTabBar {...props}/>}>
      <Tab.Screen name="View All" component={ViewAll} />
      <Tab.Screen name="Connections" component={Connections} />
      <Tab.Screen name="LiveExperence" component={LiveExperence} />
      <Tab.Screen name="RecentlyWith" component={RecentlyWith} />
    </Tab.Navigator>
  );
}
