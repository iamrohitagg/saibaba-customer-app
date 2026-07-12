import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useProfileSetupScreen } from './useProfileSetupScreen';
import { styles } from './styles';

export function ProfileSetupScreen({ navigation }: any) {
  const {
    t,
    fullName,
    setFullName,
    email,
    setEmail,
    gender,
    setGender,
    handleSave,
  } = useProfileSetupScreen({ navigation });

  return (
    <LinearGradient
      colors={['#0F2B5B', '#153A73', '#3A334B', '#924A22']}
      locations={[0, 0.4, 0.7, 1]}
      style={styles.container}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Logo Placeholder */}
          <View style={styles.logoContainer}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/200x80/00000000/E5B26F?text=Logo' }}
              style={styles.logoAsset}
              resizeMode="contain"
            />
          </View>

          {/* Titles */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleMain}>{t('profile_setup_title')}</Text>
            <Text style={styles.instructionSub}>{t('profile_setup_subtitle')}</Text>
          </View>

          {/* Form Card */}
          <View style={styles.formCard}>
            
            {/* Full Name */}
            <Text style={styles.label}>{t('full_name')}</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>👤</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder={t('full_name_placeholder')}
                placeholderTextColor="#A0A0A0"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* Email Address */}
            <Text style={styles.label}>{t('email_address')}</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>✉️</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder={t('email_placeholder')}
                placeholderTextColor="#A0A0A0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Gender Selection */}
            <Text style={styles.label}>{t('choose_gender')}</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity 
                style={[styles.genderOption, styles.genderOptionLeft]}
                onPress={() => setGender('male')}
              >
                {gender === 'male' ? (
                  <LinearGradient colors={['#EBB771', '#D4924A']} style={styles.genderGradient}>
                    <Text style={styles.genderIcon}>🧍‍♂️</Text>
                    <Text style={[styles.genderText, styles.genderTextActive]}>{t('gender_male')}</Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.genderInner}>
                    <Text style={styles.genderIcon}>🧍‍♂️</Text>
                    <Text style={styles.genderText}>{t('gender_male')}</Text>
                  </View>
                )}
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.genderOption, styles.genderOptionCenter]}
                onPress={() => setGender('female')}
              >
                {gender === 'female' ? (
                  <LinearGradient colors={['#EBB771', '#D4924A']} style={styles.genderGradient}>
                    <Text style={styles.genderIcon}>🧍‍♀️</Text>
                    <Text style={[styles.genderText, styles.genderTextActive]}>{t('gender_female')}</Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.genderInner}>
                    <Text style={styles.genderIcon}>🧍‍♀️</Text>
                    <Text style={styles.genderText}>{t('gender_female')}</Text>
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.genderOption, styles.genderOptionRight]}
                onPress={() => setGender('other')}
              >
                {gender === 'other' ? (
                  <LinearGradient colors={['#EBB771', '#D4924A']} style={styles.genderGradient}>
                    <Text style={styles.genderIcon}>💬</Text>
                    <Text style={[styles.genderText, styles.genderTextActive]}>{t('gender_other')}</Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.genderInner}>
                    <Text style={styles.genderIcon}>💬</Text>
                    <Text style={styles.genderText}>{t('gender_other')}</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Save Button */}
          <TouchableOpacity 
            style={[
              styles.buttonWrapper,
              (!fullName || !email || !gender) && styles.buttonDisabled
            ]}
            onPress={handleSave}
            activeOpacity={0.8}
            disabled={!fullName || !email || !gender}
          >
            <LinearGradient
              colors={['#EBB771', '#D4924A']}
              style={styles.buttonGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            >
              <Text style={styles.buttonText}>{t('save_proceed')}</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Your Trusted Cab Partner. © 2024 jaiBababjiCab. All rights reserved.</Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
