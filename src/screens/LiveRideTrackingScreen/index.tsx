import React from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';

export const LiveRideTrackingScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Map Area */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapPlaceholder}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
          initialRegion={{
            latitude: 25.8833, 
            longitude: 86.6000,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0121,
          }}
          userInterfaceStyle="light"
        >
          {/* Main Destination/Pickup Marker with Radar */}
          <Marker coordinate={{ latitude: 25.8853, longitude: 86.5980 }}>
            <View style={styles.radarContainerSmall}>
              <View style={styles.radarRing1Small} />
              <View style={styles.radarRing2Small} />
              <Image 
                source={{ uri: 'https://img.icons8.com/color/96/marker.png' }} 
                style={styles.mapMarkerSmall} 
              />
            </View>
          </Marker>

          <Polyline 
             coordinates={[
                { latitude: 25.8833, longitude: 86.6000 },
                { latitude: 25.8853, longitude: 86.5980 },
             ]}
             strokeColor="#1D5B9E"
             strokeWidth={4}
          />

          {/* Active Car Marker with heading cone and radar */}
          <Marker coordinate={{ latitude: 25.8833, longitude: 86.6000 }} anchor={{x: 0.5, y: 0.5}}>
            <View style={styles.activeCarContainer}>
              <View style={styles.activeRadar1} />
              <View style={styles.activeRadar2} />
              <View style={styles.headingCone} />
              <Image 
                source={{ uri: 'https://img.icons8.com/ios-filled/96/1D5B9E/car-top-view.png' }} 
                style={styles.activeCarImage} 
              />
            </View>
          </Marker>

          {/* Dummy Background Cars */}
          <Marker coordinate={{ latitude: 25.8840, longitude: 86.5950 }}>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/96/F59E0B/car-top-view.png' }} style={styles.dummyCarMarker} />
          </Marker>
          <Marker coordinate={{ latitude: 25.8820, longitude: 86.6020 }}>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/car-top-view.png' }} style={styles.dummyCarMarker} />
          </Marker>
          <Marker coordinate={{ latitude: 25.8850, longitude: 86.6030 }}>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/96/F59E0B/car-top-view.png' }} style={styles.dummyCarMarker} />
          </Marker>
        </MapView>
      </View>

      {/* Header overlay */}
      <View style={[styles.headerOverlay, { paddingTop: Math.max(insets.top, 10) }]}>
        <LinearGradient
            colors={['#FCAE75', '#AEE1F9']}
            style={styles.headerGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.headerTextContainer}>
              <Text style={styles.greetingText}>नमस्ते. 🙏</Text>
              <Text style={styles.brandText}>jaiBababjiCab!</Text>
            </View>
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios-filled/96/1D5B9E/user.png',
                }}
                style={[styles.avatarImage, { tintColor: '#1D5B9E' }]}
              />
            </View>
          </LinearGradient>
      </View>

      {/* Map Overlays (Title and Driver Pill) */}
      <View style={[styles.mapOverlayTop, { top: Math.max(insets.top, 10) + 90 }]}>
        <Text style={styles.liveTrackingText}>{t('live_ride_tracking')}</Text>
      </View>

      <View style={styles.driverPillContainer}>
        <View style={styles.driverPill}>
          <Text style={styles.driverPillText}>{t('driver_name_display', { name: 'Rakesh Kumar' })}</Text>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View style={[styles.bottomSheet, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Text style={styles.rideStatusText}>{t('your_ride_is_active')}</Text>
        <Text style={styles.vehicleText}>{t('vehicle_display', { type: 'Mini', plate: 'BR 19C 1234' })}</Text>
        
        <View style={styles.otpContainer}>
          <Text style={styles.otpText}>{t('otp_display', { otp: '8347' })}</Text>
        </View>
        
        <Text style={styles.timeInfoText}>
          {t('eta_to_arrive')} 8 मिनट
        </Text>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.actionButton, styles.safetyButton]} onPress={() => {}}>
            <Text style={styles.actionButtonText}>{t('safety_support')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.callButton]} onPress={() => {}}>
            <Text style={styles.actionButtonText}>{t('call_driver')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapPlaceholder: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 15,
  },
  headerGradient: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerTextContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  brandText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  avatarContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 22.5,
  },
  mapOverlayTop: {
    position: 'absolute',
    left: 20,
    zIndex: 5,
  },
  liveTrackingText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1E293B',
    textShadowColor: 'rgba(255,255,255,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  driverPillContainer: {
    position: 'absolute',
    bottom: 270, // above bottom sheet
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 5,
  },
  driverPill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  driverPillText: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '500',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FDFCF7', // slight yellow tint
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 20,
  },
  rideStatusText: {
    fontSize: 18,
    color: '#1E293B',
    fontWeight: '500',
    marginBottom: 8,
  },
  vehicleText: {
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 12,
  },
  otpContainer: {
    backgroundColor: '#1E293B',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 15,
  },
  otpText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeInfoText: {
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 20,
  },
  timeInfoSub: {
    fontSize: 12,
    color: '#475569',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safetyButton: {
    backgroundColor: '#F59E0B',
  },
  callButton: {
    backgroundColor: '#10B981', // green
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  radarContainerSmall: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radarRing1Small: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#1D5B9E',
    backgroundColor: 'rgba(29, 91, 158, 0.1)',
  },
  radarRing2Small: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#1D5B9E',
  },
  mapMarkerSmall: {
    width: 30,
    height: 30,
    zIndex: 10,
  },
  activeCarContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeRadar1: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1D5B9E',
    backgroundColor: 'rgba(29, 91, 158, 0.2)',
  },
  activeRadar2: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#1D5B9E',
  },
  headingCone: {
    position: 'absolute',
    top: 20, 
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(29, 91, 158, 0.4)',
    zIndex: 1,
  },
  activeCarImage: {
    width: 30,
    height: 60,
    zIndex: 10,
  },
  dummyCarMarker: {
    width: 25,
    height: 50,
  },
});
