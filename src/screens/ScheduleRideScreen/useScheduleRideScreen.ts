import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useScheduleRideScreen = ({ navigation }: any = {}) => {
  const { t } = useTranslation();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookForGuest, setBookForGuest] = useState(true);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  
  // Dummy options for Phone Number dropdown matching the 0 / 0 seen in screenshot
  const [selectedPhoneOpt, setSelectedPhoneOpt] = useState('0 / 0');
  const phoneOptions = [
    { label: '0 / 0', value: '0 / 0' },
    { label: '+91 / +91', value: '+91 / +91' }
  ];

  const handleConfirm = () => {
    console.log('Confirmed Schedule:', { date, time, bookForGuest, guestName, guestPhone, selectedPhoneOpt });
    // Go back to HomeMain or pop to top
    navigation.popToTop();
  };

  return {
    t,
    date, setDate,
    time, setTime,
    bookForGuest, setBookForGuest,
    guestName, setGuestName,
    guestPhone, setGuestPhone,
    selectedPhoneOpt, setSelectedPhoneOpt,
    phoneOptions,
    handleConfirm
  };
};
