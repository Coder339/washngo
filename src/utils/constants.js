import { Dimensions } from 'react-native'

export const APP_IMAGES = {
    backgroundImage: require('../assets/images/backgroundImage.png'),
    welcomeBackground: require('../assets/images/welcomeBackground.png'),
    logo: require('../assets/images/logo.png'),
    checked: require('../assets/images/select.png'),
    signupBubble: require('../assets/images/signupBubble.png'),
    signinBubble: require('../assets/images/signinBubble.png'),
}

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;