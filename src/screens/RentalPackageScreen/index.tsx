import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRentalPackageScreen } from './useRentalPackageScreen';
import { styles } from './styles';

export function RentalPackageScreen() {
  const { 
    t, 
    packages,
    selectedId,
    setSelectedId,
    handleProceed
  } = useRentalPackageScreen();

  return (
    <View style={styles.container}>
      {/* Header Gradient */}
      <LinearGradient
        colors={['#FCAE75', '#AEE1F9']}
        style={styles.headerGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>नमस्ते. 🙏</Text>
          <Text style={styles.brandText}>jaiBababjiCab!</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://img.icons8.com/color/96/user-male-circle--v1.png' }}
            style={styles.avatarImage}
            resizeMode="cover"
          />
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.screenTitle}>{t('select_rental_package')}</Text>

        {packages.map((pkg) => {
          const isSelected = pkg.id === selectedId;
          
          return (
            <TouchableOpacity 
              key={pkg.id} 
              style={[styles.packageCard, isSelected && styles.packageCardSelected]}
              activeOpacity={0.9}
              onPress={() => setSelectedId(pkg.id)}
            >
              {isSelected && (
                <View style={styles.checkmarkContainer}>
                  <Image 
                    source={{ uri: 'https://img.icons8.com/color/96/ok--v1.png' }} 
                    style={styles.checkmark} 
                  />
                </View>
              )}
              
              <Text style={styles.packageTitle}>{pkg.title}</Text>
              <Text style={styles.packageDesc}>{pkg.desc}</Text>
              <Text style={styles.packagePrice}>₹{pkg.price}</Text>
            </TouchableOpacity>
          );
        })}

        <Text style={styles.footerText}>{t('additional_rates')}</Text>

        <TouchableOpacity 
          style={styles.proceedBtn}
          onPress={handleProceed}
          activeOpacity={0.8}
        >
          <Text style={styles.proceedBtnText}>{t('proceed_btn')}</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
