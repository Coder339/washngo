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
import GoogleIconSvg from '../../assets/svgs/GoogleIconSvg'
import AppleIconSvg from '../../assets/svgs/AppleIconSvg'
import { ToastMessage } from '../../components/ToastMessage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OverlayLoader from '../../components/OverlayLoader'

export default function Login(props) {

    const [hidden, setHidden] = useState(true)
    const [agreed, setAgreed] = useState(false)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)

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
        if (phone === '') {
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

        let data = {
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
            const response = await fetch(`https://tor.appdevelopers.mobi/api/login`, params).then(res => res.json())
            console.log('response', response);
            setLoader(false)
            if (response?.status) {
                AsyncStorage.setItem('USER_DATA', JSON.stringify(response?.data))
                props.navigation.replace('App')
            }
            ToastMessage(response?.message)

        } catch (error) {
            console.log('Error while login !', error);

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
                    <Text style={styles.signinHeader}>Sign In</Text>
                    <Text style={styles.welcomeMsg}>Hi ! Welcome back, you have been missed </Text>
                    <View style={styles.inputsContainer}>
                        <Text style={{ ...styles.label, marginTop: scale(18) }}>Phone number</Text>
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
                    <View style={{
                        alignItems: 'flex-end',
                        marginBottom: scale(24),
                        marginTop: scale(8)
                    }}>
                        <Pressable>
                            <Text style={styles.forgotPassword}>Forgot password ?</Text>
                        </Pressable>
                    </View>
                    <AppButton
                        text='Sign In'
                        onPress={submit}
                        style={{ marginHorizontal: 18, }}
                    />
                    <View style={styles.sepratorContainer}>
                        <View style={styles.seprator} />
                        <Text style={styles.sepratorLabel}>or</Text>
                        <View style={styles.seprator} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Pressable style={{ marginEnd: scale(10) }}>
                            <GoogleIconSvg />
                        </Pressable>
                        <Pressable style={{ marginStart: scale(10) }}>
                            <AppleIconSvg />
                        </Pressable>
                    </View>
                    <View style={styles.signInContainer}>
                        <Text style={{
                            fontFamily: fonts.regularFont,
                            fontSize: scale(16),
                            color: 'gray',
                        }}>{`Don't have an account?`}</Text>
                        <Pressable onPress={() => {
                            props.navigation.navigate('Register')
                        }}>
                            <Text style={{
                                fontFamily: fonts.semiBoldFont,
                                fontSize: scale(16),
                                color: '#000',
                                textDecorationLine: 'underline'
                            }}>{'  Sign Up'}</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.footerLabel}>By login or sign up, you agree to our terms of use and privacy policy</Text>
                </View>
            </ScrollContainer>
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: -1
            }}>
                <Image
                    source={APP_IMAGES.signinBubble}
                    style={{ width: scale(200), height: scale(140) }}
                    resizeMode='cover'
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
        width: scale(190)
    },
    signinHeader: {
        fontFamily: fonts.boldFont,
        fontSize: scale(32),
        color: '#000'
    },
    inputsContainer: {
        marginTop: scale(16)
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
    },
    seprator: {
        borderTopWidth: 1,
        borderColor: colors.primary,
        width: scale(120)
    },
    sepratorLabel: {
        fontFamily: fonts.regularFont,
        color: '#000',
        marginHorizontal: scale(12),
        fontSize: scale(16)
    },
    sepratorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: scale(24)
    },
    forgotPassword: {
        fontFamily: fonts.regularFont,
        fontSize: scale(16),
        textDecorationLine: 'underline'
    }

})