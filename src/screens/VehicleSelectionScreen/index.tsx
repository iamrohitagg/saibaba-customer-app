import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useVehicleSelectionScreen } from './useVehicleSelectionScreen';
import { styles } from './styles';

export function VehicleSelectionScreen() {
  const { 
    t, 
    cars,
    selectedCarId,
    setSelectedCarId,
    buttonCarName,
    handleProceed,
  } = useVehicleSelectionScreen();

  return (
    <View style={styles.container}>
      {/* Header Gradient */}
      <LinearGradient
        colors={['#EAD0A8', '#AEE1F9']}
        style={styles.headerGradient}
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
        
        <View style={styles.topTextContainer}>
          <Text style={styles.screenTitle}>{t('select_ride_type_rental', 'Select Ride Type (Rental) / रेंटल के लिए गाड़ी चुनें')}</Text>
          <Text style={styles.packageText}>{t('package_selected', 'Package: 2 घंटे / 20 किमी (2 Hours / 20 km)')}</Text>
          <Text style={styles.priceText}>{t('base_price', 'Base Price: ₹599.00')}</Text>
        </View>

        {cars.map((car) => {
          const isSelected = selectedCarId === car.id;
          return (
            <TouchableOpacity 
              key={car.id}
              style={[styles.carCard, isSelected && styles.carCardSelected]}
              activeOpacity={0.8}
              onPress={() => setSelectedCarId(car.id)}
            >
              <View style={styles.carImageContainer}>
                <Image 
                  source={{ uri: car.image }} 
                  style={[styles.carImage, { tintColor: isSelected ? '#1E293B' : '#475569' }]}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.carInfoContainer}>
                <Text style={styles.carName}>{car.name}</Text>
                <Text style={styles.carSeats}>{car.seats}</Text>
                <Text style={styles.carPrice}>₹{car.price}</Text>
              </View>
              {isSelected && (
                <View style={styles.checkmarkContainer}>
                  <Image 
                    source={{ uri: 'https://img.icons8.com/ios-filled/96/22C55E/checkmark--v1.png' }}
                    style={styles.checkmarkIcon}
                  />
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        <View style={styles.divider} />

        <TouchableOpacity 
          style={styles.proceedBtn}
          onPress={handleProceed}
          activeOpacity={0.8}
        >
          <Text style={styles.proceedBtnText}>
            {t('book_dynamic', { car: buttonCarName, defaultValue: `Book ${buttonCarName} / ${buttonCarName} बुक करें` })}
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>{t('fare_estimated_footer', 'किराया अनुमानित है। अतिरिक्त किमी/घंटे के लिए लागू दरें (Fare is estimated. Additional km/hr rates apply)')}</Text>

      </ScrollView>
    </View>
  );
}
