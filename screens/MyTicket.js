import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import {
  MaterialIcons,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Video } from "expo-av";
import moment from "moment";

const MyTicket = () => {
  const videoRef = useRef(null); // 비디오 컨트롤을 위한 useRef
  const [currentTime, setCurrentTime] = useState(
    moment().format("YYYY.MM.DD HH:mm:ss")
  );

  const [tickets, setTickets] = React.useState([
    {
      id: 1,
      movieTitle: "듄: 파트2",
      date: "2024.02.13",
      time: "14:30",
      theater: "CGV 영등포",
      seat: "H12, H13",
      ticketNumber: "TICKET-2024021301",
      adUrl: "https://d1b5v8tnmf9lgz.cloudfront.net/convert-test.mp4",
    },
    // 더미 데이터 추가 가능
  ]);

  // 현재 시간 표시 (나중에 지우길/...)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format("YYYY.MM.DD HH:mm:ss"));
    }, 1000);

    return () => clearInterval(timer); // ✅ 언마운트 시 타이머 제거
  }, []);
  /////////////////

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
        {tickets.map((ticket) => (
          <View key={ticket.id} style={ticketStyles.ticketCard}>
            <View style={ticketStyles.ticketHeader}>
              <Text style={ticketStyles.movieTitle}>{ticket.movieTitle}</Text>
              <Text style={ticketStyles.ticketNumber}>
                {ticket.ticketNumber}
              </Text>
            </View>

            <View style={ticketStyles.ticketInfo}>
              <View style={ticketStyles.infoRow}>
                <Text style={ticketStyles.label}>상영일시</Text>
                <Text style={ticketStyles.value}>
                  {ticket.date} {ticket.time}
                </Text>
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

            <View style={ticketStyles.adContainer}>
              <Text style={ticketStyles.adTitle}>📢 광고</Text>
              <Video
                ref={videoRef}
                source={{ uri: ticket.adUrl }}
                style={ticketStyles.video}
                useNativeControls
                resizeMode="contain"
                shouldPlay={true} // ✅ 자동 재생 설정
                // isLooping={true} // ✅ 반복 재생
                useNativeControls={false}
                isMuted={true}
              />
              <Text style={ticketStyles.text}>🎬 상영까지 남은 시간 </Text>
              <Text style={ticketStyles.text}>{currentTime}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const ticketStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  ticketCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
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
    borderBottomColor: "#eee",
    paddingBottom: 12,
    marginBottom: 12,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  ticketNumber: {
    fontSize: 12,
    color: "#666",
  },
  ticketInfo: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
  },
  adContainer: {
    alignItems: "center",
    marginTop: 12,
  },
  adTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  video: {
    width: "100%",
    height: 200,
    backgroundColor: "#000",
  },
  text: {
    marginTop: 16,
    marginBotton: 8,
  },
});

export default MyTicket;
