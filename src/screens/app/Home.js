import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fonts } from '../../styles/fonts'
import AppButton from '../../components/AppButton'
import { APP_IMAGES } from '../../utils/constants'
import { scale, verticalScale } from '../../styles/metrics'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home(props) {

    const [userData, setUserData] = useState(null)


    const getUserData = async () => {
        const data = await AsyncStorage.getItem('USER_DATA')
        console.log(data);
        setUserData(JSON.parse(data))

    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: scale(20) }}>
                <Image
                    source={APP_IMAGES.logo}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
            <Text style={styles.welcome}>Welcome {userData?.name}</Text>
            <AppButton
                text='Logout'
                onPress={() => {
                    props.navigation.replace('Auth')
                    AsyncStorage.removeItem('USER_DATA')
                }}
            />
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: scale(24)
    },
    logo: {
        width: scale(233),
        height: scale(178),
        marginTop: verticalScale(60),
    },
    welcome: {
        fontFamily: fonts.boldFont,
        fontSize: scale(32),
        textAlign: 'center'
    },
})