import React from 'react'
import { Platform, } from 'react-native'


export const fonts = {
    regularFont: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins-Regular',
    lightFont: Platform.OS === 'ios' ? 'Poppins-Light' : 'Poppins-Light',
    standardFont: Platform.OS === 'ios' ? 'Poppins-Medium' : 'Poppins-Medium',
    boldFont: Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold',
    semiBoldFont: Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
    italicFont: Platform.OS === 'ios' ? 'Poppins-Italic' : 'Poppins-Italic',
    boldItalicFont: Platform.OS === 'ios' ? 'Poppins-BoldItalic' : 'Poppins-BoldItalic',
}