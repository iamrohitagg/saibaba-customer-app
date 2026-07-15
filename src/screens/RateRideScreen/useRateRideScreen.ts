import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useRateRideScreen = ({ navigation }: any = {}) => {
  const { t } = useTranslation();

  const [rating, setRating] = useState<number>(0);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [comments, setComments] = useState<string>('');

  const toggleChip = (chip: string) => {
    setSelectedChips(prev => 
      prev.includes(chip) 
        ? prev.filter(c => c !== chip) 
        : [...prev, chip]
    );
  };

  const chips = [
    { id: 'excellent_car', label: t('rate_excellent_car') },
    { id: 'polite_driver', label: t('rate_polite_driver') },
    { id: 'clean_interior', label: t('rate_clean_interior') },
    { id: 'on_time', label: t('rate_on_time') },
    { id: 'safe_drive', label: t('rate_safe_drive') },
  ];

  // Dummy driver info for now
  const driverInfo = {
    name: 'Rakesh Kumar',
    vehicle: 'Mini (BR 19C 1234)',
    amount: '₹707.70',
    avatar: 'https://img.icons8.com/color/96/circled-user-male-skin-type-4--v1.png'
  };

  const handleSubmit = () => {
    console.log('Submitted review:', { rating, selectedChips, comments });
    navigation.goBack();
  };

  return {
    t,
    rating, setRating,
    selectedChips, toggleChip,
    comments, setComments,
    chips,
    driverInfo,
    handleSubmit
  };
};
