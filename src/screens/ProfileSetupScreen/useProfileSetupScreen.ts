import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../store/auth/authSlice';

export const useProfileSetupScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | null>(null);

  const handleSave = () => {
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
    gender,
    setGender,
    handleSave,
  };
};
