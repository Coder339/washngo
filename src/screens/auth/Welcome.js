import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { APP_IMAGES, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants'
import { fonts } from '../../styles/fonts'
import { scale, verticalScale } from '../../styles/metrics'
import AppButton from '../../components/AppButton'

export default function Welcome(props) {
    return (
        <ImageBackground
            source={APP_IMAGES.welcomeBackground} // IMAGE QUALITY IS POOR
            imageStyle={{ width: 'auto', height: SCREEN_HEIGHT }}
            resizeMode='stretch'
            style={styles.container}
        >
            <Image
                source={APP_IMAGES.logo}
                style={styles.logo}
                resizeMode='contain'
            />
            <Text style={styles.title}>Sparkle & Shine  Transform
                Your Drive with Every Wash!</Text>
            <AppButton
                text='Let’s Start'
                onPress={() => { props.navigation.navigate('Register') }}
                style={{ marginHorizontal: 18, marginTop: verticalScale(30) }}
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
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#fff'
        // alignItems: 'center'
    },
    logo: {
        width: SCREEN_WIDTH,
        height: scale(280),
        marginTop: verticalScale(60)
    },
    title: {
        fontSize: scale(24),
        color: 'gray',
        textAlign: 'center',
        fontFamily: fonts.semiBoldFont,
        marginVertical: verticalScale(60),
        marginHorizontal: scale(20)
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: verticalScale(40)
    }
})