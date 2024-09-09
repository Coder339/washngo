import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ScrollContainer from '../../components/ScrollContainer'
import { APP_IMAGES, regEmail, SCREEN_WIDTH } from '../../utils/constants'
import { scale, verticalScale } from '../../styles/metrics'
import { fonts } from '../../styles/fonts'
import { colors } from '../../styles/colors'
import EmailSvg from '../../assets/svgs/EmailSvg'
import UserSvg from '../../assets/svgs/UserSvg'
import EyeSvg from '../../assets/svgs/EyeSvg'
import PasswordSvg from '../../assets/svgs/PasswordSvg'
import AppButton from '../../components/AppButton'
import SignupBubbleSvg from '../../assets/svgs/SignupBubbleSvg'
import { ToastMessage } from '../../components/ToastMessage'
import OverlayLoader from '../../components/OverlayLoader'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Register(props) {

    const [hidden, setHidden] = useState(true)
    const [agreed, setAgreed] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)

    const getName = (text) => {
        setName(text)
    }

    const onBlurName = () => {
        const temp = name
        setName(temp.trim())
    }

    const getPhone = (text) => {
        setPhone(text)
    }

    const onBlurPhone = () => {
        const temp = phone
        setPhone(temp.trim())
    }

    const getPassword = (text) => {
        setPassword(text)
    }

    const onBlurPassword = () => {
        const temp = password
        setPassword(temp.trim())
    }

    const submit = async () => {

        if (name === '') {
            ToastMessage('Please enter your name');
            return;
        }
        else if (phone === '') {
            ToastMessage('Please enter your phone number')
            return
        }
        else if (phone.length < 6 || phone.length > 14) {
            ToastMessage('The phone must be between 6 and 14 digits.');
            return
        }
        else if (password === '') {
            ToastMessage('Please enter your password')
            return
        }
        else if (password.length < 6) {
            ToastMessage('Password length must be atleast 6');
            return;
        }

        if (!agreed) {
            ToastMessage('Please accept terms & conditions before proceeding')
            return
        }

        let data = {
            name: name,
            phone: phone, // key should be email if input is email in design
            password: password,
        }

        console.log('data', data);


        headers = {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        }

        let params = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)

        }

        setLoader(true)
        try {
            const response = await fetch(`https://tor.appdevelopers.mobi/api/register`, params).then(res => res.json())
            console.log('response', response);
            setLoader(false)
            if (response?.status) {
                AsyncStorage.setItem('USER_DATA', JSON.stringify(response?.data))
                props.navigation.replace('App')
                ToastMessage(response?.message)
                return
            }
            else {
                ToastMessage(response?.error?.phone[0])
            }


        } catch (error) {
            console.log('Error while register !', error);
            setLoader(false)

        }

    }

    return (
        <>
            {loader && <OverlayLoader />}
            <ScrollContainer scrollContainerRequired={true}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={APP_IMAGES.logo}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.signinHeader}>Sign Up</Text>
                    <Text style={styles.welcomeMsg}>Fill in the below form and add life to your car!</Text>
                    <View style={styles.inputsContainer}>
                        <Text style={styles.label}>Name</Text>
                        <View style={styles.inputBox}>
                            <UserSvg />
                            <TextInput
                                placeholder='Enter your name'
                                placeholderTextColor={colors.gray2}
                                style={styles.input}
                                onChangeText={getName}
                                value={name}
                                onBlur={onBlurName}
                            />
                        </View>
                        <Text style={{ ...styles.label, marginTop: scale(18) }}>Phone Number</Text>
                        <View style={styles.inputBox}>
                            <EmailSvg />
                            <TextInput
                                placeholder='Enter phone number'
                                placeholderTextColor={colors.gray2}
                                style={styles.input}
                                keyboardType='numeric'
                                onChangeText={getPhone}
                                value={phone}
                                onBlur={onBlurPhone}
                            />
                        </View>
                        <Text style={{ ...styles.label, marginTop: scale(18) }}>Password</Text>
                        <View style={styles.inputBox}>
                            <PasswordSvg />
                            <TextInput
                                placeholder='password'
                                placeholderTextColor={colors.gray2}
                                style={styles.input}
                                secureTextEntry={hidden}
                                onChangeText={getPassword}
                                value={password}
                                onBlur={onBlurPassword}
                            />
                            <Pressable
                                onPress={() => setHidden(!hidden)}
                                style={{ marginHorizontal: scale(8) }}
                            >
                                <EyeSvg />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.agreeContainer}>
                        <Pressable
                            onPress={() => setAgreed(!agreed)}
                            hitSlop={10}
                        >
                            {agreed ?
                                <Image
                                    source={APP_IMAGES.checked}
                                    style={{ width: 20, height: 20 }}
                                    resizeMode='contain'
                                />
                                :
                                <View style={styles.unchecked} />
                            }
                        </Pressable>
                        <Text style={styles.agreeTerms}>Agree with <Text style={styles.terms}>Terms & Conditions </Text></Text>
                    </View>
                    <AppButton
                        text='Sign Up'
                        onPress={submit}
                        style={{ marginHorizontal: 18, }}
                    />
                    <View style={styles.signInContainer}>
                        <Text style={{
                            fontFamily: fonts.regularFont,
                            fontSize: scale(16),
                            color: 'gray',
                        }}>{'Already have an account?'}</Text>
                        <Pressable onPress={() => {
                            props.navigation.navigate('Login')
                        }}>
                            <Text style={{
                                fontFamily: fonts.semiBoldFont,
                                fontSize: scale(16),
                                color: '#000',
                                textDecorationLine: 'underline'
                            }}>{'  Sign In'}</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.footerLabel}>By login or sign up, you agree to our terms of use and privacy policy</Text>
                </View>
            </ScrollContainer>
            <View style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                zIndex: -1
            }}>
                <Image
                    source={APP_IMAGES.signupBubble}
                    style={{ width: scale(260), height: scale(190) }}
                    resizeMode='contain'
                />
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    logo: {
        width: scale(233),
        height: scale(178),
        marginTop: verticalScale(60)
    },
    container: {
        marginHorizontal: scale(24),
        marginTop: scale(20)
    },
    welcomeMsg: {
        fontFamily: fonts.semiBoldFont,
        color: 'gray',
        fontSize: scale(16),
        marginTop: 8,
        width: scale(294)
    },
    signinHeader: {
        fontFamily: fonts.boldFont,
        fontSize: scale(32),
        color: '#000'
    },
    inputsContainer: {
        marginTop: scale(24)
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: scale(10),
        borderColor: '#000',
        alignItems: 'center',
        paddingHorizontal: scale(10),
        flexDirection: 'row',
        marginTop: scale(10)
    },
    input: {
        paddingVertical: scale(16),
        color: '#000',
        fontFamily: fonts.italicFont,
        fontSize: scale(16),
        marginStart: scale(8),
        flex: 1
        // backgroundColor: 'red'
    },
    label: {
        fontFamily: fonts.semiBoldFont,
        fontSize: 14,
        color: '#000'
    },
    unchecked: {
        borderWidth: 1,
        width: scale(20),
        height: scale(20),
        borderColor: '#000',
        borderRadius: scale(4),
    },
    agreeContainer: {
        marginVertical: scale(24),
        flexDirection: 'row'
    },
    agreeTerms: {
        fontFamily: fonts.semiBoldFont,
        fontSize: scale(16),
        marginStart: scale(16)
    },
    terms: {
        textDecorationLine: 'underline',
        color: colors.gray1,
        marginStart: scale(14)
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: verticalScale(24)
    },
    footerLabel: {
        color: colors.gray2,
        fontSize: scale(14),
        fontFamily: fonts.regularFont,
        textAlign: 'center', marginBottom: scale(40)
    }

})