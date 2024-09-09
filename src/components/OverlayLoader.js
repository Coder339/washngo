import React from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { colors } from '../styles/colors';


const OverlayLoader = (props) => {
    return (
        <Modal
            transparent={true}
            visible={props.visible}
            animationType="none">
            <View style={styles.loaderContainer}>
                <ActivityIndicator
                    size={'large'}
                    color={'#fff'}
                />

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#rgba(0,0,0,0.2)',
    },
})

export default OverlayLoader;