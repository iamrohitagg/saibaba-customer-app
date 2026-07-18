import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';

export const OffersScreen = () => {
  const { t, i18n } = useTranslation();
  const [couponCode, setCouponCode] = useState('');
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>('SAVE20');

  const coupons = [
    {
      id: 'SAVE20',
      title: 'SAVE20',
      titleSuffixEn: ' (Selected)',
      titleSuffixHi: ' (चयनित)',
      descriptionEn: 'Get 20% off on your next 2 rides! (Max ₹100)',
      descriptionHi: 'अगली 2 राइड पर 20% की छूट पाएं! (अधिकतम ₹100)',
      validityEn: 'Valid till 31 Oct',
      validityHi: '31 अक्टूबर तक वैध',
    },
    {
      id: 'FIRST150',
      title: 'FIRST150',
      titleSuffixEn: '',
      titleSuffixHi: '',
      descriptionEn: 'Get ₹150 off on your first ride!',
      descriptionHi: 'अपनी पहली राइड पर ₹150 की छूट पाएं!',
      validityEn: 'Valid for new users only',
      validityHi: 'केवल नए उपयोगकर्ताओं के लिए',
    },
    {
      id: 'MONDEAL',
      title: 'MONDEAL',
      titleSuffixEn: '',
      titleSuffixHi: '',
      descriptionEn: 'Flat ₹50 off on all Monday rides!',
      descriptionHi: 'सभी सोमवार की राइड पर फ्लैट ₹50 की छूट!',
      validityEn: 'Valid on Mondays only',
      validityHi: 'केवल सोमवार को वैध',
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header Banner */}
        <View style={styles.headerBanner}>
          <Text style={styles.headerTextHi}>नमस्ते.</Text>
          <Text style={styles.headerTextEn}>jaiBababjiCab!</Text>
          <View style={styles.avatarPlaceholder} />
        </View>

        {/* Apply Coupon Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('apply_coupon')}</Text>
          <Text style={styles.label}>{t('enter_coupon_code')}</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={t('enter_coupon_code')}
              placeholderTextColor="#888"
              value={couponCode}
              onChangeText={setCouponCode}
            />
            {couponCode.length > 0 && (
              <TouchableOpacity onPress={() => setCouponCode('')} style={styles.clearButton}>
                <Text style={styles.clearText}>✕</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>{t('apply_coupon')}</Text>
          </TouchableOpacity>
        </View>

        {/* Available Coupons Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('available_coupons')}</Text>
          
          {coupons.map((coupon) => {
            const isSelected = selectedCoupon === coupon.id;
            return (
              <TouchableOpacity 
                key={coupon.id} 
                style={[
                  styles.couponCard, 
                  isSelected ? styles.couponCardSelected : styles.couponCardUnselected
                ]}
                onPress={() => setSelectedCoupon(coupon.id)}
                activeOpacity={0.8}
              >
                <View style={styles.couponHeader}>
                  {isSelected && (
                    <View style={styles.checkCircle}>
                      <Text style={styles.checkMark}>✓</Text>
                    </View>
                  )}
                  <Text style={[styles.couponTitle, { marginLeft: isSelected ? 8 : 0 }]}>
                    {coupon.title}{isSelected ? (i18n.language === 'hi' ? coupon.titleSuffixHi : coupon.titleSuffixEn) : ''}
                  </Text>
                </View>
                <Text style={styles.couponDescription}>
                  {i18n.language === 'hi' ? coupon.descriptionHi : coupon.descriptionEn}
                </Text>
                <Text style={styles.couponValidity}>
                  {i18n.language === 'hi' ? coupon.validityHi : coupon.validityEn}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom Payable Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomBarText}>
          {i18n.language === 'hi' ? 'कुल देय: ₹530.00 (कूपन लागू किया गया)' : 'Total Payable: ₹530.00 (Coupon Applied)'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF7F2',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  headerBanner: {
    height: 100,
    backgroundColor: '#E5D8CD',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  headerTextHi: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 5,
  },
  headerTextEn: {
    fontSize: 18,
    color: '#333',
    marginTop: 6,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#CCC',
    position: 'absolute',
    right: 20,
    top: 30,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
    fontWeight: '600'
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 48,
    color: '#000',
    fontSize: 14,
  },
  clearButton: {
    padding: 8,
  },
  clearText: {
    fontSize: 16,
    color: '#666',
  },
  applyButton: {
    backgroundColor: '#384B70',
    borderRadius: 25,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  applyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  couponCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  couponCardSelected: {
    borderColor: '#93C5AA',
    backgroundColor: '#EAF5F0',
  },
  couponCardUnselected: {
    borderColor: '#C6D8E6',
    backgroundColor: '#F0F6FA',
  },
  couponHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#34A853',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  couponDescription: {
    fontSize: 13,
    color: '#333',
    marginBottom: 6,
    lineHeight: 18,
  },
  couponValidity: {
    fontSize: 12,
    color: '#555',
  },
  bottomBar: {
    backgroundColor: '#FAF3EA',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#EED9C4',
  },
  bottomBarText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500'
  },
});
