import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  Platform 
} from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';

export const ScheduleConfirmationScreen = ({ navigation }: any) => {

  const bookingData = {
    date: '25 अक्टूबर, 2023',
    time: '2:30 PM',
    pickup: 'वर्तमान स्थान',
    drop: 'दुर्गा मंदिर रोड',
    vehicle: 'Mini / मिनी',
    driver: 'राकेश कुमार',
    fare: '₹680.00 (अनुमानित)'
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header Banner */}
        <View style={styles.headerBanner}>
          <Text style={styles.headerTextHi}>नमस्ते,</Text>
          <Text style={styles.headerTextEn}>jaiBababjiCab!</Text>
          <View style={styles.avatarPlaceholder} />
        </View>

        <View style={styles.content}>
          <Text style={styles.mainTitle}>Booking Confirmed (Scheduled)</Text>
          
          <View style={styles.checkIconContainer}>
            {/* Using a simple text for checkmark, would be an icon in real app */}
            <View style={styles.checkCircle}>
              <Text style={styles.checkMark}>✓</Text>
            </View>
          </View>

          {/* Map Header Area */}
          <View style={styles.mapCardContainer}>
            <View style={styles.mapPlaceholder}>
              <MapView
                style={{ width: '100%', height: '100%', position: 'absolute' }}
                provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                initialRegion={{
                  latitude: 25.8833, 
                  longitude: 86.6000,
                  latitudeDelta: 0.0122,
                  longitudeDelta: 0.0121,
                }}
                scrollEnabled={false}
                pitchEnabled={false}
                rotateEnabled={false}
                zoomEnabled={false}
                userInterfaceStyle="light"
                liteMode={true}
              >
                <Marker coordinate={{ latitude: 25.8833, longitude: 86.6000 }}>
                  <View style={styles.pinSmall} />
                </Marker>
              </MapView>
            </View>
            
            <View style={styles.addressBox}>
              <View style={styles.addressLine}>
                <View style={styles.addressDotTop} />
                <Text style={styles.addressText} numberOfLines={1}>Current Location</Text>
              </View>
            </View>
          </View>

          <Text style={styles.successMessage}>
            आपकी राइड [तारीख/समय] के लिए{'\n'}शेड्यूल कर दी गई है!
          </Text>

          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>दिनांक: </Text>
              <Text style={styles.value}>{bookingData.date}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>समय: </Text>
              <Text style={styles.value}>{bookingData.time}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>पिकअप: </Text>
              <Text style={styles.value}>{bookingData.pickup}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>गंतव्य: </Text>
              <Text style={styles.value}>{bookingData.drop}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>गाड़ी: </Text>
              <Text style={styles.value}>{bookingData.vehicle}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>ड्राइवर: </Text>
              <Text style={styles.value}>{bookingData.driver}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>किराया: </Text>
              <Text style={styles.value}>{bookingData.fare}</Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.footerText}>
              आपकी राइड {bookingData.date} को {bookingData.time} के लिए शेड्यूल कर दी गई है!
            </Text>
          </View>

          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Text style={styles.actionButtonText}>राइड देखें</Text>
            <Text style={styles.actionButtonTextSmall}>शेड्यूल बदलें</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF7F2',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  headerBanner: {
    height: 100,
    backgroundColor: '#E5D8CD',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  headerTextHi: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 5,
  },
  headerTextEn: {
    fontSize: 18,
    color: '#333',
    marginTop: 6,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#CCC',
    position: 'absolute',
    right: 20,
    top: 30,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkIconContainer: {
    marginBottom: 20,
  },
  checkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#34A853',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  successMessage: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 26,
  },
  card: {
    width: '100%',
    backgroundColor: '#F4F2EF',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E8E5E1',
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 12,
  },
  footerText: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    lineHeight: 22,
  },
  actionButton: {
    width: '100%',
    backgroundColor: '#384B70',
    borderRadius: 30,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  actionButtonTextSmall: {
    color: '#FFF',
    fontSize: 14,
  },
  mapCardContainer: {
    height: 120,
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
    backgroundColor: '#EAEAEA',
  },
  mapPlaceholder: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
  },
  addressBox: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
    width: '60%',
  },
  addressLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressDotTop: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1D5B9E',
    marginRight: 8,
  },
  addressText: {
    fontSize: 14,
    color: '#1E293B',
    flex: 1,
  },
  pinSmall: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1D5B9E',
    borderWidth: 2,
    borderColor: '#FFF',
  },
});
