import { useTranslation } from 'react-i18next';

export const useRideDetailsScreen = ({ route }: any) => {
  const { t } = useTranslation();

  // In a real app, fetch details using route.params?.rideId
  // For now, mocking the data from the screenshot
  const rideData = {
    date: '25 Oct, 2:30 PM',
    distance: '2.5 km', // Approximation of the mangled text "2.10es"
    status: t('status_completed'),
    fare: {
      tollsTaxes: '80.00',
      totalPaid: '680.00',
    },
    vehicle: {
      type: 'Mini / मिनी',
      licensePlate: 'BR 19C 1234',
    },
    driver: {
      name: 'Rakesh Kumar',
      rating: '4.8',
    },
    passenger: {
      name: 'राहुल सिंह',
      phone: '+91 98765 43210',
    },
    luggage: {
      type: 'Medium Suitcase',
      quantity: '1 Unit',
    },
    route: {
      pickup: 'Current Location\nCurcur Nandir Road 7 Exeetl, Bonio Road& &; 33...',
      drop: 'Durga Mandir Road\nDurga Mandir Road 8 BK, B8S 8, 51R Kaolon, VI ...',
      distance: '14.5 km',
    }
  };

  const handleBookAgain = () => {
    console.log('Book again pressed');
  };

  const handleDownloadInvoice = () => {
    console.log('Download invoice pressed');
  };

  return {
    t,
    rideData,
    handleBookAgain,
    handleDownloadInvoice,
  };
};
