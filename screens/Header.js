import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/cgv-logo.png')}
                style={styles.logo}
            />
            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <Text style={styles.headerIcon}>🎟️</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.headerIcon}>🍿</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Text style={{
                        fontSize: 20,
                        padding: 5, marginTop: 5
                    }}>☰</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabs}>
                <Text style={styles.activeTab}>홈</Text>
                <Text style={styles.tab}>이벤트</Text>
                <Text style={styles.tab}>패스트오더</Text>
                <Text style={styles.tab}>기프트샵</Text>
                <Text style={styles.tab}>@CGV</Text>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        height:'13%'
    },
    headerRight: {
        flexDirection: 'row',
        gap: 15,
        position: 'absolute',
        right: 10,
        top: 13,
    },
    headerIcon: {
        fontSize: 20,
        padding: 5,
    },
    logo: {
        width: 70,
        height: 40,
    },
    tabs: {
        marginLeft:'-10',
        width: '150%',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#FF4B4B',
    },
    tab: {
        marginRight: 20,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    activeTab: {
        marginRight: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Header;