import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useOtpScreen, OTP_LENGTH } from './useOtpScreen';
import { styles } from './styles';

export function OtpScreen({ navigation, route }: any) {
  const {
    t,
    otp,
    setOtp,
    isFocused,
    setIsFocused,
    isKeyboardVisible,
    inputRef,
    last4,
    handleVerify
  } = useOtpScreen({ navigation, route });

  const renderOtpBoxes = () => {
    const boxes = [];
    for (let i = 0; i < OTP_LENGTH; i++) {
      const char = otp[i] || '';
      const isCurrentFocus = isFocused && otp.length === i;
      const isLastFilled = isFocused && otp.length === OTP_LENGTH && i === OTP_LENGTH - 1;
      const isActive = isCurrentFocus || isLastFilled;

      boxes.push(
        <View 
          key={i} 
          style={[
            styles.otpBox, 
            isActive && styles.otpBoxActive
          ]}
        >
          {char ? (
            <Text style={styles.otpText}>{char}</Text>
          ) : (
            <View style={styles.otpDot} />
          )}
        </View>
      );
    }
    return boxes;
  };

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
              {t('otp_title_start')}
              <Text style={styles.titleHighlight}>{t('otp_title_highlight')}</Text>
              {t('otp_title_end')}
            </Text>
            
            <Text style={styles.instructionMain}>{t('enter_otp')}</Text>
            <Text style={styles.instructionSub}>{t('enter_otp_instruction')}</Text>
            <Text style={styles.instructionSub}>{t('otp_sent_to', { last4 })}</Text>
          </View>

          {/* OTP Input Section */}
          <View style={styles.otpContainerWrapper}>
            <TouchableOpacity 
              activeOpacity={1} 
              onPress={() => inputRef.current?.focus()}
              style={styles.otpBoxesContainer}
            >
              {renderOtpBoxes()}
            </TouchableOpacity>

            <TextInput
              ref={inputRef}
              style={styles.hiddenInput}
              keyboardType="number-pad"
              maxLength={OTP_LENGTH}
              value={otp}
              onChangeText={setOtp}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              textContentType="oneTimeCode"
            />
          </View>

          {/* Status Section */}
          <View style={styles.statusContainer}>
            <View style={styles.waitingContainer}>
              <ActivityIndicator size="small" color="#999999" style={{marginRight: 8}} />
              <Text style={styles.waitingText}>{t('waiting_for_otp')}</Text>
            </View>
            <View style={styles.autoReadContainer}>
              <View style={styles.checkCircle}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <Text style={styles.autoReadText}>{t('auto_read_enabled')}</Text>
            </View>
          </View>

          {/* Button */}
          <TouchableOpacity 
            style={[
              styles.buttonWrapper,
              otp.length !== OTP_LENGTH && styles.buttonDisabled
            ]}
            onPress={handleVerify}
            activeOpacity={0.8}
            disabled={otp.length !== OTP_LENGTH}
          >
            <LinearGradient
              colors={['#EBB771', '#D4924A']}
              style={styles.buttonGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            >
              <Text style={styles.buttonText}>{t('verify_btn')}</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Resend OTP */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>
              {t('didnt_receive_otp')} (0:30)
            </Text>
          </View>

        </View>

        {/* Footer - hide when keyboard is open to prevent overlapping the button */}
        {!isKeyboardVisible && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>{t('splash_footer_1')}</Text>
            <Text style={styles.footerText}>{t('splash_footer_2')}</Text>
          </View>
        )}

      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
