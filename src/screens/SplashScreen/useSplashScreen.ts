import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const useSplashScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const hasSelectedLanguage = useSelector((state: RootState) => state.auth.hasSelectedLanguage);

  useEffect(() => {
    // Navigate based on auth status after 3 seconds
    const timer = setTimeout(() => {
      if (!hasSelectedLanguage) {
        navigation.replace('LanguageSelection');
      } else if (isLoggedIn) {
        navigation.replace('MainTabs');
      } else {
        navigation.replace('Login');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, isLoggedIn, hasSelectedLanguage]);

  return {
    t,
  };
};
