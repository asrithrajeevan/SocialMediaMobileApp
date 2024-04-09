import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import color from '../../components/common/colors'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import CustomeTextInput from '../../components/CustomeTextInput';
import { useNavigation } from '@react-navigation/native';
import { userNameValidation } from '../../components/common/validations';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoadingSpinner from '../../components/common/spinner';

const CreateAccount =()=> {
    const navigation = useNavigation()
    const [showSpinner, setSpinner] = useState(false)
    const [getFirstName, setFirstName] = useState('')
    const [getLastName, setLastName] = useState('')
    const [getProfileName, setProfileName] = useState('')
    const [getUserName, setUserName] = useState('')
    const [validations, setvalidations] = useState({
        firstName : '',
        lastName : '',
        profileName : '',
        userName : '',
    })

    const spinner = () =>{
        setSpinner(true)
        setTimeout(() => {
            saveData()
        }, 2000);
    }
    
    const saveData = async () => {
        setSpinner(false)
        if(getFirstName.trim() !== '' && getLastName.trim() !== '' && getProfileName.trim() !== '' && getUserName.trim !== '' ){
            if(userNameValidation(getUserName)){
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
                console.log("SUCCESS");
                navigation.navigate('TermsService')
            }else{
                setvalidations(prevState => ({
                    ...prevState,
                    userName: 'Not a Valid User Name'
                }));
            }

     
        }else{
            if(!getFirstName){
                setvalidations(prevState => ({
                    ...prevState,
                    firstName: 'This field is required'
                }));
            }
            if(!getLastName){
                setvalidations(prevState => ({
                    ...prevState,
                    lastName: 'This field is required'
                }));
            }
            if(!getProfileName){
                setvalidations(prevState => ({
                    ...prevState,
                    profileName: 'This field is required'
                }));
            }
            if(!getUserName){
                setvalidations(prevState => ({
                    ...prevState,
                    userName: 'This field is required'
                }));
            }
        }          
    }

 
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:color.white}}>
        <SafeAreaView style={{ marginBottom:70}}>
            <View style={{padding:5}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:30}}>
                    <Ionicons name="chevron-back" size={26} color={color.black}/>
                </TouchableOpacity>
            </View>
            <View style={{margin:15, marginTop:35}}>
                <View>
                    <Text style={{fontWeight:'600', fontSize:22, color:color.black}}>Let’s set up your profile</Text>
                </View>
                <View style={{paddingTop:5}}>
                    <Text style={{fontWeight:'600', fontSize:14, color:color.black}}>The basics.</Text>
                </View>
                <View style={{paddingTop:40}}>
                    <Text style={{fontWeight:'500', color:color.black}}>First Name</Text>
                    <CustomeTextInput
                        validations = {validations.firstName}
                        placeholder = 'First Name'
                        type = 'name'
                        handleText={(text)=>{
                            setFirstName(text)
                            setvalidations(prevState=>({
                                ...prevState,
                                firstName : false
                            })) 
                        }}
                    />
                </View>
                <View style={{paddingTop:10}}>
                    <Text style={{fontWeight:'500', color:color.black}}>Last Name</Text>
                    <CustomeTextInput
                        validations = {validations.lastName}
                        placeholder = 'Last Name'
                        type = 'name'
                        handleText={(text)=>{
                            setLastName(text)
                            setvalidations(prevState=>({
                                ...prevState,
                                lastName : false
                            })) 
                        }}
                    />
                </View>
                <View style={{paddingTop:10}}>
                    <Text style={{fontWeight:'500', color:color.black}}>Name shown on profile</Text>
                    <CustomeTextInput
                        validations = {validations.profileName}
                        type = 'name'
                        placeholder = 'You can change this at any time in edit profile.'
                        handleText={(text)=>{
                            setProfileName(text)
                            setvalidations(prevState=>({
                                ...prevState,
                                profileName : false
                            })) 
                        }}
                    />
                </View>
                <View style={{paddingTop:10}}>
                    <Text style={{fontWeight:'500', color:color.black}}>Username</Text>
                    <CustomeTextInput
                        validations = {validations.userName}
                        type = 'email'
                        placeholder = 'Eg: @username'
                        handleText={(text)=>{
                            setUserName(text)
                            setvalidations(prevState=>({
                                ...prevState,
                                userName : false
                            }))     
                        }}
                    />
                </View>
            </View>

            <View style={{justifyContent:'center',alignItems:'center', padding:30}}>
                <TouchableOpacity onPress={spinner} style={{width:65, height:65, backgroundColor:color.white, justifyContent:'center', alignItems:'center', borderRadius:65/2, bottom:-50, position:'absolute', borderWidth:4.5, borderColor:color.white_level_3}}>
                    {showSpinner ? <View style={{position:'absolute'}}>
                    <LoadingSpinner spinnerSize={65}/>
                    </View> : null}
                    <FontAwesome5 name="angle-right" size={26} color={color.black}/>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}
export default CreateAccount