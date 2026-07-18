import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { useVehicleSelectionScreen } from './useVehicleSelectionScreen';
import { styles } from './styles';

export function VehicleSelectionScreen({ navigation, route }: any) {
  const insets = useSafeAreaInsets();
  const { 
    t, 
    cars,
    selectedCarId,
    setSelectedCarId,
    buttonCarName,
    handleProceed,
  } = useVehicleSelectionScreen({ navigation, route });

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
