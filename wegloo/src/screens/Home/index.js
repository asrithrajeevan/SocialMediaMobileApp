import { View, Text, FlatList, Image, ScrollView, Modal, TouchableOpacity, Animated, StatusBar, Platform } from 'react-native'
import React, { useRef, useState } from 'react'
import { useDimentionsContext } from '../../context'
import styles from './style'
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import ActionSheet from 'react-native-actions-sheet';
import color from '../../components/common/colors';
import { TextInput } from 'react-native-gesture-handler';

const Home = () => {
  const [isShowStatus, setShowStatus] = useState(false)
  const [currentStatus, setcurrentStatus] = useState('')
  const [progress, setProgress] = useState(new Animated.Value(0)); // Animated value for the progress bar
  const progressDuration = 10000; // 15 seconds in milliseconds
  const dimensions = useDimentionsContext()
  const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
  const ActionSheetRef = useRef();
  const textInputRef = useRef(null);

  const status = [
    {
      image: 'https://images.unsplash.com/photo-1544961371-516024f8e267?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Aswaj'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1667311649552-2cfab63bdcfc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Akhil'
    },
    {
      image: 'https://images.unsplash.com/photo-1626594995085-36b551227b9a?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Mahendra'
    },
    {
      image: 'https://images.unsplash.com/photo-1544961371-516024f8e267?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Sachin'
    },
    {
      image: 'https://images.unsplash.com/photo-1544961371-516024f8e267?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Anand'
    },
    {
      image: 'https://images.unsplash.com/photo-1613706903647-77e255eff994?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Mohanlal'
    },
  ];

  const posts = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1667311649552-2cfab63bdcfc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Aswaj lal'
    },
    {
      image: 'https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=2814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Akhil TS'
    },
    {
      image: 'https://images.unsplash.com/photo-1626594995085-36b551227b9a?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Dhoni'
    },
    {
      image: 'https://images.unsplash.com/photo-1544961371-516024f8e267?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Anand Ambani'
    },
    {
      image: 'https://images.unsplash.com/photo-1613706903647-77e255eff994?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Mohanlal'
    },
    {
      image: 'https://images.unsplash.com/photo-1621146027714-e8921770f8d0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name : 'Akhil joy'
    },
  ];

  const showStatus = (item) => {
    setcurrentStatus(item)
    setShowStatus(true)
    Animated.timing(progress, {
      toValue: 1,
      duration: progressDuration,
      useNativeDriver: false, // Required for Android
    }).start();

    const timeout = setTimeout(()=>{
      setShowStatus(false)
      Animated.timing(progress, {
        toValue: 0,
        duration: 0, // Set duration to 0 to reset immediately
        useNativeDriver: false,
      }).start();
    },progressDuration)
    return () => clearTimeout(timeout);
  }

  const handleReset = () =>{
    setShowStatus(!showStatus)
    progress.stopAnimation(); // Stop current animation
    setProgress(new Animated.Value(0)); 
  }
  const handleActionSheet = () => {
    ActionSheetRef.current.show()
  };

  const addComment = () => {
    handleActionSheet()
    setTimeout(()=>{
    textInputRef?.current?.focus()
    },10)
  }

  return (
    <ScrollView style={{backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
      {/* <StatusBar hidden={true} /> */}
        <View>
          <View style={{paddingTop:Platform.OS=='android'? 0 : 15, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{padding:5, marginLeft:5}}>
              <Image source={require('../../assets/images/wegloo-logo.png')} style={{height:50, width:100, resizeMode:'contain'}}/>
            </View>
            <View style={{flexDirection:'row', padding:5}}>
              <View style={{paddingHorizontal:4}}>
                <Ionicons name="camera-outline" size={30} color="#000"/>
              </View>
              <View style={{paddingHorizontal:4}}>
                <Ionicons name="notifications-outline" size={30} color="#000"/>
              </View>
              <View style={{paddingHorizontal:4}}>
                <AntDesign name="search1" size={28} color="#000"/>
              </View>
            </View>
          </View>
          <FlatList
              data={status}
              horizontal={true}
              ListHeaderComponent={()=>{
                return(
                  <View>
                    <View style={responsiveStyle.status}>
                      <Image src={'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'} style={{height:90, width:90, borderRadius:90/2}}/>
                      <View style={{position:'absolute', top:55, right:-5}}>
                        <Ionicons name="add-circle" size={35} color="#d3d3d3"/>
                      </View>
                    </View>      
                    <View>
                      <Text style={{textAlign:'center', color:color.black}}>Your Story</Text>
                    </View>          
                  </View>
                )
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={(item)=>{
                return(
                  <View>
                    <TouchableOpacity onPress={()=>showStatus(item.item.image)} style={responsiveStyle.status}>
                      <Image src={'https://t4.ftcdn.net/jpg/02/98/86/43/240_F_298864376_sVnYfuY5dML4Dmr568ygaT1S3mSdXZ5F.jpg'} style={{height:90, width:90, borderRadius:90/2}}/>
                    </TouchableOpacity>
                    <View>
                      <Text style={{textAlign:'center',color:color.black}}>{item.item.name}</Text>
                    </View>
                  </View>
                )
            }}/>
        </View>
        
        <View style={{paddingBottom:10}}>
          <FlatList
              showsVerticalScrollIndicator={false}
              data={posts}
              showsHorizontalScrollIndicator={false}
              renderItem={(item)=>{
                return(
                  <View style={{paddingBottom:20}}>
                    <View style={{flexDirection:'row',alignItems:'center', padding:10, justifyContent:'space-between'}}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image src={'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'} style={{height:40, width:40, borderRadius:40/2}}/>
                        <View style={{padding:5}}>
                          <Text style={{fontSize:17, fontWeight:'700',color:color.black}}>{item.item.name}</Text>
                        </View>
                      </View>
                      <View>
                        <Entypo name="dots-three-vertical" size={20} color="#000" />
                      </View>
                    </View>
                    <View style={{padding:5}}>
                      <Text style={{color:color.black}}>Nature is the source of all true knowledge.</Text>
                    </View>
                    <View style={responsiveStyle.postContainer}>
                      <View style={{width:390, height:600, justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
                        <Image src={item.item.image} style={{height:600, width:390, borderRadius:5, resizeMode:'contain'}}/>
                      </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:5}}>
                      <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{paddingHorizontal:5, paddingVertical:5}}>
                          <AntDesign name="like2" size={27} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handleActionSheet()} style={{paddingHorizontal:5, paddingVertical:5}}>
                          <AntDesign name="message1" size={27} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal:5, paddingVertical:5}}>
                          <FontAwesome name="send-o" size={27} color="#000" />
                        </TouchableOpacity>
                      </View>
                      <View style={{paddingHorizontal:10, paddingVertical:5}}>
                        <FontAwesome name="bookmark-o" size={30} color="#000" />
                      </View>
                    </View>
                    <View style={{paddingHorizontal:10, paddingVertical:5}}>
                      <Text style={{color:color.black}}>20 likes</Text>
                    </View>
                    <TouchableOpacity onPress={()=>handleActionSheet()} style={{paddingHorizontal:10, paddingVertical:5, width:150}}>
                      <Text style={{color:color.black}}>View 1 comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>addComment()} style={{paddingHorizontal:10, paddingVertical:5, width:150}}>
                      <Text style={{fontWeight:'800', color:color.iron}}>Add Comment</Text>
                    </TouchableOpacity>
                  </View>
                )
            }}/>
        </View>
        <Modal 
          transparent={false} 
          visible={isShowStatus}
          animationType='fade'
          onRequestClose={() => {
            setShowStatus(!showStatus);
          }}>
          <View style={{flex: 1, backgroundColor:'rgba(0, 0, 0 ,1)'}}>
            <View style={responsiveStyle.AnimatedContainer}>
              <Animated.View style={[responsiveStyle.progressBar, { width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }) }]} />
            </View>

            <View style={{paddingTop:60, flexDirection:'row', alignItems:'center', paddingBottom:5, justifyContent:'space-between'}}>

              <View style={{flexDirection:'row', alignItems:'center'}}>
                <AntDesign name="arrowleft" size={30} color="#fff"/>
                <View style={{marginHorizontal:5,width:50, height:50, backgroundColor:'#fff', borderRadius:50/2}}>
                </View>
                <View>
                  <Text style={{color:'#fff'}}>User Name</Text>
                </View>
              </View>

              <TouchableOpacity onPress={()=>handleReset()} style={{padding:5}}>
                <Feather name="x" size={30} color={color.shadow}/>
              </TouchableOpacity>

            </View>

            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image src={currentStatus? currentStatus:null} style={{height:700, width:600}}/>
            </View>
          </View>

        </Modal>

        <ActionSheet containerStyle={{backgroundColor:color.black}} ref={ActionSheetRef}>
          <View>
            <Text style={{color:color.grey, textAlign: 'center', fontWeight:'800', paddingVertical:20}}>Comments</Text>
          </View>
          <View style={{paddingHorizontal:20, flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:color.white, width:40, height: 40, borderRadius:40/2}}>
            </View>
            <View style={{padding:10}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:11, color:color.primaryMajantha, fontWeight:'800'}}>Ahil Yadhav</Text>
                <Text style={{paddingHorizontal:10, color:color.iron, fontSize:12}}>2w ago</Text>
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                <View style={{width:'70%', overflow:'visible', paddingVertical:4}}>
                  <Text style={{fontSize:12, color:color.grey}}>Super</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={{marginRight:15}}>
                    <AntDesign name="like2" size={18} color="#fff"/>
                  </View>
                  <View style={{marginRight:15}}>
                    <AntDesign name="dislike2" size={18} color="#fff" />
                  </View>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={{fontSize:11, fontWeight:'800', color:color.grey}}>Reply:</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{paddingHorizontal:20, flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:color.white, width:40, height: 40, borderRadius:40/2}}>
            </View>
            <View style={{padding:10}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:11, color:color.primaryMajantha, fontWeight:'800'}}>Krishna Kanth</Text>
                <Text style={{paddingHorizontal:10, color:color.iron, fontSize:12}}>2w ago</Text>
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                <View style={{width:'70%', overflow:'visible', paddingVertical:4}}>
                  <Text style={{fontSize:12, color:color.grey}}>Make beauty in your life also.</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={{marginRight:15}}>
                    <AntDesign name="like2" size={18} color="#fff"/>
                  </View>
                  <View style={{marginRight:15}}>
                    <AntDesign name="dislike2" size={18} color="#fff" />
                  </View>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={{fontSize:11, fontWeight:'800', color:color.grey}}>Reply:</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent:'center', alignItems:'center', marginTop:20, marginBottom:10}}>
            <View style={{width:'90%', borderWidth:1, borderColor:color.shadow, padding:10, borderRadius:15, backgroundColor:'#5555', flexDirection:'row', justifyContent:'space-between'}}>
              <TextInput ref={textInputRef} placeholder='Add Comment' placeholderTextColor={color.iron} selectionColor={color.steel} style={{color:color.grey, width:'90%'}}/>
              <TouchableOpacity onPress={()=>console.warn('Sent')} style={{marginRight:5}}>
                <FontAwesome name="send-o" size={20} color={color.primaryMajantha} />
              </TouchableOpacity>
            </View>
          </View>
        </ActionSheet>
    </ScrollView>
  )
}

export default Home