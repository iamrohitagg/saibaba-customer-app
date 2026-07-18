import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';

export const LocationSelectionScreen = ({ navigation, route }: any) => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const [pickup, setPickup] = useState('मेरा स्थान (सहरसा जंक्शन)');
  const [destination, setDestination] = useState('स्टेशन रोड');

  useEffect(() => {
    if (route.params?.updatedAddress && route.params?.type) {
      if (route.params.type === 'pickup') {
        setPickup(route.params.updatedAddress);
      } else if (route.params.type === 'drop') {
        setDestination(route.params.updatedAddress);
      }
      // Clear the params so it doesn't trigger again on unrelated re-renders
      navigation.setParams({ updatedAddress: undefined, type: undefined });
    }
  }, [route.params?.updatedAddress, route.params?.type]);

  return (
    <View style={styles.container}>
      {/* Map Area */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapPlaceholder}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
          initialRegion={{
            latitude: 25.8833, // Saharsa approximate coordinates
            longitude: 86.6000,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          userInterfaceStyle="light"
        >
          <Marker
            coordinate={{ latitude: 25.8833, longitude: 86.6000 }}
            title="Pickup Location"
          />
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
        
        <Text style={styles.sheetTitle}>{t("choose_pickup_location")}</Text>
        
        {/* Your Location */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabelOverlay}>{t("your_location")}</Text>
          <TouchableOpacity 
            style={styles.inputBox}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('AddressSearch', { type: 'pickup', currentValue: pickup })}
          >
            <View style={styles.targetIcon}>
              <View style={styles.targetIconInner} />
            </View>
            <View>
              <Text style={styles.primaryText}>{pickup.split(' (')[0]}</Text>
              {pickup.includes('(') && <Text style={styles.secondaryText}>{pickup.split(' (')[1].replace(')', '')}</Text>}
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Destination */}
        <View style={[styles.inputGroup, { zIndex: 10 }]}>
          <Text style={styles.inputLabelOverlay}>{t("destination")}</Text>
          <TouchableOpacity 
            style={[styles.inputBox, styles.inputBoxDestination]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('AddressSearch', { type: 'drop', currentValue: destination })}
          >
            <View style={styles.pinIcon} />
            <Text style={styles.primaryText}>{destination}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.instructionText}>
          {t("move_pin_instruction")}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => navigation.navigate('RideTypeSelection')}
          >
            <Text style={styles.actionButtonText}>{t("pickup_from_here")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]} onPress={() => {}}>
            <Text style={styles.actionButtonText}>{t("change_pin")}</Text>
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
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
    position: 'relative',
  },
  inputLabelOverlay: {
    position: 'absolute',
    top: -8,
    left: 15,
    backgroundColor: '#F7FAFC',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#555',
    zIndex: 2,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFF',
  },
  inputBoxDestination: {
    borderColor: '#1D5B9E',
    borderWidth: 1.5,
  },
  inputBoxDestinationActive: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  targetIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  targetIconInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#666',
  },
  pinIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1D5B9E',
    marginRight: 12,
    marginLeft: 3,
  },
  primaryText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  secondaryText: {
    fontSize: 14,
    color: '#666',
  },
  dropdownIcon: {
    marginLeft: 'auto',
    color: '#1D5B9E',
    fontSize: 12,
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    borderColor: '#1D5B9E',
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  dropdownItem: {
    padding: 12,
    paddingHorizontal: 15,
  },
  dropdownItemSelected: {
    backgroundColor: '#E6F0FA',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },
  instructionText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    marginVertical: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#384B70',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    flex: 0.7,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  actionButtonSubText: {
    color: '#FFF',
    fontSize: 12,
  }
});
