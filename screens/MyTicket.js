import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Video } from "expo-av"; // expo-video로 변경 권장
import moment from "moment";

const MyTicket = () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(
    moment().format("YYYY.MM.DD HH:mm:ss")
  );
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // API 요청
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        //Server Url로 변경하기 
        const response = await fetch("http://k8s-cgvapp-karpente-18ab730259-222315430.ap-northeast-2.elb.amazonaws.com:8000/tickets/user/1");
        const data = await response.json();
        console.log("티켓 데이터:", data); // 추가된 로그
        setTickets(data);
      } catch (error) {
        console.error("티켓 정보를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // 현재 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format("YYYY.MM.DD HH:mm:ss"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("뒤로가기")}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My 티켓</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollView}>
        {tickets.map((ticket, index) => (
          <View key={index} style={styles.ticketCard}>
            <View style={styles.ticketHeader}>
              <Text style={styles.movieTitle}>{ticket.movieTitle}</Text>
              <Text style={styles.ticketNumber}>{ticket.ticketNumber}</Text>
            </View>

            <View style={styles.ticketInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>상영일시</Text>
                <Text style={styles.value}>
                  {ticket.date} {ticket.time}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>상영관</Text>
                <Text style={styles.value}>{ticket.theater}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>좌석</Text>
                <Text style={styles.value}>{ticket.seat}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>상태</Text>
                <Text style={styles.value}>{ticket.status}</Text>
              </View>
            </View>

            {/* 광고 섹션 */}
            {ticket.adUrl ? (
              <View style={styles.adContainer}>
                <Text style={styles.adTitle}> 📢 광고</Text>
                <Video
                  ref={videoRef}
                  source={{ uri: ticket.adUrl }}
                  style={styles.video}
                  useNativeControls
                  shouldPlay
                  isMuted
                  resizeMode="contain"
                  onError={(error) => console.error("비디오 오류:", error)} // 오류 핸들러 추가
                />
              </View>
            ) : null}

            <Text style={styles.text}>🎬 상영까지 남은 시간 </Text>
            <Text style={styles.text}>{currentTime}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
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
    shadowOffset: { width: 0, height: 2 },
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
    marginBottom: 8,
    textAlign: "center"
  },
});

export default MyTicket;