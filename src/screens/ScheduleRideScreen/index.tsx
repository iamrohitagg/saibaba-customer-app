import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  TextInput,
  Switch
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useScheduleRideScreen } from './useScheduleRideScreen';
import { CustomDropdown } from '../../components/CustomDropdown';
import { styles } from './styles';

export function ScheduleRideScreen({ navigation }: any) {
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
            style={{ flex: 1, padding: 0, fontSize: 16 }}
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
            style={{ flex: 1, padding: 0, fontSize: 16 }}
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
                style={{ flex: 1, padding: 0, fontSize: 16 }}
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
                style={{ flex: 1, padding: 0, fontSize: 16 }}
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
    </SafeAreaView>
  );
}
