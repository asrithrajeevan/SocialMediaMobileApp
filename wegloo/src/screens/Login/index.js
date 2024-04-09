import React, { useContext, useEffect, useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
import { useNavigation } from "@react-navigation/native";
import Snackbar from "react-native-snackbar";
import color from "../../components/common/colors";
// import firestore  from "@react-native-firebase/firestore"; // make it sure importing firestore gitven like this.
// import auth from '@react-native-firebase/auth';
import { useDimentionsContext } from "../../context";
import { EmailValidation, areAllAlphabets, validateInput } from "../../components/common/validations";
// import { useDispatch } from "react-redux";
// import { login } from "../../storage/action";
import CheckBox from 'react-native-check-box'

const Login = () => {
    const dimensions = useDimentionsContext()
    // console.log('login ==>> height :',dimensions.getHeight, 'width : ',dimensions.getWidth);
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page

    const [userEmail, handleEmail] = useState('')
    const [password, handlePassword] = useState('')
    const navigation = useNavigation(false)
    const [rememberMe, setRememberMe] = useState('')
    const [validation, setValidation] = useState({
        email : '',
        password : ''
    })

    // const dispatch = useDispatch()  // for redux activity.

    // The below code looks, does the user register previously..?
    function onAuthStateChanged(user) {
        // console.warn(user);
    }
    // useEffect(()=>{
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged); // onAuthStateChanged looks, If the user already registered or not using the devices.
    //     return subscriber;
    // })

    const handleGotoSignUp = () => {
        navigation.navigate('Signup')
    }

    const handleButtonLogin = async () => {
        // if(userEmail.trim() == '' || password.trim()==''){
        //     if(!userEmail.trim()){
        //         setValidation(prevState => ({
        //             ...prevState,
        //             email: 'This field is required'
        //         }));
        //     }
        //     if(!password.trim()){
        //         setValidation(prevState => ({
        //             ...prevState,
        //             password: 'This field is required'
        //         }));
        //     }
        // }else{
        //     if(validateInput(userEmail.trim()) !== 'invalid'){
        //         console.log('Inputed value---->',validateInput(userEmail.trim()));
        //         if(EmailValidation(userEmail.trim())){
        //             // we should check if the user is registerd in our firestore DB
        //             // await firestore().collection('Users')
        //             // .where('email','==',userEmail.trim())  // we checking if the user entered username and filestore user name is existing using '==' operator. 
        //             // .where('password', '==', password.trim()).get().then(async snapshot => { // We using the await into this snapshot so we should use the async.
        //                 // if(snapshot.empty){ // We can check if there is any value is existing or not using 'empty'.
        //                     // if the account is empty 'if(true)' there is no other account exist.
        //                     // Snackbar.show({
        //                     //     text: 'This user is not registered with us, try creating a new account',
        //                     //     backgroundColor : color.red,
        //                     //     duration: Snackbar.LENGTH_LONG,
        //                     // });
        //                 // }else{
        //                     // Acessing datas from firestore
        //                     // snapshot.docs[0].id
        //                     // snapshot.forEach(documentSnapshot => {
        //                         // const resData = documentSnapshot.data()
        //                         // console.warn('documentSnapshot',documentSnapshot.id);
        //                         // console.warn(resData);
        //                         // if(password.trim() === resData.password && userEmail.trim() === resData.email){
        //                         //     Snackbar.show({
        //                         //         text: 'Loging successfull',
        //                         //         backgroundColor : color.primaryGreen,
        //                         //         duration: Snackbar.LENGTH_LONG,
        //                         //     });
        //             //                 dispatch(
        //             //                     login({
        //             //                         userId : documentSnapshot.id, // for getting the id of user collection in firstor
        //             //                         firstName:resData.firstName, 
        //             //                         lastName:resData.lastName, 
        //             //                         mobilenumber:resData.mobilenumber, 
        //             //                         email:resData.email, 
        //             //                         profileImage:resData.profileImage
        //             //                     }))
        //             //                 navigation.navigate('AppDrawer')
        //             //             }else{
        //             //                 Snackbar.show({
        //             //                     text: 'Incorrect email or password plese try again',
        //             //                     backgroundColor : color.red,
        //             //                     duration: Snackbar.LENGTH_LONG,
        //             //                 });
        //             //             }
        //             //         })
        //             //     }
        //             // }).catch(err=>console.warn(err))
        //             Alert.alert('Success')
        //         }else{

        //         }
            
        //     }else{
        //         if(areAllAlphabets(userEmail.trim())){
        //             setValidation(prevState => ({
        //                 ...prevState,
        //                 email: 'Invalid username format.'
        //             }));
        //         }else if(userEmail.includes('@') || userEmail.includes('.') || userEmail.includes('com')){
        //             setValidation(prevState => ({
        //                 ...prevState,
        //                 email: 'Invalid email format.'
        //             }));
        //         }else{
        //             setValidation(prevState => ({
        //                 ...prevState,
        //                 email: 'Invalid phone number format.'
        //             }));                
        //         }
        //     }
        // }
        navigation.navigate('FooterTabs')
    }

    const LogInWithPhone = () => {
        navigation.navigate('LogInWithPhone')
    }

    const LogInWithGoogle = () => {
        navigation.navigate('LogInWithGoogle')
    }

    return(
        <SafeAreaView style={responsiveStyle.container}>
            <ScrollView style={responsiveStyle.ScrollView} showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:'row', alignItems:'baseline', justifyContent:'center', paddingBottom:20}}>
                    <Image
                        source={require('../../assets/images/WeeglooLogo.png')}
                        style={responsiveStyle.WeeglooLogo}
                    />
                    <Text style={{fontSize:20, marginLeft:-10, color:color.black}}>Wegloo</Text>
                </View>
            
                <View style={{borderBottomWidth:0.17, borderBottomColor:'#D3D3D3', marginBottom:25}}>
                    <Text style={responsiveStyle.loginText}>Login</Text>
                </View>
                
                <CustomeTextInput
                    nullFields = {validation.email}
                    type = 'email' 
                    placeholder = {'Email, username, or phone number'} 
                    handleText={text => {
                        setValidation(prevState=>({
                            ...prevState,
                            email : false
                        }))
                        handleEmail(text)
                    }}
                />

                <CustomeTextInput
                    nullFields = {validation.password}
                    type = 'password'
                    placeholder = {'Password'}
                    handleText={text => {
                        setValidation(prevState=>({
                            ...prevState,
                            password : false
                        }))
                        handlePassword(text)
                    }}
                />
                <View style={responsiveStyle.checkboxContainer}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <CheckBox
                            onClick={()=>setRememberMe(!rememberMe)}
                            style={responsiveStyle.checkbox}
                            isChecked={rememberMe}
                            />
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:14, marginLeft:10,color:rememberMe? '#000':'#777E90'}}>Remember Me</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={{textAlign:'center',color:color.secondaryMajantha}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <CostomeBotton
                    type = 'primary'
                    handleButtonPress={handleButtonLogin} 
                    buttonText={'Login'}
                />
                <View style={responsiveStyle.GoToSignIn}>
                    <Text style={{color:color.black}}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={handleGotoSignUp}>
                        <Text style={responsiveStyle.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Login