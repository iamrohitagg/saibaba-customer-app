import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProfileScreen } from './useProfileScreen';
import { LanguageSelector } from '../../components/LanguageSelector';
import { styles } from './styles';

export function ProfileScreen() {
  const { t } = useProfileScreen();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.headerContainer}>
          {/* Using a placeholder for the background pattern shown in the mockup */}
          <Image 
            source={{ uri: 'https://via.placeholder.com/600x200/CCCCCC/999999?text=Pattern+Background' }}
            style={styles.headerBg}
            resizeMode="cover"
          />
          <View style={styles.headerOverlay}>
            <View>
              <Text style={styles.headerGreeting}>नमस्ते !</Text>
              <Text style={styles.headerBrand}>jaiBababjiCab!</Text>
            </View>
            <View style={styles.headerAvatarWrapper}>
              <Image 
                source={{ uri: 'https://img.icons8.com/ios-filled/96/1D5B9E/user.png' }}
                style={[styles.headerAvatar, { tintColor: '#1D5B9E' }]} 
              />
            </View>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>{t('profile_image_title')}</Text>

          {/* Profile Image Card */}
          <View style={styles.card}>
            
            {/* Avatar */}
            <View style={styles.avatarWrapper}>
              <Image 
                source={{ uri: 'https://img.icons8.com/ios-filled/150/1D5B9E/user.png' }}
                style={[styles.mainAvatar, { tintColor: '#1D5B9E' }]}
              />
              <View style={styles.cameraIconContainer}>
                <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/FFFFFF/camera.png' }} style={{width: 16, height: 16, tintColor: '#FFFFFF'}} />
              </View>
            </View>

            {/* Buttons */}
            <TouchableOpacity style={styles.uploadBtn} activeOpacity={0.8}>
              <Text style={styles.uploadBtnText}>{t('upload_gallery')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.takePhotoBtn} activeOpacity={0.8}>
              <Text style={styles.takePhotoBtnText}>{t('take_photo')}</Text>
            </TouchableOpacity>

            {/* Help Text */}
            <Text style={styles.helpText}>{t('photo_help_text')}</Text>
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveBtn} activeOpacity={0.8}>
            <Text style={styles.saveBtnText}>{t('save_profile')}</Text>
          </TouchableOpacity>

          {/* Language Selection */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionTitle}>{t('select_language')}</Text>
            <LanguageSelector />
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
