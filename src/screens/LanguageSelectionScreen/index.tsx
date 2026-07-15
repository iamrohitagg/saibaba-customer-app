import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { LanguageSelector } from '../../components/LanguageSelector';
import { completeLanguageSelection } from '../../store/auth/authSlice';
import LinearGradient from 'react-native-linear-gradient';

export function LanguageSelectionScreen({ navigation }: any) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(completeLanguageSelection());
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FCAE75', '#AEE1F9']}
        style={styles.headerGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <View style={styles.brandContainer}>
          <Text style={styles.brandText}>jaiBababjiCab!</Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://img.icons8.com/color/150/language.png' }}
            style={styles.languageIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>{t('select_language')}</Text>
        <Text style={styles.subtitle}>Choose your preferred language / अपनी पसंदीदा भाषा चुनें</Text>
        
        <LanguageSelector />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue} activeOpacity={0.8}>
          <Text style={styles.continueText}>{t('continue')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerGradient: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  brandContainer: {
    alignItems: 'center',
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D5B9E',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  languageIcon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
  },
  footer: {
    padding: 24,
  },
  continueButton: {
    backgroundColor: '#1D5B9E',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
