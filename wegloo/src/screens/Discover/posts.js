import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useDimentionsContext } from '../../context'
import styles from './style'

const Post = () => {
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
  
    const posts = [
        {
          image : 'https://s3-alpha-sig.figma.com/img/a51a/a24e/71564cb9618f1d22c88465af3f02ec51?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VSb-NoFZPr2zrbxuCztdcyXVJOiw9FvN1WSZDWWj2D9oiXQ3~6eEVmqM-czqCM8ttiGhwDVgYuE15r1132Xwyahjcm5-t2JHqzMBW09oZsOoKszbtl~DZStCpQHi2beFVuqR163Q3Rzu7vufv2EZYcoGMTx8Wmz8PtQZnCvNYePRCD2MtpEDb9-9~2myliBkmTXMs2U0Np3FxBSpDP6WX0Hb2PSTtJPsX-iqEiyrBd1YVxJYcDAg2TuNyynEoMD1D-qwMp-IzrySX5l7EPq1WmrH7K0YvjuTXBzhAVhOEF6JWiC32cxYoc2nYq1CTh7ybUPrXc29TrCSDJZhZyaLMQ__'
        },
        {
          image : 'https://s3-alpha-sig.figma.com/img/e306/c3fb/7619f8ada3284912263815a8c07f6a26?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amMqlv1zUgVUlnmfdG~puyvO3KTwP-RdNwPGXdMMAl8DF243Fmzev0sZsoRopgTx-U6WDlbaBrtVVkmm7WvcAxXZspVohlKKvUuDyyMrF-My7OZIOtzYbT~KXVmVrdbty3b0hhcjOEkY~tXMC2hHSolC7JHVMx6qXBx7mlGYJEY7tBUIdcqWZxcYMSkQ4O2a1s6u1Cd4BKwFPUtgwheoaI8JthQ14esA0PdgeMhKLkjxn-oArr-dl4L1FhJCPbBPk8A75-UEFTD7MO9JUwK27R5BLjbil0QK8En3uSrgQobVnqASjEbcBEh~KfY5TlaqY3~7p6DmEjc1sK~~SM7JNg__'
        },
        {
          image : 'https://s3-alpha-sig.figma.com/img/049e/b736/eed16c65e3ac4d28dba513a36dfff4e2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nWFnAP~qy16TS3-PTMmwagOm4ISJ7A7bO565~L~NUnR5dLM69rw8DpjRGPn0ojOom4f8uub8Haiui6A9omiRYcwoUibTS-SeFanUl0ZXykzHCycn1QRO73KvbBzWh47tzUT4UUyypGulT6SPL~Md8gPGxls86M8NdLCdg1vdHRlDX6hgATy4C2hvq5hQ-hzvg8fZRp4fn-g6wG~~XdyognAO65-MJGxrP9vkFn8OyG9a8X3Q28VJdcBjEk~ewIMx2FiMSCsSPcRE8a7Hol71TzoG9VcZMwNuyEFiFGSTBgYtOy8cJUWYb0xueDlaVZYYQGPN7ZBs1CeRZPnjIYOwFw__'
        },
        {
          image : 'https://s3-alpha-sig.figma.com/img/e60e/1399/adf4638b90b3e6941a145053a08fe22e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMqn1swQ9G5EjuoEEJGP49lsyHTpFwZhab0aJ~pC96INyChOyFW1LTYp4lTRWbkoaavwWcOSGCxKxq6~qx4okxX0qsJ2W4gqjlfaMyPLMmZZBBNnm2dpCcb67BMWbUf5RNpv3o330m~1ygvwgBs9A7DVxSPAExgoh1ycC2ECSW6xJOH19sKfXs2B~whBJ1VCyYYx2tUPYomBF9UvmV4JKfEqPRhfHervwtgN26jyd3TT22TFYQUT~4hi2WbgjbXZb-j5KgaC7bjSLvGJdEO-qdqGL2eZFeMGdr1WMCiArPpiZe4CDr-QQUcMA~YllH3PoItqra3L-Ay-gaXrKoMRaQ__'
        },
        {
          image : 'https://s3-alpha-sig.figma.com/img/f053/f694/65ad2b2f130e6c4dd51f15cd99ee67c9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKgTqAbUjh~46lRLOuQ-62GAFjCt2CjxM1TFLEwGgmOGu7scZUQLBiRpAlTj6JU0pBmpfYobj7qdDQvaE5FkevYCQiM6Y1gAgQjXzCxPb831x8O9DV22q3~Eb6PNZPZM-6QOoD8PaQBgeVD1dipb8B7qsMtHpvRyrz5CGWYW2ZnH4VKp0okV63k9NdcAOHZeimhuKV-5vhm27ij2o7aWlopjPEaZYM36G6iCyRnrizNBAEmtcZbxJALwUHa497dNVaOmvNGVjEe6rH7pxKaVrcX7B~SMS7pAUbiy6w5DPsMCPd5u37P8WVQaeqAyaMuiAeu0OfCsl-E8v5R6VMwuLA__'
        },
        {
          image : 'https://s3-alpha-sig.figma.com/img/2fd3/37ce/0514fcbaca7173cf1c82c4bc815257b7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYZ35HPK8vyJg5KFT-eRA~HTsVdhAKXXhFzDuEeDJATvcnWUqLo44j0bShlcrbJWr~OfJRbJ0GpExrXNIarwSHatE88sb9YUA7Rkr~GRfiPpZ7uwnG71oPnKcvBaydI04crFdahTCJdHg0FS2NHui09fDwS1X~DBfDxRbdw6bnl1WxXcE7Rnx4TawEasMRGuARCwc6YkW4dUStg2rkghwn7sbYwbzcHmjDdObZDL1csLlt57nZ-Pr7E9o489~xvi4F5PXDZRIDGZhUFXJGpbzLaHY3YUBuy7Bos-vRkwh1jNcdDH0PuDG5Numq7We8PrXPx6Cd0jbVShjL8mGSzagg__'
        },
        {
          image : 'https://s3-alpha-sig.figma.com/img/5dbf/de01/3acdf63212f5e93c2a31f8c52e53ebc0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RoYNfE6jmQEhiW3de0mfmsexSWPe5vmJ6wjpIkrZYJNryXL0dkIAcCV3njf~O2VX9TZaeTtYEBi03oYdO-j96WdQEd9jLb-zzEPCeO7ARl8QNoS73ETXAVLU3kS6akaTd8IGXezIcfzasImoxJT4fffQdHbzpl4pg8TbXjrZohBTnMMy~Z7TSlOZlIMa0Wi4~33gAW3TUQflM119Y8zfjtbWleu6CQQGNlk2uKRQSZ6nvUz4htTH2X-90C5I10DxatKWzCltrqk67~qYVkDWNdK8X6VMsROJr6IwP7exu1eTyNM0Z1ofDPbPU1zmCQGz08gQp83xhs8cvpzGAt99fQ__'
        },
    ]
  return (
    <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
        <FlatList 
            data={posts}
            numColumns={2}
            contentContainerStyle={{paddingBottom:250}}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>{
                return(
                    <View style={{alignItems:'center', justifyContent:'center', margin:4}}>
                        <Image src={item.image} style={{width:dimensions.windowWidth/2.1, height: dimensions.windowWidth / 2 - 10, borderRadius:10, resizeMode:'cover'}}/>
                    </View>
                )
            }}
        />
    </View>
  )
}
export default Post