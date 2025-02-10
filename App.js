import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
// import EventScreen from './screens/EventScreen';
// import FastOrderScreen from './screens/FastOrderScreen';
// import GiftShopScreen from './screens/GiftShopScreen';
// import CGVScreen from './screens/CGVScreen';
import MenuScreen from './screens/MenuScreen';

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
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;