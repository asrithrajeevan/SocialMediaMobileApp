import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../../components/common/colors'
import LinearGradient from 'react-native-linear-gradient';

const ViewAll = () => {
  const connections = [
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/82d6/a1ca/82c7d4e2b9c4606051281f71f8c5a396?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YysvDjvOS604sFc86BJqAfDC1RmtXr~jfTI~yM0sXSGMyJEMPFjWhL0YgrwX5J0E3Jsd1vJFUXTIYRK0I3fe7WejPyMDE~tbFBkCQD66s42kwKatG4EV5NoGKxBejcpvlTiL~NiIwcRBswfKTPXjRsqN7jwUu1phr~hrg3Pctrt3qY0idZGYOX5Xg5zZr9xKxN1GoMDADu634ukIdXmeIILdja~n9-uHhpLuB6JzqXHHGjNPB4toUauHE~MlaUOn01x4wZvgBPmNjLzQAkob7QOD63a8x8N~RgjQqwUA6K-Q8FWoVkU9HYufOHhF4nGIjcBROec~~sh5XFWPaUmsRg__'
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/7166/2105/cb2234aebb01607e539351b8438ee385?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FfCHh8MbDwGlvFOJU89-M6XjLolZm~f8xZiTm~bVfcJixuoMx8IJGI9XEg6814z54G~s-8Z7MszmcUo87V72vy-9VQFLIFL9KDqVsZPEicEoybxeNn~rFl1Kv-Eqy3xx5oDjavfgtGMqYsdhf2zDLWkV5XvrL-XiLyBKqX5XhbBfGDRW2C~1VLYCZ40Q5r7JM3iSrf-KzvUk9hwlegH9I8SHTNmcjCeqwOx6PZBz7ozelztN6tlsVTF1~4ZhtBfkwGrw1VmX-gFNMT3mrVuCA8Lgqswgq8rr~Kq9Nhdf7KXmCp9t-326JzeRFWsjry5qgs6507jgVAGxpGUmhIFjYw__'
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/6296/c352/efd6143b9c64babd1451233d9ec17576?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3bwwt0XuFuauGXOi7pfhCz6n87Tx8smJo9TzQpcD8HYsyMHYKs22UJNJ4MfDnQ--sAU4CoiMn1St524vlKnuxdVRPaQ0BDMyyrcU7xpzxKc2RopIgjwijsewO4DgCMngoNrSuwteaIbcJLdXD58R7hnLcyDwI8VaJjQTkqrgk6NM2aKEM2kfr9I00I4CwMEd-MKq~4y72Q5oKcqtZzC7YIZw5M5BesJieI-0BdAff~BxNtRJt8--HxiTzwv9zpq9LizupnXihZ6VQP0uvUngPJ8y7wHeT5WcLOsIq0LBgKre4-dB6~wrFkY8EmBSxlPtDTqkhTfkCG7wPtqZY0zlw__'
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/07ad/181e/ab67e0d0a4c147305bfe1dd4c732d06d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCu70Wv-BQNGNBYOfygeyIIuFUU~U-D79pzePyR82d79uB13EuaaRowEVjSGviQ0cNEvFPrPb9Wnv95dfu0VgXNaTI-om0LWvq6nvrpnU9z7rhuBFjGjp5WOuvKxAoFlUXj7Gcs~S3HUqtKW4ByoUOvcdE2Vp-l6eP538XA2LOJQohTFEoQGnn27C-b~3spTWTMgmetoy-o2b1FxueWZhTTaJzLGHC5v5ESjRPIK1iY3YPlc2nfy6Tw9Z0jituTirjVvvJaxiXLitN96at-IQezObjVbYoMQbEUE1TuqnL4N4jpttkVujNiLHdES1utRLxUb8V9PiO97oh3YCJZA7w__'
    },
    {
      name : 'Samantha Stone',
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/0768/eaf8/2a73b1f61cd5b4a77d8b1583c7778c32?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSmlI2ojb2VF~HL7ne6qUbRTo7CpHNsD~LwylYtInbbzCj7xji5BJ7Ur0bshAG0Ud-knSpl4pxynnwqtX1peHJE0N-UdHyVnmvC5vdYDh5Bm3ICx5z3S75IoTdjjjhHA5IPN66OCWDkIYaGZNh6XSeOe60NFumrsjiY6aIMRtxW6lCiia3U5Oawzj2oT6UBos~SS2S~MPB7u80vtND3LswVsvELIZqIvUWH011ElYWhLOYae41R~txRzvQxjVPybA1Q~Yb3il22NY7-EIDNFPh6PKn9RmVWgmB0zKjKXzE2g4l3u6v3BqaZcuahI-9ILjd8BcjSV-yzpuJQsvQyFhA__'
    },
  ]
  return (
    <View style={{backgroundColor:color.white, flex:1, alignItems:'center'}}>
      <FlatList 
        data={connections}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={()=>{
          return(
            <View style={{
              height:179,
              width:350,
              backgroundColor:color.white,
              marginBottom:5,
              borderBottomWidth:0.5
            }}>
              <View style={{flexDirection:'row', marginEnd:-15, alignItems:'center', marginTop:5,justifyContent:'space-between'}}>
                <View style={{alignItems:'center', flexDirection:'row'}}>
                  <View>
                    <Image src={'https://s3-alpha-sig.figma.com/img/6296/c352/efd6143b9c64babd1451233d9ec17576?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3bwwt0XuFuauGXOi7pfhCz6n87Tx8smJo9TzQpcD8HYsyMHYKs22UJNJ4MfDnQ--sAU4CoiMn1St524vlKnuxdVRPaQ0BDMyyrcU7xpzxKc2RopIgjwijsewO4DgCMngoNrSuwteaIbcJLdXD58R7hnLcyDwI8VaJjQTkqrgk6NM2aKEM2kfr9I00I4CwMEd-MKq~4y72Q5oKcqtZzC7YIZw5M5BesJieI-0BdAff~BxNtRJt8--HxiTzwv9zpq9LizupnXihZ6VQP0uvUngPJ8y7wHeT5WcLOsIq0LBgKre4-dB6~wrFkY8EmBSxlPtDTqkhTfkCG7wPtqZY0zlw__'} style={{
                      height:50, 
                      width:50, 
                      borderRadius:50/2,
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
                <View style={{backgroundColor:'#EEEEFE',paddingHorizontal:17,paddingVertical:8, borderRadius:33, marginRight:15}}>
                  <Text style={{fontSize:12, color:color.grey1}}>20.5 ft</Text>
                </View>
              </View>
              <Text style={{fontSize:18, fontWeight:'600', color:color.black}}>@emmasteal <Text style={{fontSize:15, fontWeight:400, color:color.black}}>connecting with Emma, Zara & others</Text></Text>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginTop:10}}>
                <TouchableOpacity>
                  <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{height:50, width:150,borderRadius:5, justifyContent:'center', alignItems:'center'}} >
                    <Text  style={{textAlign:'center', fontSize:16, fontWeight:'500',color:'#ffff'}}>View</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={{height:50, width:150,borderRadius:5, justifyContent:'center', alignItems:'center', borderWidth:2, borderColor:color.secondaryMajantha}}>
                  <Text  style={{textAlign:'center', fontSize:16, fontWeight:'500',color:color.black}}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
        renderItem={({item})=>{
          return(
            <View style={{
                height:149,
                width:360,
                backgroundColor:color.white,
                marginBottom:5,
                borderBottomWidth:0.5,
                justifyContent:'center',
                alignItems:'center'
              }}>
              <View style={{flexDirection:'row', justifyContent:'space-around',alignItems:'center', width:'100%'}}>
                <Image src={item.image} style={{
                  height:40,
                  width:40, 
                  borderRadius:40/2, 
                  borderWidth:2, 
                  borderColor:color.white, 
                }}/>
                <Text style={{fontSize:18, fontWeight:'600', color:color.black}}>@emmasteal <Text style={{fontSize:15, fontWeight:400, color:color.black}}>is near you!</Text></Text>
                <View style={{backgroundColor:'#EEEEFE',paddingHorizontal:17,paddingVertical:8, borderRadius:33}}>
                  <Text style={{fontSize:12, color:color.grey1}}>20.5 ft</Text>
                </View>
              </View>
              <TouchableOpacity style={{marginTop:15}}>
                  <LinearGradient colors={['#6B53F6', '#5538FE']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{height:50, width:335,borderRadius:5, justifyContent:'center', alignItems:'center'}} >
                    <Text  style={{textAlign:'center', fontSize:16, fontWeight:'500',color:'#ffff'}}>Connect</Text>
                  </LinearGradient>
                </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}
export default ViewAll