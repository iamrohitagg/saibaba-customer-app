import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../store/auth/authSlice';
import { isValidEmail } from '../../utils/validations';

export const useProfileSetupScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | null>(null);

  const handleSave = () => {
    if (!isValidEmail(email)) {
      setEmailError(t('invalid_email', 'Please enter a valid email address.'));
      return;
    }
    setEmailError('');
    
    dispatch(setIsLoggedIn(true));
    // Navigate to dashboard
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });
  };

  return {
    t,
    fullName,
    setFullName,
    email,
    setEmail,
    emailError,
    setEmailError,
    gender,
    setGender,
    handleSave,
  };
};
