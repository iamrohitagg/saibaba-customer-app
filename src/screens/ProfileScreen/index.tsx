import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useProfileScreen } from './useProfileScreen';
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
            <View style={styles.headerAvatarContainer}>
              <Image 
                source={{ uri: 'https://img.icons8.com/color/96/user-male-circle--v1.png' }} 
                style={styles.headerAvatar} 
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
                source={{ uri: 'https://img.icons8.com/color/150/user-male-circle--v1.png' }}
                style={styles.mainAvatar}
              />
              <View style={styles.cameraIconContainer}>
                <Text style={styles.cameraIcon}>📷</Text>
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
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
