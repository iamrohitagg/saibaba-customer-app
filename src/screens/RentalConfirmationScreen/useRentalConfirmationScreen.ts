import { useTranslation } from 'react-i18next';

export const useRentalConfirmationScreen = ({ navigation }: any = {}) => {
  const { t } = useTranslation();

  // Hardcoded values for now as per design mockup
  const bookingData = {
    bookingId: 'RB123456',
    packageDetails: '2 Hours / 20 km',
    vehicleName: 'Mini',
    vehicleNo: 'BR 19C 1234',
    amount: '₹599.00',
    startTime: '26 Oct, 10:00 AM',
    endTime: '26 Oct, 12:00 PM',
  };

  const handleViewDetails = () => {
    navigation.popToTop(); // Go back to Home Main as a placeholder for now
  };

  return {
    t,
    bookingData,
    handleViewDetails,
  };
};
