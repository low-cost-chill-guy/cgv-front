import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuScreen = ({ navigation }) => {
  const quickMenuItems = [
    {
      id: 1,
      icon: <MaterialCommunityIcons name="film" size={24} color="#fff" />,
      text: '영화별예매'
    },
    {
      id: 2,
      icon: <MaterialIcons name="theaters" size={24} color="#fff" />,
      text: '극장별예매'
    },
    {
      id: 3,
      icon: <MaterialCommunityIcons name="popcorn" size={24} color="#fff" />,
      text: '패스트오더'
    },
    {
      id: 4,
      icon: <MaterialCommunityIcons name="cards-heart" size={24} color="#fff" />,
      text: '포토플레이'
    },
  ];

  const menuItems = [
    ['통합검색', '영화', '영화관 찾기', '특별관'],
    ['이벤트', '기프트샵', 'CGV스토어', 'VIP라운지'],
    ['클럽서비스', '무비로그', '상담톡', ''],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="home-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerIcon}>
              <MaterialCommunityIcons name="bell-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerIcon}
              onPress={() => navigation.navigate('Main')}
            >
              <MaterialCommunityIcons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>로그인을 해주세요</Text>
          <MaterialIcons name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.quickMenu}>
        {quickMenuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.quickMenuItem}>
            {item.icon}
            <Text style={styles.quickMenuText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>서비스</Text>

      <View style={styles.menuGrid}>
        {menuItems.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.menuRow}>
            {row.map((item, index) => (
              item ? (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                >
                  <Text style={styles.menuText}>{item}</Text>
                </TouchableOpacity>
              ) : <View key={index} style={styles.menuItem} />
            ))}
          </View>
        ))}
      </View>

      <View style={styles.adBanner}>
        <Image
          source={require('../assets/example.png')}
          style={styles.adImage}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.footerText}>고객문의</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  headerBackground: {
    backgroundColor: '#FF355E',
    paddingBottom: 20,
    backgroundImage: 'linear-gradient(to right, #FF355E, #FF5733)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 20,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 10,
  },
  quickMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2a2a2a',
    paddingVertical: 20,
    marginBottom: 20,
  },
  quickMenuItem: {
    alignItems: 'center',
  },
  quickMenuIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  quickMenuText: {
    color: '#fff',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
  },
  menuGrid: {
    paddingHorizontal: 15,
  },
  menuRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  menuItem: {
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  adBanner: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  adImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
  },
});

export default MenuScreen;