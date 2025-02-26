import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { MaterialIcons, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

const MyPageScreen = ({ navigation }) => {
    const MenuItem = ({ icon, title, showArrow = true, onPress }) => (
        <TouchableOpacity style={styles.menuItem} onPress={onPress}>
            <View style={styles.menuItemLeft}>
                {icon}
                <Text style={styles.menuItemText}>{title}</Text>
            </View>
            {showArrow && <MaterialIcons name="chevron-right" size={24} color="#666" />}
        </TouchableOpacity>
    );

    const QuickMenuItem = ({ icon, label }) => (
        <View style={styles.quickMenuItem}>
            <View style={styles.quickMenuIconContainer}>
                {icon}
            </View>
            <Text style={styles.quickMenuLabel}>{label}</Text>
        </View>
    );

    const TopInfoSection = () => (
        <View style={styles.topInfoSection}>
            <View style={styles.infoItem}>
                <MaterialIcons name="receipt-long" size={24} color="#666" />
                <Text style={styles.infoText}>스마트 영수증</Text>
            </View>
            <View style={styles.infoItem}>
                <MaterialIcons name="calendar-today" size={24} color="#666" />
                <Text style={styles.infoText}>온라인 예약/결제내역</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My CGV</Text>
                <TouchableOpacity>
                    <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.profileSection}>
                    <View style={styles.profileInfo}>
                        <View>
                            <Text style={styles.userName}>yh**ka님</Text>
                            <Text style={styles.greeting}>안녕하세요.</Text>
                        </View>
                        <View style={styles.profileImagePlaceholder}>
                            <MaterialIcons name="person-outline" size={30} color="#999" />
                        </View>
                    </View>

                    <View style={styles.pointsContainer}>
                        <View style={styles.pointItem}>
                            <Text style={styles.pointValue}>0</Text>
                            <Text style={styles.pointLabel}>쿠폰함</Text>
                        </View>
                        <View style={styles.pointDivider} />
                        <View style={styles.pointItem}>
                            <Text style={styles.pointValue}>0P</Text>
                            <Text style={styles.pointLabel}>CJ ONE 포인트</Text>
                        </View>
                        <View style={styles.pointDivider} />
                        <TouchableOpacity style={styles.pointItem}>
                            <Text style={styles.pointLabel}>일반</Text>
                            <Text style={styles.vipLabel}>VIP라운지 &gt;</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Club Section */}
                    <View style={styles.clubSection}>
                        <Text style={styles.clubText}>가입한 Club이 없습니다</Text>
                        <TouchableOpacity style={styles.clubButton}>
                            <Text style={styles.clubButtonText}>바로가기</Text>
                        </TouchableOpacity>
                    </View>
                    <TopInfoSection />

                    {/* Quick Menu */}
                    <View style={styles.quickMenuGrid}>
                        <QuickMenuItem
                            icon={<FontAwesome5 name="ticket-alt" size={24} color="#666" />}
                            label="관람권/카드"
                        />
                        <QuickMenuItem
                            icon={<MaterialIcons name="card-giftcard" size={24} color="#666" />}
                            label="기프트카드"
                        />
                        <QuickMenuItem
                            icon={<MaterialIcons name="movie" size={24} color="#666" />}
                            label="무비로그"
                        />
                        <QuickMenuItem
                            icon={<MaterialIcons name="favorite-border" size={24} color="#666" />}
                            label="기대되는 영화"
                        />
                    </View>


                    {/* Menu List */}
                    <View style={styles.menuList}>
                        <MenuItem
                            icon={<MaterialIcons name="local-movies" size={24} color="#666" />}
                            title="My 티켓"
                            onPress={() => navigation.navigate('MyTicket')}
                        />
                        <MenuItem
                            icon={<MaterialIcons name="local-movies" size={24} color="#666" />}
                            title="VIP 시사회"
                            onPress={() => navigation.navigate('StreamPlayer')}
                        />
                        <MenuItem
                            icon={<MaterialIcons name="payment" size={24} color="#666" />}
                            title="CGV 스마트 결제 관리"
                        />
                        <MenuItem
                            icon={<MaterialIcons name="credit-card" size={24} color="#666" />}
                            title="자주쓰는 신용카드"
                        />
                        <MenuItem
                            icon={<FontAwesome5 name="car" size={24} color="#666" />}
                            title="내 차량번호 관리"
                        />
                        <MenuItem
                            icon={<MaterialIcons name="event" size={24} color="#666" />}
                            title="이벤트 참여내역"
                        />
                        <MenuItem
                            icon={<MaterialIcons name="location-on" size={24} color="#666" />}
                            title="자주가는 CGV"
                        />
                        <MenuItem
                            icon={<MaterialIcons name="question-answer" size={24} color="#666" />}
                            title="실관람객 등록"
                        />
                        <MenuItem
                            icon={<MaterialIcons name="loyalty" size={24} color="#666" />}
                            title="제휴포인트 적립"
                        />
                        <MenuItem
                            icon={<MaterialIcons name="person" size={24} color="#666" />}
                            title="개인정보 관리"
                        />
                        <MenuItem
                            icon={<MaterialIcons name="campaign" size={24} color="#666" />}
                            title="공지사항"
                        />
                        <MenuItem
                            icon={<MaterialIcons name="headset-mic" size={24} color="#666" />}
                            title="고객센터"
                        />
                        <MenuItem
                            icon={<Ionicons name="settings-outline" size={24} color="#666" />}
                            title="설정"
                        />
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerTitle}>CJ CGV (주)</Text>
                        <View style={styles.footerLinks}>
                            <Text style={styles.footerLink}>이용약관</Text>
                            <Text style={styles.footerLink}>개인정보 처리방침</Text>
                            <Text style={styles.footerLink}>위치기반서비스 이용약관</Text>
                            <Text style={styles.footerLink}>법적고지</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
    },
    profileSection: {
        padding: 20,
    },
    profileInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    greeting: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    }, profileImagePlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pointsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    pointItem: {
        flex: 1,
        alignItems: 'center',
    },
    pointValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    pointLabel: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    pointDivider: {
        width: 1,
        height: '100%',
        backgroundColor: '#eee',
    },
    vipLabel: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    clubSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    clubText: {
        fontSize: 14,
        color: '#666',
    },
    clubButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: '#f5f5f5',
    },
    clubButtonText: {
        fontSize: 14,
        color: '#666',
    },
    quickMenuGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    quickMenuItem: {
        width: '25%',
        alignItems: 'center',
        marginBottom: 16,
    },
    quickMenuIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    quickMenuLabel: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    menuList: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        fontSize: 16,
        marginLeft: 12,
    },
    footer: {
        marginTop: 40,
        paddingBottom: 20,
    },
    footerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    footerLinks: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    footerLink: {
        fontSize: 12,
        color: '#666',
        marginRight: 12,
        marginBottom: 8,
    }, topInfoSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#f8f8f8',
        marginBottom: 5,
        borderRadius: 8,
        marginTop: 10,
    },
    infoItem: {
        alignItems: 'center',
    },
    infoText: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
});

export default MyPageScreen;