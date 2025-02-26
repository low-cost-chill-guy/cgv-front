import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Animated,
    Easing,
} from 'react-native';

const NotFoundScreen = ({ navigation }) => {
    // 로딩 애니메이션 값
    const loadingAnimation = useRef(new Animated.Value(0)).current;
    const rotateAnimation = useRef(new Animated.Value(0)).current;
    
    // 애니메이션 설정
    useEffect(() => {
        // 로딩 점 애니메이션
        Animated.loop(
            Animated.sequence([
                Animated.timing(loadingAnimation, {
                    toValue: 1,
                    duration: 1200,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(loadingAnimation, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ])
        ).start();

        return () => {
            loadingAnimation.stopAnimation();
            rotateAnimation.stopAnimation();
        };
    }, []);


    // 로딩 점 위치 계산
    const loadingDot1Opacity = loadingAnimation.interpolate({
        inputRange: [0, 0.3, 0.6, 1],
        outputRange: [0.3, 1, 0.3, 0.3],
    });

    const loadingDot2Opacity = loadingAnimation.interpolate({
        inputRange: [0, 0.3, 0.6, 1],
        outputRange: [0.3, 0.3, 1, 0.3],
    });

    const loadingDot3Opacity = loadingAnimation.interpolate({
        inputRange: [0, 0.3, 0.6, 1],
        outputRange: [0.3, 0.3, 0.3, 1],
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                    <Image
                        source={require('../assets/error-icon.png')}
                        style={styles.loadingIcon}
                        resizeMode="contain"
                    />

                <Text style={styles.errorCode}>404</Text>
                <Text style={styles.errorTitle}>페이지를 찾을 수 없습니다</Text>
                <Text style={styles.errorDescription}>
                    요청하신 페이지가 존재하지 않거나 이동되었습니다.
                    영화 정보를 확인하려면 홈 화면으로 이동해 주세요.
                </Text>
                
                <View style={styles.loadingDotsContainer}>
                    <Animated.View style={[styles.loadingDot, {opacity: loadingDot1Opacity}]} />
                    <Animated.View style={[styles.loadingDot, {opacity: loadingDot2Opacity}]} />
                    <Animated.View style={[styles.loadingDot, {opacity: loadingDot3Opacity}]} />
                </View>

                <TouchableOpacity 
                    style={styles.homeButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.homeButtonText}>홈으로 돌아가기</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.refreshButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.refreshButtonText}>이전 화면으로</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingIconContainer: {
        width: 120,
        height: 120,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingIcon: {
        width: 300,
        height: 300,
        marginBottom: -10
    },
    errorCode: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#FF4B4B',
        marginBottom: 10,
    },
    errorTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
    },
    errorDescription: {
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 24,
    },
    loadingDotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginBottom: 30,
    },
    loadingDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#FF4B4B',
        marginHorizontal: 8,
    },
    homeButton: {
        backgroundColor: '#FF4B4B',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 15,
        width: '80%',
        alignItems: 'center',
    },
    homeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    refreshButton: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#666',
        width: '80%',
        alignItems: 'center',
    },
    refreshButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default NotFoundScreen;