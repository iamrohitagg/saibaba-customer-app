import { useState } from 'react';
import { Platform, ToastAndroid, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const useLoginScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleGetOtp = () => {
    // Zod schema for 10-digit Indian phone number
    const phoneSchema = z.string().regex(/^[0-9]{10}$/);
    const result = phoneSchema.safeParse(phoneNumber);

    if (!result.success) {
      if (Platform.OS === 'android') {
        ToastAndroid.show(t('error_invalid_phone'), ToastAndroid.SHORT);
      } else {
        Alert.alert(t('error'), t('error_invalid_phone'));
      }
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show(t('success_otp_sent'), ToastAndroid.SHORT);
      } else {
        Alert.alert('Success', t('success_otp_sent'));
      }
      navigation.navigate('Otp', { phoneNumber });
    }
  };

  return {
    t,
    phoneNumber,
    setPhoneNumber,
    isFocused,
    setIsFocused,
    handleGetOtp,
  };
};
