import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="chevron-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>로그인</Text>
                <TouchableOpacity>
                    <Icon name="menu" size={30} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/cgv-logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.loginFields}>
                <View style={styles.inputField}>
                    <Icon name="account-outline" size={24} color="#888" />
                    <Text style={styles.inputText}>CJ ONE 통합 아이디 6~12자</Text>
                </View>
                <View style={styles.inputField}>
                    <Icon name="lock-outline" size={24} color="#888" />
                    <Text style={styles.inputText}>영문+숫자+특수문자 6~12자</Text>
                </View>
                <View style={styles.autoLoginContainer}>
                    <Icon name="check-circle" size={24} color="#FF4B4B" />
                    <Text style={styles.autoLoginText}>자동로그인</Text>
                </View>
            </View>

            <LinearGradient
                colors={['#FF4B4B', '#FF8E4B']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.loginButton}
            >
                <Text style={styles.loginButtonText}>로그인</Text>
            </LinearGradient>

            <View style={styles.optionsContainer}>
                <Text style={styles.optionText}>아이디찾기</Text>
                <Text style={styles.optionDivider}>·</Text>
                <Text style={styles.optionText}>비밀번호찾기</Text>
                <Text style={styles.optionDivider}>·</Text>
                <Text style={styles.optionText}>회원가입</Text>
            </View>

            <View style={styles.mobileLoginContainer}>
                <Icon name="cellphone" size={20} color="#888" />
                <Text style={styles.mobileLoginText}>모바일간편로그인</Text>
            </View>
            <Text style={styles.mobileLoginSubtext}>
                휴대폰간편로그인/간편결제/비회원예매서비스광고
            </Text>

            <View style={styles.socialLoginContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Icon name="account-multiple-outline" size={24} color="#000" />
                    <Text style={styles.socialButtonText}>비회원 예매 및 예매확인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={[styles.socialButtonText, styles.naverText]}>N</Text>
                    <Text style={styles.socialButtonText}>Naver로 로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="apple" size={24} color="#000" />
                    <Text style={styles.socialButtonText}>Apple로 로그인</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 56,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 100,  
        height: 100,  
    },
    loginFields: {
        paddingHorizontal: 20,
    },
    inputField: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    inputText: {
        marginLeft: 10,
        color: '#888',
    },
    autoLoginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    autoLoginText: {
        marginLeft: 8,
        color: '#333',
    },
    loginButton: {
        marginHorizontal: 20,
        marginTop: 20,
        padding: 15,
        borderRadius: 30,
    },
    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    optionText: {
        color: '#666',
        marginHorizontal: 8,
    },
    optionDivider: {
        color: '#666',
    },
    mobileLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    mobileLoginText: {
        marginLeft: 8,
        color: '#666',
    },
    mobileLoginSubtext: {
        textAlign: 'center',
        color: '#888',
        fontSize: 12,
        marginTop: 5,
    },
    socialLoginContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        marginBottom: 10,
    },
    socialButtonText: {
        marginLeft: 10,
        color: '#333',
    },
    naverText: {
        color: '#1EC800',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 0,
    },
});

export default LoginScreen;