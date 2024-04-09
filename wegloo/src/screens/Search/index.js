import { View, Text, SafeAreaView, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import color from '../../components/common/colors';
import CustomeSearch from '../../components/CustomeSearch';
import styles from './style';
import { useDimentionsContext } from '../../context';

const Search = () => {
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
  
  const [searchText, setSearchText] = useState()
  const followers = [
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : '../../assets/images/follower.jpg'
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : ''
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : ''
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : ''
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : ''
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : ''
    }
  ]
  const resent = [
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : '../../assets/images/follower.jpg'
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : ''
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : ''
    }
  ]

  return (
    <SafeAreaView style={{ backgroundColor:color.white, flex:1}}>
      <ScrollView>
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
        <View style={{ paddingTop:30, paddingBottom:35}}>
          <View style={{marginHorizontal:15}}>
            <Text style={{fontSize:21, fontWeight:'600', color:color.black}}>Search</Text>
            <CustomeSearch
              type = 'search'
              placeholder = {'Search by people or places...'}
              handleText = {(text)=>setSearchText(text)}
            />
          </View>
          <View style={{marginHorizontal:15}}>
            <Text style={{color:color.black, fontSize:14, fontWeight:'500',paddingBottom:5}}>Recommended for you</Text>
          </View>
          <FlatList 
            data={followers}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item})=>{
              const img = item.image
              return(
                <View>
                  <View style={[responsiveStyle.card,responsiveStyle.shadow]}>
                    <View>
                      <Image source={require('../../assets/images/follower.jpg')} style={{width:50, height:50, borderRadius:50/2}}/>
                    </View>
                    <View style={{padding:5}}>
                      <Text style={{fontSize:12, fontWeight:'500', textAlign:'center', color:color.black}}>{item.userName}</Text>
                      <Text style={{fontSize:9, fontWeight:'300', textAlign:'center', color:color.black}}>{item.name}</Text>
                    </View>
                  </View>
                </View>
              )
            }}
          />
          <View style={{marginTop:10, marginLeft:15}}>
            <Text style={{lineHeight:21, fontSize:14, fontWeight:'500', color:color.black}}>Resent</Text>
          </View>
          <View style={{marginTop:20, margin:15}}>
            <FlatList 
              data={resent}
              scrollEnabled={false}
              renderItem={({item})=>{
                const img = item.image
                return(
                  <View style={{marginBottom:15,width:dimensions.windowWidth*0.9, borderRadius:15, alignItems:'center', flexDirection:'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <View style={{marginRight:10}}>
                        <Image source={require('../../assets/images/follower.jpg')} style={{width:60, height:60, borderRadius:60/2}}/>
                      </View>
                      <View>
                        <Text style={{fontSize:16, fontWeight:'500', color:color.black}}>{item.userName}</Text>
                        <Text style={{fontSize:16, fontWeight:'300', color:color.black}}>{item.name}</Text>
                      </View>
                    </View>
                    <TouchableOpacity>
                      <Feather name="x" size={25} color={color.black}/>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search