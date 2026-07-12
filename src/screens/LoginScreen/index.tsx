import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useLoginScreen } from './useLoginScreen';
import { styles } from './styles';

export function LoginScreen({ navigation }: any) {
  const {
    t,
    phoneNumber,
    setPhoneNumber,
    isFocused,
    setIsFocused,
    handleGetOtp
  } = useLoginScreen({ navigation });

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
        <View style={styles.content}>
          {/* Logo Placeholder */}
          <View style={styles.logoContainer}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/150x80/00000000/E5B26F?text=Logo' }}
              style={styles.logoAsset}
              resizeMode="contain"
            />
          </View>

          {/* Titles */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleMain}>
              {t('login_title_start')}
              <Text style={styles.titleHighlight}>{t('login_title_highlight')}</Text>
              {t('login_title_end')}
            </Text>
            <Text style={styles.subtitle}>{t('login_subtitle')}</Text>
          </View>

          {/* Input Box */}
          <View style={styles.inputContainerOuter}>
            <View style={styles.inputContainerInner}>
              <TouchableOpacity style={styles.countryCodeSelector} activeOpacity={0.7}>
                <Text style={styles.flagIcon}>🇮🇳</Text>
                <Text style={styles.countryCodeText}>+91</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
              </TouchableOpacity>
              
              <View style={styles.divider} />

              <View style={styles.textInputWrapper}>
                {(!isFocused && phoneNumber === '') && (
                  <View style={styles.placeholderContainer} pointerEvents="none">
                    <Text style={styles.placeholder}>{t('mobile_placeholder')}</Text>
                  </View>
                )}
                <TextInput
                  style={styles.textInput}
                  keyboardType="phone-pad"
                  maxLength={10}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  selectionColor="#E5B26F"
                />
              </View>
            </View>
          </View>

          {/* Button */}
          <TouchableOpacity 
            style={styles.buttonWrapper}
            onPress={handleGetOtp}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#EBB771', '#D4924A']}
              style={styles.buttonGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            >
              <Text style={styles.buttonText}>{t('get_otp')}</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Other Login Method */}
          <View style={styles.otherLoginContainer}>
            <Text style={styles.otherLoginText}>{t('other_login')}</Text>
          </View>

        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
