import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useDimentionsContext } from '../../context';
import styles from './style';
import color from '../../components/common/colors';
import LoadingSpinner from '../../components/common/spinner';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import ActionSheet from 'react-native-actions-sheet';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Post from './posts';

const MyCarousel = ({ entries, showDetails }) => {
  const handleActionSheet = () => {
    ActionSheetRef.current.show()
  };
  const handlHideActionSheet = () => {
    ActionSheetRef.current.hide()
  };
  const [loader, setLoader] = useState(false)
  const [isJoinGroup, setIsJoinGroup] = useState(false)
  const [joinGroupStatus, requestedToJoin] = useState(false)
  const [getExperiance, showExperianceButton] = useState(false)
  const [Item, setItem] = useState('')
  const [follower, setFollowerConnection] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [joinModal, showJoinModal] = useState(false)
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page

  const sentToParent = () => {
    requestedToJoin(false) // for join purpose
    setIsJoinGroup(false) // for join purpose
    showDetails(follower)
    setItem(follower)
    showExperianceButton(true)
    setShowModal(false)
  };
  const joinLoader = (item) => {
    showJoinModal(true)
  };
  const OpernModal = (item) => {
    setFollowerConnection(item)
    setShowModal(true)
  }
  const sendRequestToJoin = () => {
    requestedToJoin(true)
    showJoinModal(!joinModal)
  }
  const renderItem = ({ item, index }) => (
    <View key={index}>
      <View style={[responsiveStyle.shadow,{backgroundColor:color.white, margin:10,alignItems:'center', borderRadius:15, justifyContent:'center',paddingVertical:15}]}>
        <View>
            <Image src={item.image} style={{width:240, height:300, borderRadius:20}}/>
        </View>
        {getExperiance && Item.id === index ?
        <View>
          <TouchableOpacity onPress={handleActionSheet} style={{padding:15, backgroundColor:color.secondaryMajantha, borderColor:loader? color.white_level_3:color.secondaryMajantha, borderWidth:2, width:240, borderRadius:10, margin:5, marginTop:20, justifyContent:'center', alignItems:'center'}}>
            <Text style={{textAlign:'center',color:color.white, fontWeight:'600'}}>View Experience</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={joinLoader} style={{padding:15, backgroundColor:color.white, borderColor:color.secondaryMajantha, borderWidth:2, width:240, borderRadius:10, margin:5, marginTop:5, justifyContent:'center', alignItems:'center'}}>
              <View style={{flexDirection:'row'}}>
                { 
                  joinGroupStatus?
                  <View style={{flexDirection:'row'}}>
                    <Text style={{textAlign:'center', fontWeight:'600',marginRight:5, color:color.black}}>Joined</Text>
                    <Entypo name="check" size={17} color={color.black}/>
                  </View>
                  :
                  <View>
                      <Text style={{textAlign:'center', fontWeight:'600',marginRight:5, color:color.black}}>Join</Text> 
                  </View>
                }
              </View>
          </TouchableOpacity>
        </View>
        :
        <TouchableOpacity onPress={()=> OpernModal(item)} style={{padding:15, backgroundColor:color.white, borderColor:loader && Item.id === index? color.white_level_3:color.secondaryMajantha, borderWidth:2, width:240, height:50, borderRadius:10, margin:5, marginTop:20, justifyContent:'center', alignItems:'center'}}>
            {loader && Item.id === index ? <LoadingSpinner spinnerSize={30} color={color.secondaryMajantha}/>:
            <Text style={{textAlign:'center',color:color.black}}>Connect</Text>}
        </TouchableOpacity>
      }
      </View>
    </View>
  );
  const ActionSheetRef = useRef();
  return (
    <>
    <Carousel
      layout={'default'}
      data={entries}
      renderItem={renderItem}
      sliderWidth={dimensions.windowWidth} // Assuming these are defined elsewhere
      itemWidth={300} // Assuming these are defined elsewhere
    />
    <ActionSheet containerStyle={{backgroundColor:color.white}} ref={ActionSheetRef}>
      <TouchableOpacity onPress={handlHideActionSheet} style={{alignItems:'flex-end', paddingTop:15, paddingRight:10}}>
        <Feather name="x" size={25} color={color.black}/>
      </TouchableOpacity>
      <View style={{marginHorizontal:15}}>
        <View>
          <Text style={{color:color.black, fontWeight:'600', fontSize:18, lineHeight:27}}>Camping Wknd ⛰</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <EvilIcons name="location" size={20} color={color.black}/>
          <Text style={{color:color.black, fontWeight:'400', fontSize:11, lineHeight:20}}>Costa Mesa, CA</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Octicons name='dot-fill' size={8} color={color.black}/>
          <Text style={{color:color.black, fontWeight:'400', fontSize:11, lineHeight:20, marginLeft:5}}>Sebastian, Chris, Mark & others</Text>
        </View>
        <View style={{flexDirection:'row', marginEnd:-15, alignItems:'center', marginTop:5}}>
          <View>
            <Image src={Item.image} style={{
              height:40, 
              width:40, 
              borderRadius:40/2, 
              borderWidth:2, 
              borderColor:color.white,
            }}/>
          </View>
          <View style={{zIndex:1}}>
            <Image src={'https://s3-alpha-sig.figma.com/img/7166/2105/cb2234aebb01607e539351b8438ee385?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FfCHh8MbDwGlvFOJU89-M6XjLolZm~f8xZiTm~bVfcJixuoMx8IJGI9XEg6814z54G~s-8Z7MszmcUo87V72vy-9VQFLIFL9KDqVsZPEicEoybxeNn~rFl1Kv-Eqy3xx5oDjavfgtGMqYsdhf2zDLWkV5XvrL-XiLyBKqX5XhbBfGDRW2C~1VLYCZ40Q5r7JM3iSrf-KzvUk9hwlegH9I8SHTNmcjCeqwOx6PZBz7ozelztN6tlsVTF1~4ZhtBfkwGrw1VmX-gFNMT3mrVuCA8Lgqswgq8rr~Kq9Nhdf7KXmCp9t-326JzeRFWsjry5qgs6507jgVAGxpGUmhIFjYw__'} style={{
              height:40, 
              width:40, 
              borderRadius:40/2, 
              borderWidth:2, 
              borderColor:color.white,
              left:10
            }}/>
          </View>
          <View>
            <Image src={'https://s3-alpha-sig.figma.com/img/07ad/181e/ab67e0d0a4c147305bfe1dd4c732d06d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCu70Wv-BQNGNBYOfygeyIIuFUU~U-D79pzePyR82d79uB13EuaaRowEVjSGviQ0cNEvFPrPb9Wnv95dfu0VgXNaTI-om0LWvq6nvrpnU9z7rhuBFjGjp5WOuvKxAoFlUXj7Gcs~S3HUqtKW4ByoUOvcdE2Vp-l6eP538XA2LOJQohTFEoQGnn27C-b~3spTWTMgmetoy-o2b1FxueWZhTTaJzLGHC5v5ESjRPIK1iY3YPlc2nfy6Tw9Z0jituTirjVvvJaxiXLitN96at-IQezObjVbYoMQbEUE1TuqnL4N4jpttkVujNiLHdES1utRLxUb8V9PiO97oh3YCJZA7w__'} style={{
              height:40,
              width:40, 
              borderRadius:40/2, 
              borderWidth:2, 
              borderColor:color.white, 
            }}/>
          </View>
          <Text style={{fontSize:14, marginLeft:5, color:color.black}}>+ 20</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:15}}>
          <Fontisto name='heart' size={16} color={color.heartColor}/>
          <Text style={{marginHorizontal:5,color:color.black}}>12</Text>
          <MaterialCommunityIcons name='comment-processing-outline' size={21} color={color.black}/>
        </View>
      </View>
      <Text style={{textAlign:'right', padding:5, color:'#636472'}}>Photo Album: 40+ </Text>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Post />
      </View>
    </ActionSheet>
    <Modal animationType='fade' visible={showModal}>
      <View style={{backgroundColor:'#EEEEFEB2', justifyContent:'center',alignItems:'center', flex:1}}>
        <View style={{width:300, height:372, backgroundColor:color.white, borderRadius:20}}>
          <View style={{padding:10, alignItems:'flex-end'}}>
            <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
              <Feather name="x" size={20} color={color.black}/>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={{width:240, justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:color.black, fontWeight:'500', fontSize:16, lineHeight:24}}>
                A connection request was sent to <Text style={{color:color.secondaryMajantha}}>@sebastiansmith.</Text>
              </Text>
              <Text style={{marginTop:25, lineHeight:24, color:'#636472', fontSize:16}}>
                Once they have accepted your request, you can create an Experience and Direct Message!
              </Text>
            </View>
            <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{width:229, padding:10, borderRadius:5, marginTop:35}}>
              <TouchableOpacity onPress={sentToParent}>
                <Text style={{color:color.white, fontSize:16, fontWeight:'600', textAlign:'center'}}>Got It!</Text>
              </TouchableOpacity>
            </LinearGradient>
            <View>
              <Text style={{fontSize:10, lineHeight:15, fontWeight:'400', marginTop:30}}>If this request was not meant to be sent select cancel. </Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
                <Text style={{fontSize:12, lineHeight:18, fontWeight:'400', marginTop:30, color:'#3366BB'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
    <Modal animationType='fade' visible={joinModal}>
    {!isJoinGroup? <View style={{backgroundColor:'#EEEEFEB2', justifyContent:'center',alignItems:'center', flex:1}}>
        <View style={{width:300, height:285, backgroundColor:color.white, borderRadius:20}}>
          <View style={{padding:10, alignItems:'flex-end'}}>
            <TouchableOpacity onPress={()=>showJoinModal(!joinModal)}>
              <Feather name="x" size={20} color={color.black}/>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={{width:230, justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:color.black, fontWeight:'500', fontSize:16, lineHeight:24}}>
                Do you want to join <Text style={{color:color.secondaryMajantha}}>@sebastiansmith</Text> Group..?
              </Text>
            </View>
            <TouchableOpacity onPress={()=>setIsJoinGroup(true)}>
              <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{width:229, padding:10, borderRadius:5, marginTop:35}}>
                  <Text style={{color:color.white, fontSize:16, fontWeight:'600', textAlign:'center'}}>Join Group!</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View>
              <Text style={{fontSize:10, lineHeight:15, fontWeight:'400', marginTop:30}}>If this request was not meant to be sent select cancel. </Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=>showJoinModal(!joinModal)}>
                <Text style={{fontSize:12, lineHeight:18, fontWeight:'400', marginTop:30, color:'#3366BB'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      :
      <View style={{backgroundColor:'#EEEEFEB2', justifyContent:'center',alignItems:'center', flex:1}}>
        <View style={{width:300, height:372, backgroundColor:color.white, borderRadius:20}}>
          <View style={{padding:10, alignItems:'flex-end'}}>
            <TouchableOpacity onPress={()=>showJoinModal(!joinModal)}>
              <Feather name="x" size={20} color={color.black}/>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={{width:230, justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:color.black, fontWeight:'500', fontSize:16, lineHeight:24}}>
              Your request to Join was sent to <Text style={{color:color.secondaryMajantha}}>@sebastiansmith.</Text>
              </Text>
              <Text style={{marginTop:25, lineHeight:24, color:'#636472', fontSize:16}}>
              Once they have accepted your request, you can join this Experience.              
              </Text>
            </View>
            <TouchableOpacity onPress={sendRequestToJoin}>
              <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{width:229, padding:10, borderRadius:5, marginTop:35}}>
                  <Text style={{color:color.white, fontSize:16, fontWeight:'600', textAlign:'center'}}>Got It!</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View>
              <Text style={{fontSize:10, lineHeight:15, fontWeight:'400', marginTop:30}}>If this request was not meant to be sent select cancel. </Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=>showJoinModal(!joinModal)}>
                <Text style={{fontSize:12, lineHeight:18, fontWeight:'400', marginTop:30, color:'#3366BB'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      }
    </Modal>
    </>
  );
          
};

export default MyCarousel;
