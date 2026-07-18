import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  TextInput,
  Switch,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { useScheduleRideScreen } from './useScheduleRideScreen';
import { CustomDropdown } from '../../components/CustomDropdown';
import { styles } from './styles';

export function ScheduleRideScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const { 
    t, 
    date, setDate,
    time, setTime,
    bookForGuest, setBookForGuest,
    guestName, setGuestName,
    guestPhone, setGuestPhone,
    selectedPhoneOpt, setSelectedPhoneOpt,
    phoneOptions,
    handleConfirm 
  } = useScheduleRideScreen({ navigation });

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

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={[
            styles.content, 
            { 
              paddingTop: Math.max(insets.top, 20) + 110,
              paddingBottom: Math.max(insets.bottom, 20) 
            }
          ]} 
          showsVerticalScrollIndicator={false}
        >
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

          <Text style={styles.screenTitle}>{t('schedule_ride_title')}</Text>

          {/* Date Input */}
          <View style={styles.labelContainer}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/calendar.png' }} 
              style={styles.iconPlaceholder} 
            />
            <Text style={styles.labelText}>{t('date_label')}</Text>
          </View>
          <View style={styles.input}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios/96/1E293B/calendar.png' }} 
              style={styles.iconPlaceholder} 
            />
            <TextInput 
              placeholder={t('select_date')}
              placeholderTextColor="#666"
              value={date}
              onChangeText={setDate}
              style={{ flex: 1, padding: 0, fontSize: 16, color: '#333' }}
            />
          </View>

          {/* Time Input */}
          <View style={styles.labelContainer}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/clock.png' }} 
              style={styles.iconPlaceholder} 
            />
            <Text style={styles.labelText}>{t('time_label')}</Text>
          </View>
          <View style={styles.input}>
            <Image 
              source={{ uri: 'https://img.icons8.com/ios/96/1E293B/clock.png' }} 
              style={styles.iconPlaceholder} 
            />
            <TextInput 
              placeholder={t('select_time')}
              placeholderTextColor="#666"
              value={time}
              onChangeText={setTime}
              style={{ flex: 1, padding: 0, fontSize: 16, color: '#333' }}
            />
          </View>

          {/* Book for Guest Switch */}
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>{t('book_for_guest')}</Text>
            <Switch 
              value={bookForGuest} 
              onValueChange={setBookForGuest}
              trackColor={{ false: '#d3d3d3', true: '#37497A' }}
              thumbColor={'#FFF'}
            />
          </View>

          {/* Guest Details Card */}
          {bookForGuest && (
            <View style={styles.guestCard}>
              <View style={styles.guestCardTitleRow}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/add-user-male.png' }} 
                  style={styles.iconPlaceholder} 
                />
                <Text style={styles.guestCardTitle}>{t('guest_details')}</Text>
              </View>

              {/* Guest Name */}
              <View style={styles.labelContainer}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/user.png' }} 
                  style={styles.iconPlaceholder} 
                />
                <Text style={styles.labelText}>{t('guest_name')}</Text>
              </View>
              <View style={styles.input}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/user.png' }} 
                  style={styles.iconPlaceholder} 
                />
                <TextInput 
                  placeholder={t('enter_guest_name')}
                  placeholderTextColor="#666"
                  value={guestName}
                  onChangeText={setGuestName}
                  style={{ flex: 1, padding: 0, fontSize: 16, color: '#333' }}
                />
              </View>

              {/* Guest Phone Number */}
              <View style={styles.labelContainer}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/phone.png' }} 
                  style={styles.iconPlaceholder} 
                />
                <Text style={styles.labelText}>{t('guest_phone')}</Text>
              </View>
              <View style={[styles.input, { marginBottom: 0 }]}>
                <Image 
                  source={{ uri: 'https://img.icons8.com/ios-filled/96/1E293B/phone.png' }} 
                  style={styles.iconPlaceholder} 
                />
                <TextInput 
                  placeholder={t('enter_guest_phone')}
                  placeholderTextColor="#666"
                  value={guestPhone}
                  onChangeText={setGuestPhone}
                  keyboardType="phone-pad"
                  style={{ flex: 1, padding: 0, fontSize: 16, color: '#333' }}
                />
              </View>
            </View>
          )}

          {/* Phone Number Dropdown */}
          <Text style={[styles.labelText, { marginBottom: 8 }]}>{t('phone_number_label')}</Text>
          <CustomDropdown
            options={phoneOptions}
            selectedValue={selectedPhoneOpt}
            onSelect={setSelectedPhoneOpt}
            placeholder="0 / 0"
          />
          <View style={{ marginBottom: 20 }} />

          {/* Footer Note */}
          <Text style={styles.footerNote}>{t('note_fare_calculated')}</Text>

          {/* Confirm Button */}
          <TouchableOpacity 
            style={styles.confirmButton} 
            onPress={handleConfirm}
            activeOpacity={0.8}
          >
            <Text style={styles.confirmButtonText}>{t('confirm_schedule')}</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
