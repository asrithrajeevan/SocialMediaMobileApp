import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import color from '../../../components/common/colors'
import { useDimentionsContext } from '../../../context'
import Octicons from 'react-native-vector-icons/dist/Octicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';

const LiveExperence = ()=> {
  const dimensions = useDimentionsContext()
  return (
    <ScrollView contentContainerStyle={{justifyContent:'center', alignItems:'center'}} showsVerticalScrollIndicator={false} style={{backgroundColor:color.white}}>
      <View style={{
        elevation: 4, // Shadow depth (for Android)
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
        shadowOpacity: 0.2, // Shadow opacity (for iOS)
        shadowRadius: 2, // Shadow radius (for iOS)
        width:360,
        height:423,
        margin:15,
        borderRadius:10,
        backgroundColor:color.white,
        marginBottom:15
      }}>
        <View style={{margin:15}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'600', color:color.black, fontSize:18, lineHeight:27}}>Experience Title</Text>
              <View style={{backgroundColor:'hsl(352, 94%, 87%)', justifyContent:'center',alignItems:'center',borderRadius:15, marginLeft:15, paddingVertical:2}}>
                <View style={{backgroundColor:color.heartColor, paddingVertical:2, paddingHorizontal:7, justifyContent:'center',alignItems:'center', borderRadius:15,marginHorizontal:5, borderColor:color.white, borderWidth:1}}>
                  <Text style={{fontWeight:'600', color:color.white}}>Live</Text>
                </View>
              </View>
            </View>
            <View>
              <Entypo name="dots-three-vertical" size={20} color="#000" />
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center',padding:10}}>
            <Octicons name='dot-fill' size={8} color={color.black}/>
            <Text style={{color:color.black, fontSize:11, marginLeft:10}}>You, Emma, Zara & others</Text>
          </View>
          <View style={{flexDirection:'row', marginEnd:-15, alignItems:'center', marginTop:5}}>
            <View>
              <Image src={'https://s3-alpha-sig.figma.com/img/6296/c352/efd6143b9c64babd1451233d9ec17576?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3bwwt0XuFuauGXOi7pfhCz6n87Tx8smJo9TzQpcD8HYsyMHYKs22UJNJ4MfDnQ--sAU4CoiMn1St524vlKnuxdVRPaQ0BDMyyrcU7xpzxKc2RopIgjwijsewO4DgCMngoNrSuwteaIbcJLdXD58R7hnLcyDwI8VaJjQTkqrgk6NM2aKEM2kfr9I00I4CwMEd-MKq~4y72Q5oKcqtZzC7YIZw5M5BesJieI-0BdAff~BxNtRJt8--HxiTzwv9zpq9LizupnXihZ6VQP0uvUngPJ8y7wHeT5WcLOsIq0LBgKre4-dB6~wrFkY8EmBSxlPtDTqkhTfkCG7wPtqZY0zlw__'} style={{
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
            <View style={{zIndex:-1}}>
              <Image src={'https://s3-alpha-sig.figma.com/img/0768/eaf8/2a73b1f61cd5b4a77d8b1583c7778c32?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSmlI2ojb2VF~HL7ne6qUbRTo7CpHNsD~LwylYtInbbzCj7xji5BJ7Ur0bshAG0Ud-knSpl4pxynnwqtX1peHJE0N-UdHyVnmvC5vdYDh5Bm3ICx5z3S75IoTdjjjhHA5IPN66OCWDkIYaGZNh6XSeOe60NFumrsjiY6aIMRtxW6lCiia3U5Oawzj2oT6UBos~SS2S~MPB7u80vtND3LswVsvELIZqIvUWH011ElYWhLOYae41R~txRzvQxjVPybA1Q~Yb3il22NY7-EIDNFPh6PKn9RmVWgmB0zKjKXzE2g4l3u6v3BqaZcuahI-9ILjd8BcjSV-yzpuJQsvQyFhA__'} style={{
                height:40,
                width:40, 
                borderRadius:40/2, 
                borderWidth:2, 
                borderColor:color.white, 
                left:-15,
              }}/>
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginVertical:15}}>
            <View style={{flexDirection:'row'}}>
              <EvilIcons name="location" size={25} color={color.black}/>
              <Text style={{color:color.black,fontSize:16, fontWeight:'500',lineHeight:24, marginLeft:10}}>Costa Mesa, CA</Text>
            </View>
            <View>
              <Text style={{color:color.placeHolderTextColor, fontSize:14, fontWeight:'400'}}>2 hours ago</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', paddingHorizontal:5, marginVertical:10}}>
            <View>
              <Fontisto name='heart' size={20} color={color.heartColor}/>
            </View>
            <View style={{marginHorizontal:10}}>
              <AntDesign name="message1" size={20} color="#000" />
            </View>
            <View>
              <FontAwesome name="photo" size={20} color={color.secondaryMajantha}/>
              <View style={{position:'absolute', left:15, top:-8}}>
                <Ionicons name="add-circle-sharp" size={15} color={color.red}/>
              </View>
            </View>
          </View>
          <View style={{padding:10, paddingVertical:15}}>
            <Text style={{fontSize:16, fontWeight:'400', color:color.black}}>39 Likes</Text>
          </View>
          <View style={{ flexDirection:'row',alignItems:'center'}}>
            <Image src='https://s3-alpha-sig.figma.com/img/07ad/181e/ab67e0d0a4c147305bfe1dd4c732d06d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCu70Wv-BQNGNBYOfygeyIIuFUU~U-D79pzePyR82d79uB13EuaaRowEVjSGviQ0cNEvFPrPb9Wnv95dfu0VgXNaTI-om0LWvq6nvrpnU9z7rhuBFjGjp5WOuvKxAoFlUXj7Gcs~S3HUqtKW4ByoUOvcdE2Vp-l6eP538XA2LOJQohTFEoQGnn27C-b~3spTWTMgmetoy-o2b1FxueWZhTTaJzLGHC5v5ESjRPIK1iY3YPlc2nfy6Tw9Z0jituTirjVvvJaxiXLitN96at-IQezObjVbYoMQbEUE1TuqnL4N4jpttkVujNiLHdES1utRLxUb8V9PiO97oh3YCJZA7w__' style={{width:40 ,height:40, borderRadius:40/2}}/>
            <View style={{marginLeft:15, width:300}}>
              <Text style={{fontSize:18, fontWeight:'600', color:color.black}}>@emmasteal Lorem <Text style={{fontSize:15, fontWeight:400, color:color.black}}>ipsum dolor sit amet, consectetur adipiscing elit. </Text></Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', paddingVertical:15}}>
            <View style={{flexDirection:'row'}}>
              <Fontisto name='heart' size={20} color={color.heartColor}/>
              <Text style={{color:color.black, fontSize:16, fontWeight:'400', marginLeft:10}}>Replay</Text>
            </View>
            <View>
              <Text style={{color:color.black, fontSize:14, fontWeight:'400'}}>6hr</Text>
            </View>
          </View>
          <Text style={{marginVertical:15, color:color.black}}>View all 10 comments </Text>
        </View>
      </View>

      {/* Dinner */}
      <View style={{
        elevation: 4, // Shadow depth (for Android)
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
        shadowOpacity: 0.2, // Shadow opacity (for iOS)
        shadowRadius: 2, // Shadow radius (for iOS)
        width:360,
        height:423,
        marginHorizontal:15,
        borderRadius:10,
        backgroundColor:color.white,
        marginBottom:15
      }}>
        <View style={{margin:15}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'600', color:color.black, fontSize:18, lineHeight:27}}>Dinner Date</Text>
            <View style={{backgroundColor:'hsl(352, 94%, 87%)', justifyContent:'center',alignItems:'center',borderRadius:15, marginLeft:15, paddingVertical:2}}>
              <View style={{backgroundColor:color.heartColor, paddingVertical:2, paddingHorizontal:7, justifyContent:'center',alignItems:'center', borderRadius:15,marginHorizontal:5, borderColor:color.white, borderWidth:1}}>
                <Text style={{fontWeight:'600', color:color.white}}>Live</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center',padding:10}}>
            <Octicons name='dot-fill' size={8} color={color.black}/>
            <Text style={{color:color.black, fontSize:11, marginLeft:10}}>katie & zara</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row', marginEnd:-15, alignItems:'center', marginTop:5}}>
              <View>
                <Image src={'https://s3-alpha-sig.figma.com/img/07ad/181e/ab67e0d0a4c147305bfe1dd4c732d06d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCu70Wv-BQNGNBYOfygeyIIuFUU~U-D79pzePyR82d79uB13EuaaRowEVjSGviQ0cNEvFPrPb9Wnv95dfu0VgXNaTI-om0LWvq6nvrpnU9z7rhuBFjGjp5WOuvKxAoFlUXj7Gcs~S3HUqtKW4ByoUOvcdE2Vp-l6eP538XA2LOJQohTFEoQGnn27C-b~3spTWTMgmetoy-o2b1FxueWZhTTaJzLGHC5v5ESjRPIK1iY3YPlc2nfy6Tw9Z0jituTirjVvvJaxiXLitN96at-IQezObjVbYoMQbEUE1TuqnL4N4jpttkVujNiLHdES1utRLxUb8V9PiO97oh3YCJZA7w__'} style={{
                  height:40,
                  width:40, 
                  borderRadius:40/2, 
                  borderWidth:2, 
                  borderColor:color.white, 
                }}/>
              </View>
              <View style={{zIndex:-1}}>
                <Image src={'https://s3-alpha-sig.figma.com/img/0768/eaf8/2a73b1f61cd5b4a77d8b1583c7778c32?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSmlI2ojb2VF~HL7ne6qUbRTo7CpHNsD~LwylYtInbbzCj7xji5BJ7Ur0bshAG0Ud-knSpl4pxynnwqtX1peHJE0N-UdHyVnmvC5vdYDh5Bm3ICx5z3S75IoTdjjjhHA5IPN66OCWDkIYaGZNh6XSeOe60NFumrsjiY6aIMRtxW6lCiia3U5Oawzj2oT6UBos~SS2S~MPB7u80vtND3LswVsvELIZqIvUWH011ElYWhLOYae41R~txRzvQxjVPybA1Q~Yb3il22NY7-EIDNFPh6PKn9RmVWgmB0zKjKXzE2g4l3u6v3BqaZcuahI-9ILjd8BcjSV-yzpuJQsvQyFhA__'} style={{
                  height:40,
                  width:40, 
                  borderRadius:40/2, 
                  borderWidth:2, 
                  borderColor:color.white, 
                  left:-10,
                }}/>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <View>
                <Text style={{fontWeight:'500', color:color.black}}>Joined</Text>
                <View style={{borderBottomColor:color.secondaryMajantha, borderBottomWidth:2, marginRight:17}}></View>
              </View>
              <Entypo name="dots-three-vertical" size={20} color="#000" />
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginVertical:15}}>
            <View style={{flexDirection:'row'}}>
              <EvilIcons name="location" size={25} color={color.black}/>
              <Text style={{color:color.black,fontSize:16, fontWeight:'500',lineHeight:24, marginLeft:10}}>Giorgio on Pine</Text>
            </View>
            <View>
              <Text style={{color:color.placeHolderTextColor, fontSize:14, fontWeight:'400'}}>1 hours ago</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', paddingHorizontal:5, marginVertical:10}}>
            <View>
            <FontAwesome name='heart-o' size={20} color={color.black}/>
            </View>
            <View style={{marginHorizontal:10}}>
              <AntDesign name="message1" size={20} color="#000" />
            </View>
          </View>
          <View style={{padding:10, paddingVertical:15}}>
            <Text style={{fontSize:16, fontWeight:'400', color:color.black}}>39 Likes</Text>
          </View>
          <View style={{ flexDirection:'row',alignItems:'center'}}>
            <Image src='https://s3-alpha-sig.figma.com/img/07ad/181e/ab67e0d0a4c147305bfe1dd4c732d06d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCu70Wv-BQNGNBYOfygeyIIuFUU~U-D79pzePyR82d79uB13EuaaRowEVjSGviQ0cNEvFPrPb9Wnv95dfu0VgXNaTI-om0LWvq6nvrpnU9z7rhuBFjGjp5WOuvKxAoFlUXj7Gcs~S3HUqtKW4ByoUOvcdE2Vp-l6eP538XA2LOJQohTFEoQGnn27C-b~3spTWTMgmetoy-o2b1FxueWZhTTaJzLGHC5v5ESjRPIK1iY3YPlc2nfy6Tw9Z0jituTirjVvvJaxiXLitN96at-IQezObjVbYoMQbEUE1TuqnL4N4jpttkVujNiLHdES1utRLxUb8V9PiO97oh3YCJZA7w__' style={{width:40 ,height:40, borderRadius:40/2}}/>
            <View style={{marginLeft:15, width:300}}>
              <Text style={{fontSize:18, fontWeight:'600', color:color.black}}>@emmasteal Lorem <Text style={{fontSize:15, fontWeight:400, color:color.black}}>ipsum dolor sit amet, consectetur adipiscing elit. </Text></Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', paddingVertical:15}}>
            <View style={{flexDirection:'row'}}>
              {/* <Fontisto name='heart' size={20} color={color.heartColor}/> */}
              <Text style={{color:color.black, fontSize:16, fontWeight:'400', marginLeft:10}}>Replay</Text>
            </View>
            <View>
              <Text style={{color:color.black, fontSize:14, fontWeight:'400'}}>6hr</Text>
            </View>
          </View>
          <Text style={{marginVertical:15, color:color.black}}>View all 10 comments </Text>
        </View>
      </View>


      <View style={{
        elevation: 4, // Shadow depth (for Android)
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
        shadowOpacity: 0.2, // Shadow opacity (for iOS)
        shadowRadius: 2, // Shadow radius (for iOS)
        width:360,
        height:423,
        marginHorizontal:15,
        borderRadius:10,
        backgroundColor:color.white,
        marginBottom:10
      }}>
        <View style={{margin:15}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'600', color:color.black, fontSize:18, lineHeight:27}}>Dinner Date</Text>
            <View style={{backgroundColor:'hsl(352, 94%, 87%)', justifyContent:'center',alignItems:'center',borderRadius:15, marginLeft:15, paddingVertical:2}}>
              <View style={{backgroundColor:color.heartColor, paddingVertical:2, paddingHorizontal:7, justifyContent:'center',alignItems:'center', borderRadius:15,marginHorizontal:5, borderColor:color.white, borderWidth:1}}>
                <Text style={{fontWeight:'600', color:color.white}}>Live</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center',padding:10}}>
            <Octicons name='dot-fill' size={8} color={color.black}/>
            <Text style={{color:color.black, fontSize:11, marginLeft:10}}>katie & zara</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', marginEnd:-15, alignItems:'center', marginTop:5}}>
              <View>
                <Image src={'https://s3-alpha-sig.figma.com/img/0768/eaf8/2a73b1f61cd5b4a77d8b1583c7778c32?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSmlI2ojb2VF~HL7ne6qUbRTo7CpHNsD~LwylYtInbbzCj7xji5BJ7Ur0bshAG0Ud-knSpl4pxynnwqtX1peHJE0N-UdHyVnmvC5vdYDh5Bm3ICx5z3S75IoTdjjjhHA5IPN66OCWDkIYaGZNh6XSeOe60NFumrsjiY6aIMRtxW6lCiia3U5Oawzj2oT6UBos~SS2S~MPB7u80vtND3LswVsvELIZqIvUWH011ElYWhLOYae41R~txRzvQxjVPybA1Q~Yb3il22NY7-EIDNFPh6PKn9RmVWgmB0zKjKXzE2g4l3u6v3BqaZcuahI-9ILjd8BcjSV-yzpuJQsvQyFhA__'} style={{
                  height:40,
                  width:40, 
                  borderRadius:40/2, 
                  borderWidth:2, 
                  borderColor:color.white, 
                }}/>
              </View>
              <View style={{zIndex:-1}}>
                <Image src={'https://s3-alpha-sig.figma.com/img/07ad/181e/ab67e0d0a4c147305bfe1dd4c732d06d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCu70Wv-BQNGNBYOfygeyIIuFUU~U-D79pzePyR82d79uB13EuaaRowEVjSGviQ0cNEvFPrPb9Wnv95dfu0VgXNaTI-om0LWvq6nvrpnU9z7rhuBFjGjp5WOuvKxAoFlUXj7Gcs~S3HUqtKW4ByoUOvcdE2Vp-l6eP538XA2LOJQohTFEoQGnn27C-b~3spTWTMgmetoy-o2b1FxueWZhTTaJzLGHC5v5ESjRPIK1iY3YPlc2nfy6Tw9Z0jituTirjVvvJaxiXLitN96at-IQezObjVbYoMQbEUE1TuqnL4N4jpttkVujNiLHdES1utRLxUb8V9PiO97oh3YCJZA7w__'} style={{
                  height:40,
                  width:40, 
                  borderRadius:40/2, 
                  borderWidth:2, 
                  borderColor:color.white, 
                  left:-10,
                }}/>
              </View>
            </View>

            <View style={{marginRight:20}}>
                <Text style={{fontWeight:'500', color:color.black}}>Join</Text>
                <View style={{borderBottomColor:color.secondaryMajantha, borderBottomWidth:2, marginRight:5}}></View>
              </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginVertical:15}}>
            <View style={{flexDirection:'row'}}>
              <EvilIcons name="location" size={25} color={color.black}/>
              <Text style={{color:color.black,fontSize:16, fontWeight:'500',lineHeight:24, marginLeft:10}}>Giorgio on Pine</Text>
            </View>
            <View>
              <Text style={{color:color.placeHolderTextColor, fontSize:14, fontWeight:'400'}}>1 hours ago</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', paddingHorizontal:5, marginVertical:10}}>
            <View>
            <FontAwesome name='heart-o' size={20} color={color.black}/>
            </View>
            <View style={{marginHorizontal:10}}>
              <AntDesign name="message1" size={20} color="#000" />
            </View>
          </View>
          <View style={{padding:10, paddingVertical:15}}>
            <Text style={{fontSize:16, fontWeight:'400', color:color.black}}>39 Likes</Text>
          </View>
          <View style={{ flexDirection:'row',alignItems:'center'}}>
            <Image src='https://s3-alpha-sig.figma.com/img/0768/eaf8/2a73b1f61cd5b4a77d8b1583c7778c32?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSmlI2ojb2VF~HL7ne6qUbRTo7CpHNsD~LwylYtInbbzCj7xji5BJ7Ur0bshAG0Ud-knSpl4pxynnwqtX1peHJE0N-UdHyVnmvC5vdYDh5Bm3ICx5z3S75IoTdjjjhHA5IPN66OCWDkIYaGZNh6XSeOe60NFumrsjiY6aIMRtxW6lCiia3U5Oawzj2oT6UBos~SS2S~MPB7u80vtND3LswVsvELIZqIvUWH011ElYWhLOYae41R~txRzvQxjVPybA1Q~Yb3il22NY7-EIDNFPh6PKn9RmVWgmB0zKjKXzE2g4l3u6v3BqaZcuahI-9ILjd8BcjSV-yzpuJQsvQyFhA__' style={{width:40 ,height:40, borderRadius:40/2}}/>
            <View style={{marginLeft:15, width:300}}>
              <Text style={{fontSize:18, fontWeight:'600', color:color.black}}>@emmasteal Lorem <Text style={{fontSize:15, fontWeight:400, color:color.black}}>ipsum dolor sit amet, consectetur adipiscing elit. </Text></Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', paddingVertical:15}}>
            <View style={{flexDirection:'row'}}>
              {/* <Fontisto name='heart' size={20} color={color.heartColor}/> */}
              <Text style={{color:color.black, fontSize:16, fontWeight:'400', marginLeft:10}}>Replay</Text>
            </View>
            <View>
              <Text style={{color:color.black, fontSize:14, fontWeight:'400'}}>6hr</Text>
            </View>
          </View>
          <Text style={{marginVertical:15, color:color.black}}>View all 10 comments </Text>
        </View>
      </View>
        <View style={{alignItems:'center', flexDirection:'row', width:'100%', justifyContent:'space-between', paddingHorizontal:50, paddingVertical:15}}>
          <View>
            <Text style={{fontWeight:'500',color:color.black}}>My Visibility</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../../../assets/images/WeeglooLogo.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
            <Text style={{fontWeight:'300', color:color.black}}>Public</Text>
          </View>
        </View>
    </ScrollView>
  )
}

export default LiveExperence