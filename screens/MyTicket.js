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


const MyTicket = () => {
    const [tickets, setTickets] = React.useState([
        {
            id: 1,
            movieTitle: '듄: 파트2',
            date: '2024.02.13',
            time: '14:30',
            theater: 'CGV 영등포',
            seat: 'H12, H13',
            ticketNumber: 'TICKET-2024021301'
        },
        // 더미 데이터 추가 가능
    ]);

    return (
        <SafeAreaView style={ticketStyles.container}>
            <View style={ticketStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={ticketStyles.headerTitle}>My 티켓</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={ticketStyles.scrollView}>
                {tickets.map(ticket => (
                    <View key={ticket.id} style={ticketStyles.ticketCard}>
                        <View style={ticketStyles.ticketHeader}>
                            <Text style={ticketStyles.movieTitle}>{ticket.movieTitle}</Text>
                            <Text style={ticketStyles.ticketNumber}>{ticket.ticketNumber}</Text>
                        </View>
                        
                        <View style={ticketStyles.ticketInfo}>
                            <View style={ticketStyles.infoRow}>
                                <Text style={ticketStyles.label}>상영일시</Text>
                                <Text style={ticketStyles.value}>{ticket.date} {ticket.time}</Text>
                            </View>
                            <View style={ticketStyles.infoRow}>
                                <Text style={ticketStyles.label}>상영관</Text>
                                <Text style={ticketStyles.value}>{ticket.theater}</Text>
                            </View>
                            <View style={ticketStyles.infoRow}>
                                <Text style={ticketStyles.label}>좌석</Text>
                                <Text style={ticketStyles.value}>{ticket.seat}</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={ticketStyles.ticketButton}>
                            <Text style={ticketStyles.buttonText}>티켓 상세보기</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const ticketStyles = StyleSheet.create({
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
        padding: 16,
    },
    ticketCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    ticketHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 12,
        marginBottom: 12,
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    ticketNumber: {
        fontSize: 12,
        color: '#666',
    },
    ticketInfo: {
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        color: '#666',
    },
    value: {
        fontSize: 14,
        fontWeight: '500',
    },
    ticketButton: {
        backgroundColor: '#e71a0f',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
});

export default MyTicket;