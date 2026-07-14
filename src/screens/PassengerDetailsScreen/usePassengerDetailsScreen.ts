import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const usePassengerDetailsScreen = ({ navigation }: any = {}) => {
  const { t } = useTranslation();
  
  const [passengerName, setPassengerName] = useState('Rahul Singh / राहुल सिंह');
  const [adultsCount, setAdultsCount] = useState('2 Adults / 2 वयस्क');
  const [childrenCount, setChildrenCount] = useState('1 Child / 1 बच्चा');
  const [luggageType, setLuggageType] = useState('Medium / मध्यम');
  const [luggageCount, setLuggageCount] = useState('1 Suitcase / 1 सूटकेस');

  const passengerNameOptions = [
    { label: 'Rahul Singh / राहुल सिंह', value: 'Rahul Singh / राहुल सिंह' },
    { label: 'Priya Sharma / प्रिया शर्मा', value: 'Priya Sharma / प्रिया शर्मा' },
    { label: 'Amit Kumar / अमित कुमार', value: 'Amit Kumar / अमित कुमार' },
  ];

  const adultsCountOptions = [
    { label: '1 Adult / 1 वयस्क', value: '1 Adult / 1 वयस्क' },
    { label: '2 Adults / 2 वयस्क', value: '2 Adults / 2 वयस्क' },
    { label: '3 Adults / 3 वयस्क', value: '3 Adults / 3 वयस्क' },
    { label: '4 Adults / 4 वयस्क', value: '4 Adults / 4 वयस्क' },
  ];

  const childrenCountOptions = [
    { label: '0 Children / 0 बच्चे', value: '0 Children / 0 बच्चे' },
    { label: '1 Child / 1 बच्चा', value: '1 Child / 1 बच्चा' },
    { label: '2 Children / 2 बच्चे', value: '2 Children / 2 बच्चे' },
  ];

  const luggageTypeOptions = [
    { label: 'Small / छोटा', value: 'Small / छोटा' },
    { label: 'Medium / मध्यम', value: 'Medium / मध्यम' },
    { label: 'Large / बड़ा', value: 'Large / बड़ा' },
  ];

  const luggageCountOptions = [
    { label: '0 Suitcases / 0 सूटकेस', value: '0 Suitcases / 0 सूटकेस' },
    { label: '1 Suitcase / 1 सूटकेस', value: '1 Suitcase / 1 सूटकेस' },
    { label: '2 Suitcases / 2 सूटकेस', value: '2 Suitcases / 2 सूटकेस' },
    { label: '3 Suitcases / 3 सूटकेस', value: '3 Suitcases / 3 सूटकेस' },
  ];

  const summaryText = useMemo(() => {
    const adults = adultsCount.split(' ')[0];
    const children = childrenCount.split(' ')[0];
    const totalPax = parseInt(adults, 10) + parseInt(children, 10);
    const lugCount = luggageCount.split(' ')[0];
    const lugType = luggageType.split(' ')[0];
    
    return `Total Passengers: ${totalPax} (${adults} Adult${adults === '1' ? '' : 's'}, ${children} Child${children === '1' ? '' : 'ren'}), ${lugCount} ${lugType} Suitcase${lugCount === '1' ? '' : 's'}.`;
  }, [adultsCount, childrenCount, luggageCount, luggageType]);

  const handleProceed = () => {
    console.log('Proceeding with passenger details');
  };

  return {
    t,
    passengerName,
    setPassengerName,
    adultsCount,
    setAdultsCount,
    childrenCount,
    setChildrenCount,
    luggageType,
    setLuggageType,
    luggageCount,
    setLuggageCount,
    passengerNameOptions,
    adultsCountOptions,
    childrenCountOptions,
    luggageTypeOptions,
    luggageCountOptions,
    summaryText,
    handleProceed,
  };
};
