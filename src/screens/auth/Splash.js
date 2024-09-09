import { Image, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { APP_IMAGES, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Splash(props) {

    const insets = useSafeAreaInsets()

    const getUserData = async () => {
        const user = await AsyncStorage.getItem('USER_DATA')
        console.log(user);

        setTimeout(() => {

            if (user) {
                props.navigation.replace('App')
            } else {
                props.navigation.replace('Auth')
            }
        }, 3000);

    }

    useEffect(() => {
        getUserData()
    }, [])

    useEffect(() => {

    }, [])

    return (
        <ImageBackground
            source={APP_IMAGES.backgroundImage} // IMAGE QUALITY IS POOR
            imageStyle={{ width: 'auto', height: SCREEN_HEIGHT + (Platform.OS === 'android' ? insets.top : 0) }}
            resizeMode='stretch'
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}
        >
            <View style={{}}>
                <Image source={APP_IMAGES.logo} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})