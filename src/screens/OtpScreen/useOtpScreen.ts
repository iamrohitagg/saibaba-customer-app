import { useState, useRef, useEffect } from 'react';
import { Keyboard, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../store/auth/authSlice';

export const OTP_LENGTH = 6;

export const useOtpScreen = ({ navigation, route }: any) => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();

  // Fallback if accessed without params
  const phoneNumber = route?.params?.phoneNumber || '9999999999';
  const last4 = phoneNumber.slice(-4);

  // Auto focus on mount and keyboard listeners
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 500);

    return () => {
      clearTimeout(timeout);
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleVerify = () => {
    if (otp.length === OTP_LENGTH) {
      Keyboard.dismiss();
      
      // Simulate checking if user exists
      const userExists = true; // Use true for now to simulate "already logged in"
      
      if (userExists) {
        dispatch(setIsLoggedIn(true));
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'ProfileSetup' }],
        });
      }
    }
  };

  return {
    t,
    otp,
    setOtp,
    isFocused,
    setIsFocused,
    isKeyboardVisible,
    inputRef,
    last4,
    handleVerify,
  };
};
