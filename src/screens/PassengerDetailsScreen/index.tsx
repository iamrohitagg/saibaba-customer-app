import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { usePassengerDetailsScreen } from './usePassengerDetailsScreen';
import { CustomDropdown } from '../../components/CustomDropdown';
import { styles } from './styles';

export function PassengerDetailsScreen({ navigation, route }: any) {
  const { 
    t, 
    passengerName, setPassengerName,
    adultsCount, setAdultsCount,
    childrenCount, setChildrenCount,
    luggageType, setLuggageType,
    luggageCount, setLuggageCount,
    passengerNameOptions,
    adultsCountOptions,
    childrenCountOptions,
    luggageTypeOptions,
    luggageCountOptions,
    summaryText,
    handleProceed,
  } = usePassengerDetailsScreen({ navigation, route });

  return (
    <View style={styles.container}>
      {/* Header Gradient */}
      <LinearGradient
        colors={['#FCAE75', '#AEE1F9']}
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
        
        <Text style={styles.screenTitle}>{t('trip_luggage_details', 'यात्रा और सामान का विवरण')}</Text>

        <Text style={styles.label}>{t('passenger_name', 'यात्री का नाम (Passenger Name)')}</Text>
        <CustomDropdown 
          options={passengerNameOptions} 
          selectedValue={passengerName} 
          onSelect={setPassengerName} 
        />

        <Text style={styles.label}>{t('adults_count', 'वयस्कों की संख्या (Adults Count)')}</Text>
        <CustomDropdown 
          options={adultsCountOptions} 
          selectedValue={adultsCount} 
          onSelect={setAdultsCount} 
        />

        <Text style={styles.label}>{t('children_count', 'बच्चों की संख्या (Children Count)')}</Text>
        <CustomDropdown 
          options={childrenCountOptions} 
          selectedValue={childrenCount} 
          onSelect={setChildrenCount} 
        />

        <Text style={styles.label}>{t('luggage_type_label', 'सामान का प्रकार (Luggage Type)')}</Text>
        <CustomDropdown 
          options={luggageTypeOptions} 
          selectedValue={luggageType} 
          onSelect={setLuggageType} 
        />

        <Text style={styles.label}>{t('luggage_count_label', 'सामान की संख्या (Luggage Count)')}</Text>
        <CustomDropdown 
          options={luggageCountOptions} 
          selectedValue={luggageCount} 
          onSelect={setLuggageCount} 
        />

        <View style={styles.divider} />

        <Text style={styles.summaryText}>{summaryText}</Text>

        <TouchableOpacity 
          style={styles.proceedBtn}
          onPress={handleProceed}
          activeOpacity={0.8}
        >
          <Text style={styles.proceedBtnText}>{t('confirm_details', 'विवरण की पुष्टि करें और आगे बढ़ें\n(Confirm Details & Proceed)')}</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>{t('fare_estimated', 'Fare is estimated and may vary. / किराया अनुमानित है।')}</Text>

      </ScrollView>
    </View>
  );
}
