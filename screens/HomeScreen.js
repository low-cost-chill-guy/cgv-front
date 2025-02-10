import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TextInput
} from 'react-native';
import Header from '../screens/Header.js';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>

                <ScrollView horizontal pagingEnabled>
                    <View style={styles.banner}>
                        <Image
                            source={require('../assets/banner.png')}
                            style={styles.bannerImage}
                            resizeMode="contain"
                        />
                        <View style={styles.bannerIndicator}>
                            <Text style={styles.bannerPage}>1 / 4</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.movieSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>무비차트</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>전체보기 &gt;</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.chipContainer}>
                        <TouchableOpacity style={styles.activeChip}>
                            <Text style={styles.activeChipText}>예매차트</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chip}>
                            <Text style={styles.chipText}>현재상영작</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chip}>
                            <Text style={styles.chipText}>상영예정작</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chip}>
                            <Text style={styles.chipText}>ICECON</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.movieCard}>
                            <View style={styles.rankBadge}>
                                <Text style={styles.rankText}>1</Text>
                            </View>
                            <Image
                                source={require('../assets/movie-poster.png')}
                                style={styles.moviePoster}
                            />
                            <Text style={styles.movieTitle}>캡틴 아메리카: 브레이브 뉴 월드</Text>
                            <Text style={styles.movieRate}>예매율 31.1%</Text>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.ratingText}>🔒 99%</Text>
                                <Text style={styles.ratingDivider}>|</Text>
                                <Text style={styles.releaseDate}>D-3</Text>
                            </View>
                            <View style={styles.theaterTypes}>
                                <Text style={styles.theaterType}>IMAX</Text>
                                <Text style={styles.theaterType}>SCREENX</Text>
                                <Text style={styles.theaterType}>4DX</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="영화를 검색해보세요."
                        placeholderTextColor="#999"
                    />
                    <Text style={styles.searchIcon}>🔍</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.ticketingButton}>
                <Text style={styles.ticketingButtonText}>예매하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerText: {
        fontSize: 12,
        color: '#666',
    },
    screenX: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
        gap: 15,
        position: 'absolute',
        right: 10,
        top: 10,
    },
    headerIcon: {
        fontSize: 20,
        padding: 5,
    },

    banner: {
        width: '100%',
        height: 150,
    },
    bannerImage: {
        width: 375,
        height: 125,
    },
    bannerIndicator: {
        position: 'absolute',
        right: 1,
        bottom: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 5,
        borderRadius: 12,
    },
    bannerPage: {
        color: '#fff',
        fontSize: 12,
    },
    movieSection: {
        padding: 15,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAll: {
        color: '#666',
        fontSize: 14,
    },
    chipContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    chip: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 8,
    },
    activeChip: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#333',
        marginRight: 8,
    },
    chipText: {
        color: '#666',
        fontSize: 13,
    },
    activeChipText: {
        color: '#fff',
        fontSize: 13,
    },
    movieCard: {
        width: 140,
        marginRight: 15,
        position: 'relative',
    },
    rankBadge: {
        position: 'absolute',
        left: 5,
        top: 5,
        zIndex: 1,
    },
    rankText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    logo: {
        width: 60,
        height: 30,
    },
    moviePoster: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    movieTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    movieRate: {
        fontSize: 12,
        color: '#666',
        marginTop: 3,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    ratingText: {
        fontSize: 12,
        color: '#666',
    },
    ratingDivider: {
        marginHorizontal: 5,
        color: '#ddd',
    },
    releaseDate: {
        fontSize: 12,
        color: '#666',
    },
    theaterTypes: {
        flexDirection: 'row',
        marginTop: 5,
        gap: 5,
    },
    theaterType: {
        fontSize: 10,
        color: '#666',
    },
    searchContainer: {
        margin: 15,
        position: 'relative',
    },
    searchInput: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        paddingRight: 40,
    },
    searchIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    ticketingButton: {
        backgroundColor: '#FF4B4B',
        padding: 15,
        margin: 15,
        borderRadius: 8,
        alignItems: 'flex-end',
    },
    ticketingButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;