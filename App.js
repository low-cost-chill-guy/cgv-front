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

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Main"
                        component={HomeScreen}
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
                            headerShown: false,  // 헤더 숨기기
                            orientation: 'landscape',  // 가로 모드 설정 (선택사항)
                            gestureEnabled: false,  // 뒤로가기 제스처 비활성화 (선택사항)
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;