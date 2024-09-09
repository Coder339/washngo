import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/auth/Splash';
import Home from '../screens/app/Home';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Welcome from '../screens/auth/Welcome';


const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName={'Welcome'}
            screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default function RootStackScreen() {

    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="App"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Auth"
                component={AuthStack}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}