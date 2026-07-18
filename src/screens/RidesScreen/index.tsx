import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useRidesScreen } from './useRidesScreen';
import { styles } from './styles';

export function RidesScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const { 
    t, 
    rides, 
    summary, 
    handleBookAgain, 
    handleCardPress,
    handleRateDriver,
    handleViewAll 
  } = useRidesScreen({ navigation });

  return (
    <View style={styles.container}>
      {/* Header Gradient */}
      <LinearGradient
        colors={['#FCAE75', '#AEE1F9']}
        style={[styles.headerGradient, { paddingTop: Math.max(insets.top, 20) }]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
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

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.screenTitle}>{t('ride_history')}</Text>

        {rides.map((ride) => (
          <TouchableOpacity 
            key={ride.id} 
            style={styles.rideCard}
            onPress={() => handleCardPress(ride.id)}
            activeOpacity={0.9}
          >
            
            <View style={styles.rowTop}>
              <Text style={styles.dateText}>{ride.date}</Text>
              <View style={styles.statusBadgeYellow}>
                <Text style={styles.statusText}>{ride.status}</Text>
              </View>
            </View>

            <View style={styles.routeRow}>
              <Text style={styles.routeText} numberOfLines={1}>{ride.route}</Text>
              <Text style={styles.priceText}>₹{ride.price}</Text>
            </View>

            <View style={styles.vehicleRow}>
              <Text style={styles.vehicleText}>{ride.vehicle}</Text>
              <View style={styles.statusBadgeGreen}>
                <Text style={styles.statusText}>{ride.status}</Text>
              </View>
            </View>

            <View style={styles.driverRow}>
              <Text style={styles.driverText}>Driver: {ride.driver}</Text>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <TouchableOpacity 
                  style={[styles.bookAgainBtn, { backgroundColor: '#37497A', marginRight: 5 }]}
                  onPress={() => handleRateDriver(ride.id)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.bookAgainText}>{t('rate_driver')}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.bookAgainBtn}
                  onPress={() => handleBookAgain(ride.id)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.bookAgainText}>{t('book_again')}</Text>
                </TouchableOpacity>
              </View>
            </View>

          </TouchableOpacity>
        ))}

        <TouchableOpacity 
          style={styles.viewAllContainer}
          onPress={handleViewAll}
          activeOpacity={0.7}
        >
          <Text style={styles.viewAllText}>{t('view_all')}</Text>
        </TouchableOpacity>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>
            {t('total_rides_text', { count: summary.totalRides, spent: summary.totalSpent })}
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}
