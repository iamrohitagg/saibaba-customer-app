import { useTranslation } from 'react-i18next';

export const useRidesScreen = ({ navigation }: any) => {
  const { t } = useTranslation();

  const rides = [
    {
      id: '1',
      date: '25 Oct, 2:30 PM',
      route: 'Current Location to Durga Mandir Road',
      price: '680.00',
      vehicle: 'Mini / मिनी (BR 19C 1234)',
      driver: 'Rakesh Kumar',
      status: t('status_completed'),
    },
    {
      id: '2',
      date: '20 Oct, 10:15 AM',
      route: 'Station Road to City Mall',
      price: '850.00',
      vehicle: 'Sedan / सिडान (BR 19C 5678)',
      driver: 'Suresh Singh',
      status: t('status_completed'),
    },
    {
      id: '3',
      date: '15 Oct, 8:00 PM',
      route: 'Airport to Home',
      price: '1100.00',
      vehicle: 'SUV / एसयूवी (BR 19C 9012)',
      driver: 'Amit Sharma',
      status: t('status_completed'),
    },
  ];

  const summary = {
    totalRides: 45,
    totalSpent: '30,450.00',
  };

  const handleBookAgain = (id: string) => {
    console.log('Book again ride:', id);
  };

  const handleCardPress = (id: string) => {
    navigation.navigate('RideDetails', { rideId: id });
  };

  const handleRateDriver = (id: string) => {
    navigation.navigate('RateRide', { rideId: id });
  };

  const handleViewAll = () => {
    console.log('View all rides');
  };

  return {
    t,
    rides,
    summary,
    handleBookAgain,
    handleCardPress,
    handleRateDriver,
    handleViewAll,
  };
};
