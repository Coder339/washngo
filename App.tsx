import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
	StatusBar,
	StyleSheet,
	useColorScheme,
	View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootStackScreen from './src/navigations/routes';


function App(): React.JSX.Element {

	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<StatusBar
				barStyle={'dark-content'}
				backgroundColor={'transparent'}
				translucent={true}
			/>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<NavigationContainer>
					<RootStackScreen />
				</NavigationContainer>
			</GestureHandlerRootView>
		</View>
	);
}

const styles = StyleSheet.create({

});

export default App;
