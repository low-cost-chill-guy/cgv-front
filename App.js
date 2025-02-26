import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import LoginScreen from './screens/LoginScreen';
import MyPageScreen from './screens/MyPageScreen'
import MyTicket from './screens/MyTicket'
import RTMPPlayerScreen from './screens/RTMPPlayerScreen';
import HomeScreenDR from './screens/HomeScreenDR';
import NotFoundScreen from './screens/NotFoundScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='MainDR'>
                    <Stack.Screen
                        name="Main"
                        component={HomeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="MainDR"
                        component={HomeScreenDR}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="NotFound"
                        component={NotFoundScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Menu"
                        component={MenuScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="MyPage"
                        component={MyPageScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="MyTicket"
                        component={MyTicket}
                        options={{
                            headerShown: false
                        }} />
                    <Stack.Screen
                        name="StreamPlayer"
                        component={RTMPPlayerScreen}
                        options={{
                            headerShown: false, 
                            orientation: 'landscape',
                            gestureEnabled: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;