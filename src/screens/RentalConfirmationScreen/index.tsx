import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useRentalConfirmationScreen } from './useRentalConfirmationScreen';
import { styles } from './styles';

export function RentalConfirmationScreen({ navigation }: any) {
  const { t, bookingData, handleViewDetails } = useRentalConfirmationScreen({ navigation });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
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
            source={{ uri: 'https://img.icons8.com/ios-filled/96/1D5B9E/user.png' }}
            style={[styles.avatarImage, { tintColor: '#1D5B9E' }]}
            resizeMode="cover"
          />
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>{t('booking_confirmed_rental')}</Text>

        <View style={styles.successIconContainer}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/96/ok--v1.png' }}
            style={styles.successIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.successDesc}>{t('booking_confirmed_desc')}</Text>

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
          style={styles.viewDetailsButton} 
          onPress={handleViewDetails}
          activeOpacity={0.8}
        >
          <Text style={styles.viewDetailsText}>{t('view_rental_details')}</Text>
        </TouchableOpacity>

        <Text style={styles.footerDisclaimer}>{t('fare_estimated_footer')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
