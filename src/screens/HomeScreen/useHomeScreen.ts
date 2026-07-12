import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useHomeScreen = ({ navigation }: any = {}) => {
  const { t, i18n } = useTranslation();
  const [selectedRide, setSelectedRide] = useState<'book_now' | 'schedule_later' | 'rental' | null>(null);

  const handleProceed = () => {
    if (selectedRide) {
      console.log('Proceeding with:', selectedRide);
      if (selectedRide === 'rental' && navigation) {
        navigation.navigate('RentalPackage');
      }
    }
  };

  return {
    t,
    i18n,
    selectedRide,
    setSelectedRide,
    handleProceed,
  };
};
