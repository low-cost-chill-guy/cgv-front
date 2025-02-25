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
import { Video } from "expo-av";
import moment from "moment";

const MyTicket = ({ navigation }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(
    moment().format("YYYY.MM.DD HH:mm:ss")
  );
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [remainingTimes, setRemainingTimes] = useState({});

  // 광고 길이(초 단위) - 실제 광고 길이에 맞게 조정 필요
  const AD_DURATION = 300; // 5분 (예시)

  // 남은 시간 계산 함수 - date와 time 필드를 조합하여 사용
  // 남은 시간 계산 함수 - date와 time 필드를 조합하여 사용
  const calculateRemainingTime = (date, time) => {
    // date와 time을 조합하여 영화 시작 시간 생성
    const movieStartTimeStr = `${date} ${time}`;
    const movieStartMoment = moment(movieStartTimeStr, "YYYY.MM.DD HH:mm");
    const movieStartWithAd = movieStartMoment.clone().subtract(AD_DURATION, 'seconds');
    const now = moment();

    // 이미 지난 상영인 경우
    if (movieStartMoment < now) {
      return "상영 시간이 지났습니다";
    }

    // 남은 시간 계산
    const duration = moment.duration(movieStartMoment.diff(now));
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) % 60;
    const seconds = Math.floor(duration.asSeconds()) % 60;

    // 시간이 0인 경우 시간 부분 생략
    if (hours === 0) {
      return `${minutes}분 ${seconds}초`;
    } else {
      return `${hours}시간 ${minutes}분 ${seconds}초`;
    }
  };

  // API 요청
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        //Server Url로 변경하기 
        const response = await fetch("http://k8s-cgvapp-karpente-18ab730259-222315430.ap-northeast-2.elb.amazonaws.com:8000/tickets/user/1");
        const data = await response.json();
        console.log("티켓 데이터:", data);
        setTickets(data);

        // 초기 남은 시간 계산
        const initialRemainingTimes = {};
        data.forEach(ticket => {
          if (ticket.date && ticket.time) {
            initialRemainingTimes[ticket.ticketNumber] = calculateRemainingTime(ticket.date, ticket.time);
          }
        });
        setRemainingTimes(initialRemainingTimes);
      } catch (error) {
        console.error("티켓 정보를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // 현재 시간 및 남은 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment();
      setCurrentTime(now.format("YYYY.MM.DD HH:mm:ss"));

      // 모든 티켓의 남은 시간 업데이트
      const updatedRemainingTimes = {};
      tickets.forEach(ticket => {
        if (ticket.date && ticket.time) {
          updatedRemainingTimes[ticket.ticketNumber] = calculateRemainingTime(ticket.date, ticket.time);
        }
      });
      setRemainingTimes(updatedRemainingTimes);
    }, 1000);

    return () => clearInterval(timer);
  }, [tickets]);

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
              <View style={styles.infoRow}>
                <Text style={styles.label}>광고 시간</Text>
              </View>
            </View>

            {/* 광고 섹션 */}
            {ticket.adUrl ? (
              <View style={styles.adContainer}>
                <Text style={styles.adTitle}> 📢 광고 ({Math.floor(AD_DURATION / 60)}분)</Text>
                <Video
                  ref={videoRef}
                  source={{ uri: ticket.adUrl }}
                  style={styles.video}
                  useNativeControls
                  shouldPlay
                  isMuted
                  resizeMode="contain"
                  onError={(error) => console.error("비디오 오류:", error)}
                />
              </View>
            ) : null}

            <Text style={styles.text}>🎬 상영까지 남은 시간 </Text>
            <Text style={styles.remainingTime}>
              {ticket.ticketNumber && remainingTimes[ticket.ticketNumber] ?
                remainingTimes[ticket.ticketNumber] :
                "시간 정보가 없습니다"}
            </Text>

            <Text style={styles.currentTimeText}>
              현재 시간: {currentTime}
            </Text>
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
  remainingTime: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#E51B3E", // CGV 레드 색상
  },
  currentTimeText: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
    marginTop: 8,
  },
});

export default MyTicket;