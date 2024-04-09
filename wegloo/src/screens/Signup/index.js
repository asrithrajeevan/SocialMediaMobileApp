import React, { useEffect, useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import CustomeTextInput from "../../components/CustomeTextInput";
import CostomeBotton from "../../components/CostomeBotton";
// import  firestore from "@react-native-firebase/firestore";
import Snackbar from "react-native-snackbar";
import color from "../../components/common/colors";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { EmailValidation, validatePassword} from "../../components/common/validations";
import { useDimentionsContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import CheckBox from 'react-native-check-box'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';



const Signup = () => {
    const dimensions = useDimentionsContext()
    const responsiveStyle = styles(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait)  // passing the width and height to styles page
    const [getEmail, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')
    const [getCpassword, setCpassword] = useState('')
    const navigation = useNavigation()
    const [isSelected, setSelection] = useState(false);
    const [isFaceIDSelected, setFaceIDSelection] = useState(false);
    const [validations, setvalidations] = useState({
        email : '',
        password : '',
        cpassword : '',
    })
    const [passWordValidation, setPassWordValidation] = useState({
        'Minimum 7 characters': false,
        'At least 1 upper case character': false,
        'At least 1 lower case character': false,
        'At least 1 number or symbol': false
    })
    const passwordIsAllValid = Object.values(passWordValidation).every(value => value === true);
    const validator = Object.entries(passWordValidation)
    const handlePasswordChange = (text) => {
        setPassword(text)
        console.log(text);
        setvalidations(prevState=>({
            ...prevState,
            password : false
        })) 
        setPassword(text);
        const passwordValidations = validatePassword(text);
        setPassWordValidation(passwordValidations);
    };

    const handleGoBack = () => {
        navigation.navigate('Login')
    }
    
    const handleSignup = async () => {
        // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true}); // we want to ckeck if the PlayServices is existing
        Alert.alert('Clicked handle signup')
    }

    // useEffect(()=>{
    //     GoogleSignin.configure({
    //         webClientId:'903118379962-dia4e1hqpphhjlve3dpkd7bvgvqedg81.apps.googleusercontent.com',
    //     });
    // },[])

    const handleData = async () => {
        if( getEmail.trim() !== ''
            && getPassword.trim() !== ''
            && getCpassword.trim() !== ''){
                if(EmailValidation(getEmail)){
                    if(getPassword.trim() === getCpassword.trim()){
                        if(passwordIsAllValid){
                            if(isSelected){
                                if(isFaceIDSelected){
                                    //checking if any other account is existing or not using username and email
                                    // await firestore().collection('Users')
                                    // .where('username','==',getUsername.trim())  // we checking if the user entered username and filestore user name is existing using '==' operator. 
                                    // .where('email', '==', getEmail.trim()).get().then(async snapshot => { // We using the await into this snapshot so we should use the async.
                                        // if(snapshot.empty){ // We can check if there is any value is existing or not using 'empty'.
                                            // if the account is empty 'if(true)' there is no other account exist.
                                            // const userData = {
                                            //     username : getUsername,
                                            //     email : getEmail,
                                            //     mobilenumber : getMobile,
                                            //     password : getPassword,
                                            //     cpassword : getCpassword,
                                            //     created : String(new Date()),
                                            //     updated : String(new Date()),
                                            // }
                                            // Saving data to firestore
                                            // await firestore().collection('Users').add(userData).then(resp => {  // Users is a collection name of our table, we created on firestore. And we give our response on then function. 
                                                // console.warn(resp)                                      // an object will get after saving the data
                                                // Snackbar.show({
                                                //     text: 'Successfully Registered',
                                                //     backgroundColor : color.secondaryMajantha,
                                                //     duration: Snackbar.LENGTH_LONG,
                                                // });
                                                // navigation.navigate('Home') // it will navigate the file after successfully registration.
            
                                            // }).catch(err => {                                           // We give the error in the catch function.
                                            //     console.warn(err);
                                            // })
            
                                        // }else{
                                            // usage of snap bar packages. 
                                    //         Snackbar.show({
                                    //             text: 'This email is already existing our system try another email.',
                                    //             backgroundColor : color.red,
                                    //             duration: Snackbar.LENGTH_LONG,
                                    //         });
                                    //     }
                                    // })
                                    console.log("SICCESS");
                                    navigation.navigate('FooterTabs')
    
                                }else{
                                    // isfacesellected
                                }
                            }else{
                                // issellected
                            }
                        }else{
                            // password is not valid
                        }
                    }else{
                        setvalidations(prevState => ({
                            ...prevState,
                            cpassword: 'Passwords do not match.',
                            password: 'Passwords do not match.'

                        }));
                    }                                    
                    
                }else{
                    setvalidations(prevState => ({
                        ...prevState,
                        email: 'Invalid email format.'
                    }));
                }
        }else{
            if(!getEmail){
                setvalidations(prevState => ({
                    ...prevState,
                    email: 'This field is required'
                }));
            }
            if(!getPassword){
                setvalidations(prevState => ({
                    ...prevState,
                    password: 'This field is required'
                }));
            }
            if(!getCpassword){
                setvalidations(prevState => ({
                    ...prevState,
                    cpassword: 'This field is required'
                }));
            }
        }          
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
                <View style={{borderBottomWidth:0.17, borderBottomColor:'#D3D3D3', marginBottom:15, marginHorizontal:15}}>
                    <Text style={responsiveStyle.loginText}>Sign Up</Text>
                </View>
                <View style={{paddingTop:15, paddingHorizontal:15}}>
                    <Text style={{fontWeight:'600',color:color.black}}>Email</Text>
                    <CustomeTextInput
                        validations = {validations.email}
                        type = 'email'
                        placeholder = {'Email Address'} 
                        handleText={text => {
                            setEmail(text)
                            setvalidations(prevState=>({
                                ...prevState,
                                email : false
                            }))                        
                        }
                        }
                    />
                </View>

                <View style={{paddingTop:15, paddingHorizontal:15}}>
                    <Text style={{fontWeight:'600', color:color.black}}>Password</Text>
                    <CustomeTextInput
                        validations = {validations.password}
                        type = 'password'
                        placeholder = {'Password'}
                        handleText={(text)=>handlePasswordChange(text)}
                    />
                </View>
                
                <View style={{paddingTop:15, paddingHorizontal:15}}>
                    <Text style={{fontWeight:'600', color:color.black}}>Confirm Password</Text>
                    <CustomeTextInput
                        validations = {validations.password}
                        type = 'password'
                        placeholder = {'Password'} 
                        handleText={text => {
                            setCpassword(text)
                            setvalidations(prevState=>({
                                ...prevState,
                                cpassword : false
                            })) 
                        }}
                    />  
                </View>

                {getPassword === ''? null:<View style={{marginLeft:15}}>
                    {validator.map(([key,value], index) => (
                        <View key={index} style={{flexDirection:'row',alignItems:'center'}}>
                            {value ? 
                            <AntDesign name="checkcircle" size={15} color='#1FCBAC' />
                            :
                             <AntDesign name="closecircle" size={15} color='#FD355A' />}
                            <Text style={{textAlign:'center',fontSize:13,lineHeight:20,color: value? color.placeHolderTextColor : color.black, marginLeft:5}} key={index}>{key}</Text>
                        </View>
                    ))}
                </View>}
                
                <View style={{marginTop:15}}>
                    <View style={responsiveStyle.checkboxContainer}>
                        <CheckBox
                            onClick={()=>setSelection(!isSelected)}
                            style={responsiveStyle.checkbox}
                            isChecked={isSelected}
                            // checkBoxColor = {'red'}
                            />
                        <Text style={{fontSize:14, marginLeft:10, width:300, color : isSelected? '#000':'#777E90'}}>By signing up I agree to the Terms of Service & Privacy Policy.</Text>
                    </View>

                    <View style={responsiveStyle.checkboxContainer}>
                        <CheckBox
                            onClick={()=>setFaceIDSelection(!isFaceIDSelected)}
                            style={responsiveStyle.checkbox}
                            isChecked={isFaceIDSelected}
                            />
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:14, marginLeft:10,color:isFaceIDSelected?'#000':'#777E90'}}>Enable Face ID</Text>
                            <Image source={require('../../assets/images/faceId.png')} style={{height:16, width:16, marginLeft:5}}/>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:25, marginHorizontal:15}}>
                    <CostomeBotton
                            type = 'primary'
                            handleButtonPress={handleData} 
                            buttonText={'Sign Up'}
                        />
                        <View style={responsiveStyle.GoToLogin}>
                            <Text style={{color:color.black}}>Already have an account?</Text>
                            <TouchableOpacity onPress={handleGoBack}>
                                <Text style={responsiveStyle.login}>Login</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Signup