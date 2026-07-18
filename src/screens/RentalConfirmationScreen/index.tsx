import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRentalConfirmationScreen } from './useRentalConfirmationScreen';
import { styles } from './styles';

export function RentalConfirmationScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const { t, bookingData, handleViewDetails } = useRentalConfirmationScreen({ navigation });

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#FCAE75', '#AEE1F9']}
        style={[styles.headerGradient, { paddingTop: Math.max(insets.top, 10) }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>नमस्ते. 🙏</Text>
          <Text style={styles.brandText}>jaiBababjiCab!</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/96/1D5B9E/user.png' }}
            style={[styles.avatarImage, { tintColor: '#1D5B9E' }]}
            resizeMode="cover"
          />
        </View>
      </LinearGradient>

      <ScrollView 
        contentContainerStyle={[
          styles.content, 
          { 
            paddingTop: Math.max(insets.top, 10) + 80,
            paddingBottom: Math.max(insets.bottom, 20) 
          }
        ]} 
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.screenTitle}>{t('booking_confirmed_rental')}</Text>

        <View style={styles.successIconContainer}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/96/ok--v1.png' }}
            style={styles.successIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.successDesc}>{t('booking_confirmed_desc')}</Text>

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
              <Text style={styles.addressText} numberOfLines={1}>{t('current_location', 'Current Location')}</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{t('booking_id')}: </Text>
            <Text style={styles.detailValue}>{bookingData.bookingId}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{t('package_label')}: </Text>
            <Text style={styles.detailValue}>{bookingData.packageDetails}</Text>
          </View>
          
          <View style={[styles.detailRow, { marginTop: 10 }]}>
            <Text style={styles.detailLabel}>{t('vehicle_label')}: </Text>
            <Text style={styles.detailValue}>{bookingData.vehicleName}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{t('vehicle_no_label')}: </Text>
            <Text style={styles.detailValue}>{bookingData.vehicleNo}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{t('total_amount_label')}: </Text>
            <Text style={styles.detailValue}>{bookingData.amount}</Text>
            <View style={styles.paidBadge}>
              <Text style={styles.paidText}>Paid / भुगतान किया गया</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{t('start_time')}: </Text>
            <Text style={styles.detailValue}>{bookingData.startTime}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{t('end_time')}: </Text>
            <Text style={styles.detailValue}>{bookingData.endTime}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.doneBtn}
          onPress={() => navigation.navigate('HomeMain')}
          activeOpacity={0.8}
        >
          <Text style={styles.doneBtnText}>Done / हो गया</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
