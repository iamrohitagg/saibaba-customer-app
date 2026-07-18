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
import { useRentalPackageScreen } from './useRentalPackageScreen';
import { styles } from './styles';

export function RentalPackageScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const { 
    t, 
    packages,
    selectedId,
    setSelectedId,
    handleProceed
  } = useRentalPackageScreen({ navigation });

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

        <Text style={styles.screenTitle}>{t('select_rental_package')}</Text>

        {packages.map((pkg) => {
          const isSelected = pkg.id === selectedId;
          
          return (
            <TouchableOpacity 
              key={pkg.id} 
              style={[styles.packageCard, isSelected && styles.packageCardSelected]}
              activeOpacity={0.9}
              onPress={() => setSelectedId(pkg.id)}
            >
              {isSelected && (
                <View style={styles.checkmarkContainer}>
                  <Image 
                    source={{ uri: 'https://img.icons8.com/ios-filled/96/1D5B9E/checkmark.png' }} 
                    style={[styles.checkmark, { tintColor: '#1D5B9E' }]} 
                  />
                </View>
              )}
              
              <Text style={styles.packageTitle}>{pkg.title}</Text>
              <Text style={styles.packageDesc}>{pkg.desc}</Text>
              <Text style={styles.packagePrice}>₹{pkg.price}</Text>
            </TouchableOpacity>
          );
        })}

        <Text style={styles.footerText}>{t('additional_rates')}</Text>

        <TouchableOpacity 
          style={styles.proceedBtn}
          onPress={handleProceed}
          activeOpacity={0.8}
        >
          <Text style={styles.proceedBtnText}>{t('proceed_btn')}</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
