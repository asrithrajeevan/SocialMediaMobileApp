import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import MyCarousel from '../carousel'
import color from '../../../components/common/colors'

const Connections = ()=> {
    const [getData, setData] = useState('')

  const discover = [
    {
      id:0,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/a51a/a24e/71564cb9618f1d22c88465af3f02ec51?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VSb-NoFZPr2zrbxuCztdcyXVJOiw9FvN1WSZDWWj2D9oiXQ3~6eEVmqM-czqCM8ttiGhwDVgYuE15r1132Xwyahjcm5-t2JHqzMBW09oZsOoKszbtl~DZStCpQHi2beFVuqR163Q3Rzu7vufv2EZYcoGMTx8Wmz8PtQZnCvNYePRCD2MtpEDb9-9~2myliBkmTXMs2U0Np3FxBSpDP6WX0Hb2PSTtJPsX-iqEiyrBd1YVxJYcDAg2TuNyynEoMD1D-qwMp-IzrySX5l7EPq1WmrH7K0YvjuTXBzhAVhOEF6JWiC32cxYoc2nYq1CTh7ybUPrXc29TrCSDJZhZyaLMQ__'
    },
    {
      id:1,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/4510/eb47/4179bde61b2ba9b0c2ad0874c8cfa8ce?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dk4y3-EHSSRL5bNXnHVKPnnhnSObSskaietUcElB2N5WQ~DAERK9oPqewARTOxoDZkBgricvDKI4VY3TVvrqO3m0mnXsrSzbxhry3LU1mguFTAZ8YWKmDVNH73gD-sChbs3vYTfzn0P~rS3Pskvr451qxPdbRN4eHJra7MrgIN-vQRx9srAeZCcMushG14BidV3ik9nVSppLFTFWLIEl8eWe-7oKGx9-qJ~kPk0FiPHipBzXEjIxeApzwOZVwq-OGYHT79YQSMbKqjHx7NOaxZfeaCMFgtZ8lj4JFm-o-Dvb3fA1nv0RFWTazsqql2krN409XZOJ0fxCxTbJNMlzlQ__'
    },
    {
      id:2,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/1d87/be99/b39541b6098b71f7017385bb4aa2356c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msUSR0CWWK0ZrqU3fI8-R~hNfHXmzQ8-H0Jj7a6~5djY3xGzEQQHKMuE1RKIQFm6NQx0vYMjxHGirqeaEYC1b7GQmXJTYkF5oS5euxAYKv6U9vEpLcW-IGlq0GNSlDnrRqkr3HNxV5FXCK95-vJjeJGASfE17CV-N0xUbpQ2LcAbH7OS1oazD09MGU11fsmgAlPOi5Bz03v3HLuIuhtVjIi6w5yhFDXWCeLJN~rZxjwyvpt0Z9lT4AuJ1DItEOkBhZb3f51CO~4cwIup1b7MzSjHHJtxWIRNpW06SaGc6Fx7fS~JQZNv4Nfq2sSHFZvH8L7NoYDbcnABjAGBLrF~gQ__'
    },
    {
      id:3,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/e60e/1399/adf4638b90b3e6941a145053a08fe22e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMqn1swQ9G5EjuoEEJGP49lsyHTpFwZhab0aJ~pC96INyChOyFW1LTYp4lTRWbkoaavwWcOSGCxKxq6~qx4okxX0qsJ2W4gqjlfaMyPLMmZZBBNnm2dpCcb67BMWbUf5RNpv3o330m~1ygvwgBs9A7DVxSPAExgoh1ycC2ECSW6xJOH19sKfXs2B~whBJ1VCyYYx2tUPYomBF9UvmV4JKfEqPRhfHervwtgN26jyd3TT22TFYQUT~4hi2WbgjbXZb-j5KgaC7bjSLvGJdEO-qdqGL2eZFeMGdr1WMCiArPpiZe4CDr-QQUcMA~YllH3PoItqra3L-Ay-gaXrKoMRaQ__'
    },
    {
      id:4,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/63a4/d8a1/4a918acd841e0dda15727f200b9c3453?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ST2DzEUB-5H3JgS2NIbsD5qNYhzSefRZ94yR4guOQaBc3~w3e9~BM~RJX84UmaPEFyvbBho2yBb95uhBiwxZ5rZmcz-TKgGNzBKxciqHkJZPC3f4ZPd-RgeYraljV7d9nzMSCbmP~NfAWEpf286BwEjWGAKCwJQUpn~Uyp0OiaeUnouUDmriFOKstAXtBVgxOiguXUiVmNqBIpZLZJ~eE6rLX6qw4b5VU69Pf7c~z0tWW3yZuW4L8obr~2a8tNju2wOsv1VkY4lwBG1oYS1K6xPSAjs7xAr-RoyFtlHAmqusBST6X1yxb3ef6SsX98b-C0iv9a6omPeaEzUbw~TNHA__'
    },
    {
      id:5,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/2fd3/37ce/0514fcbaca7173cf1c82c4bc815257b7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYZ35HPK8vyJg5KFT-eRA~HTsVdhAKXXhFzDuEeDJATvcnWUqLo44j0bShlcrbJWr~OfJRbJ0GpExrXNIarwSHatE88sb9YUA7Rkr~GRfiPpZ7uwnG71oPnKcvBaydI04crFdahTCJdHg0FS2NHui09fDwS1X~DBfDxRbdw6bnl1WxXcE7Rnx4TawEasMRGuARCwc6YkW4dUStg2rkghwn7sbYwbzcHmjDdObZDL1csLlt57nZ-Pr7E9o489~xvi4F5PXDZRIDGZhUFXJGpbzLaHY3YUBuy7Bos-vRkwh1jNcdDH0PuDG5Numq7We8PrXPx6Cd0jbVShjL8mGSzagg__'
    },
    {
      id:6,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/5dbf/de01/3acdf63212f5e93c2a31f8c52e53ebc0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RoYNfE6jmQEhiW3de0mfmsexSWPe5vmJ6wjpIkrZYJNryXL0dkIAcCV3njf~O2VX9TZaeTtYEBi03oYdO-j96WdQEd9jLb-zzEPCeO7ARl8QNoS73ETXAVLU3kS6akaTd8IGXezIcfzasImoxJT4fffQdHbzpl4pg8TbXjrZohBTnMMy~Z7TSlOZlIMa0Wi4~33gAW3TUQflM119Y8zfjtbWleu6CQQGNlk2uKRQSZ6nvUz4htTH2X-90C5I10DxatKWzCltrqk67~qYVkDWNdK8X6VMsROJr6IwP7exu1eTyNM0Z1ofDPbPU1zmCQGz08gQp83xhs8cvpzGAt99fQ__'
    },
    {
      id:7,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/2fd3/37ce/0514fcbaca7173cf1c82c4bc815257b7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYZ35HPK8vyJg5KFT-eRA~HTsVdhAKXXhFzDuEeDJATvcnWUqLo44j0bShlcrbJWr~OfJRbJ0GpExrXNIarwSHatE88sb9YUA7Rkr~GRfiPpZ7uwnG71oPnKcvBaydI04crFdahTCJdHg0FS2NHui09fDwS1X~DBfDxRbdw6bnl1WxXcE7Rnx4TawEasMRGuARCwc6YkW4dUStg2rkghwn7sbYwbzcHmjDdObZDL1csLlt57nZ-Pr7E9o489~xvi4F5PXDZRIDGZhUFXJGpbzLaHY3YUBuy7Bos-vRkwh1jNcdDH0PuDG5Numq7We8PrXPx6Cd0jbVShjL8mGSzagg__'
    },
    {
      id:8,
      userName : '@samanthastone',
      image : 'https://s3-alpha-sig.figma.com/img/0048/1906/13a2499e33b82ba1cb256ebd6933b8b2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=krJQqpn6h846InAd632sJiXTyjiPDYy4XjQqwvHpL3KxaxM3x8wXvZViaikFvDO9LOlcRirJaoZgsCTDJwRFPwFvgh4v3K2r7~4jqg9hMTbZYTjhyAwLhIRbmTU0pAyoaxUddNBmXMI5ep9OSOvVHsv7hGoT5kgoH6~2KgbI59qeXlVkbUQxtp2y0LbjjXM6wsL~Sw1WlMOrr-JPwBxFz6jq59PKkDyeq75U3pHnnQeI2sG6Zn9WQib9c~a8PVKK8Nz8cF782oLoi85HzwcOLpA1gk8QgXEHQ7SmyEc8fVUuNYWdOUqX3p58P6YyupSyio~R3Fqx8v1SXwHfiGf1OQ__'
    }
  ]
  console.log(getData);
  const showDetails = ({item, index}) =>{
    setData(item)
  }
  return (
    <View style={{backgroundColor:color.white,flex:1}}>
      <MyCarousel showDetails={showDetails} entries={discover} />
      <View style={{alignItems:'center', flexDirection:'row', width:'100%', justifyContent:'space-between', paddingHorizontal:50, paddingVertical:15}}>
        <View>
          <Text style={{fontWeight:'500',color:color.black}}>My Visibility</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../../assets/images/WeeglooLogo.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
          <Text style={{fontWeight:'300', color:color.black}}>Public</Text>
        </View>
      </View>
    </View>
  )
}

export default Connections