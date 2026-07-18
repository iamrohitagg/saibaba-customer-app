import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, Polyline, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';

const RIDE_OPTIONS = [
  { id: 'auto', type: 'Auto', typeHi: 'ऑटो', eta: '3 min', fare: 75.00, image: 'https://img.icons8.com/color/96/rickshaw.png' },
  { id: 'mini', type: 'Mini', typeHi: 'मिनी', eta: '5 min', fare: 135.00, image: 'https://img.icons8.com/color/96/car.png' },
  { id: 'sedan', type: 'Sedan', typeHi: 'सिडान', eta: '7 min', fare: 190.00, image: 'https://img.icons8.com/color/96/sedan.png' },
];

export const RideTypeSelectionScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const { t, i18n } = useTranslation();
  const [selectedRide, setSelectedRide] = useState<string>('auto');

  const selectedOption = RIDE_OPTIONS.find(opt => opt.id === selectedRide);

  const handleBook = () => {
    navigation.navigate('SearchingDriver');
  };

  return (
    <View style={styles.container}>
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

      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: Math.max(insets.top, 20) + 110 }]} showsVerticalScrollIndicator={false}>
        {/* Map Header Area */}
        <View style={styles.mapCardContainer}>
          <View style={styles.mapPlaceholder}>
            <MapView
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
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
            >
              <Marker coordinate={{ latitude: 25.8833, longitude: 86.6000 }}>
                <View style={styles.pinSmall} />
              </Marker>
              <Marker coordinate={{ latitude: 25.8850, longitude: 86.5980 }}>
                <View style={[styles.pinSmall, { backgroundColor: '#1E293B' }]} />
              </Marker>
              <Polyline 
                coordinates={[
                  { latitude: 25.8833, longitude: 86.6000 },
                  { latitude: 25.8833, longitude: 86.5980 },
                  { latitude: 25.8850, longitude: 86.5980 },
                ]}
                strokeColor="#1D5B9E"
                strokeWidth={4}
              />
            </MapView>
          </View>
          
          <View style={styles.addressBox}>
            <View style={styles.addressLine}>
              <View style={styles.addressDotTop} />
              <Text style={styles.addressText} numberOfLines={1}>{t('current_location')}</Text>
            </View>
            <View style={styles.addressDashedLine} />
            <View style={styles.addressLine}>
              <View style={styles.addressDotBottom} />
              <Text style={styles.addressText} numberOfLines={1}>Durga Mandir Road</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>{t('select_ride_type_instant')}</Text>

        {RIDE_OPTIONS.map((option) => {
          const isSelected = selectedRide === option.id;
          return (
            <TouchableOpacity 
              key={option.id}
              style={[styles.rideCard, isSelected && styles.rideCardSelected]}
              onPress={() => setSelectedRide(option.id)}
              activeOpacity={0.8}
            >
              <View style={styles.rideImageContainer}>
                <Image source={{ uri: option.image }} style={styles.rideImage} resizeMode="contain" />
              </View>
              <View style={styles.rideDetails}>
                <Text style={styles.rideTitle}>{i18n.language === 'hi' ? option.typeHi : option.type}</Text>
                <Text style={styles.rideSubText}>{t('eta_label')}{option.eta}</Text>
                <Text style={styles.rideSubText}>{t('fare_label')}₹{option.fare.toFixed(2)}</Text>
              </View>
              <View style={styles.radioContainer}>
                {isSelected ? (
                   <Image source={{ uri: 'https://img.icons8.com/ios-filled/96/1D5B9E/checkmark--v1.png' }} style={styles.checkIcon} />
                ) : (
                   <View style={styles.radioUnselected} />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={[styles.bottomActionBar, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
          <Text style={styles.bookButtonText}>
            {t('book_confirm_dynamic', { type: i18n.language === 'hi' ? selectedOption?.typeHi : selectedOption?.type })}
          </Text>
        </TouchableOpacity>
        <Text style={styles.disclaimerText}>
          {t('fare_estimated_varies')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
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
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 120, // space for bottom bar
  },
  mapCardContainer: {
    height: 120,
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
  addressDotBottom: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#1E293B',
    marginRight: 8,
  },
  addressDashedLine: {
    width: 1,
    height: 12,
    borderLeftWidth: 1,
    borderColor: '#94A3B8',
    borderStyle: 'dashed',
    marginLeft: 3,
    marginVertical: 2,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 15,
  },
  rideCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  rideCardSelected: {
    borderColor: '#1D5B9E',
    borderWidth: 1.5,
    backgroundColor: '#F8FAFC',
  },
  rideImageContainer: {
    width: 60,
    height: 60,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rideImage: {
    width: 50,
    height: 50,
  },
  rideDetails: {
    flex: 1,
  },
  rideTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 2,
  },
  rideSubText: {
    fontSize: 14,
    color: '#475569',
    marginTop: 2,
  },
  radioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  checkIcon: {
    width: 24,
    height: 24,
    tintColor: '#1D5B9E',
  },
  radioUnselected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CBD5E1',
  },
  bottomActionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
    elevation: 10,
  },
  bookButton: {
    backgroundColor: '#1E3A5F',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#475569',
  },
});
