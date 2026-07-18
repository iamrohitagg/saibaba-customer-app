import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Platform, ActivityIndicator, Animated, Easing } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';

export const SearchingDriverScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simulate finding a driver after a few seconds
    const timer = setTimeout(() => {
      navigation.replace('LiveRideTracking');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0221,
          }}
          userInterfaceStyle="light"
        >
          {/* Main User Marker with Ripple effect mockup */}
          <Marker coordinate={{ latitude: 25.8833, longitude: 86.6000 }}>
            <View style={styles.radarContainer}>
              <View style={styles.radarRing1} />
              <View style={styles.radarRing2} />
              <View style={styles.radarRing3} />
              <Image 
                source={{ uri: 'https://img.icons8.com/color/96/marker.png' }} 
                style={styles.mapMarker} 
              />
            </View>
          </Marker>

          {/* Dummy Car Markers */}
          <Marker coordinate={{ latitude: 25.8880, longitude: 86.5950 }}>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/car.png' }} style={styles.carMarker} />
          </Marker>
          <Marker coordinate={{ latitude: 25.8790, longitude: 86.6080 }}>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/car.png' }} style={styles.carMarker} />
          </Marker>
          <Marker coordinate={{ latitude: 25.8810, longitude: 86.5920 }}>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/car.png' }} style={styles.carMarker} />
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

      {/* Bottom Sheet */}
      <View style={[styles.bottomSheet, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <View style={styles.sheetHandle} />
        
        <Text style={styles.sheetTitle}>{t('searching_driver_title')}</Text>
        
        <View style={styles.iconContainer}>
            {/* A placeholder for the car search graphic */}
            <View style={styles.graphicCircle1}>
              <View style={styles.graphicCircle2}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/ios/96/1D5B9E/car--v1.png' }} 
                  style={styles.searchGraphic} 
                />
              </View>
            </View>
        </View>

        <Text style={styles.statusText}>
          {t('searching_best_cab')}
        </Text>

        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#1D5B9E" />
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
  bottomSheet: {
    backgroundColor: '#F7FAFC',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 15,
    marginTop: -30, // Overlap the map
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 20,
    alignItems: 'center',
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  sheetTitle: {
    fontSize: 22,
    color: '#1D5B9E',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  iconContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  graphicCircle1: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphicCircle2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchGraphic: {
    width: 60,
    height: 60,
  },
  statusText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 30,
    fontWeight: '400',
  },
  loaderContainer: {
    marginBottom: 20,
  },
  radarContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radarRing1: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#1D5B9E',
    backgroundColor: 'rgba(29, 91, 158, 0.2)',
  },
  radarRing2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#1D5B9E',
  },
  radarRing3: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'rgba(29, 91, 158, 0.3)',
  },
  mapMarker: {
    width: 40,
    height: 40,
    zIndex: 10,
  },
  carMarker: {
    width: 25,
    height: 25,
  }
});
