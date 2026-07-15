import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useVehicleSelectionScreen = ({ navigation, route }: any = {}) => {
  const { t } = useTranslation();
  const flow = route?.params?.flow;
  
  const cars = [
    {
      id: 'mini',
      name: t('car_mini', 'Mini / मिनी'),
      seats: t('seats_4', '4 सीटर (4 Seater)'),
      price: '599.00',
      image: 'https://img.icons8.com/ios-filled/96/1E293B/car.png'
    },
    {
      id: 'sedan',
      name: t('car_sedan', 'Sedan / सिडान'),
      seats: t('seats_4', '4 सीटर (4 Seater)'),
      price: '749.00',
      image: 'https://img.icons8.com/ios-filled/96/1E293B/sedan.png'
    },
    {
      id: 'suv',
      name: t('car_suv', 'SUV / एसयूवी'),
      seats: t('seats_6_7', '6-7 सीटर (6-7 Seater)'),
      price: '1099.00',
      image: 'https://img.icons8.com/ios-filled/96/1E293B/suv.png'
    }
  ];

  const [selectedCarId, setSelectedCarId] = useState<string>('mini');
  
  const selectedCar = cars.find(c => c.id === selectedCarId);
  // Extracted simple string, e.g. "Mini" for button title
  const buttonCarName = selectedCar ? selectedCar.name.split(' / ')[0] : 'Mini';

  const handleProceed = () => {
    if (navigation) {
      navigation.navigate('PassengerDetails', { flow });
    }
  };

  return {
    t,
    cars,
    selectedCarId,
    setSelectedCarId,
    buttonCarName,
    handleProceed,
  };
};
