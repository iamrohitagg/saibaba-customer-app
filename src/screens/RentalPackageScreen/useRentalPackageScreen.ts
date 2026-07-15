import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useRentalPackageScreen = ({ navigation, route }: any = {}) => {
  const { t } = useTranslation();
  const flow = route?.params?.flow;

  const packages = [
    {
      id: '2h_20km',
      title: t('rental_pkg_2h'),
      desc: t('rental_desc_2h'),
      price: '599.00',
    },
    {
      id: '4h_40km',
      title: t('rental_pkg_4h'),
      desc: t('rental_desc_4h'),
      price: '999.00',
    },
    {
      id: '8h_80km',
      title: t('rental_pkg_8h'),
      desc: t('rental_desc_8h'),
      price: '1699.00',
    },
  ];

  const [selectedId, setSelectedId] = useState<string>('2h_20km');

  const handleProceed = () => {
    if (navigation) {
      navigation.navigate('VehicleSelection', { flow });
    }
  };

  return {
    t,
    packages,
    selectedId,
    setSelectedId,
    handleProceed,
  };
};
