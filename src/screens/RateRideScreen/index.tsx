import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useRateRideScreen } from './useRateRideScreen';
import { styles } from './styles';

export function RateRideScreen({ navigation }: any) {
  const { 
    t, 
    rating, setRating,
    selectedChips, toggleChip,
    comments, setComments,
    chips,
    driverInfo,
    handleSubmit 
  } = useRateRideScreen({ navigation });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#FCAE75', '#AEE1F9']}
        style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>नमस्ते. 🙏</Text>
          <Text style={styles.brandText}>jaiBababjiCab!</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/96/1D5B9E/user.png' }}
            style={[styles.avatarImage, { tintColor: '#1D5B9E' }]}
            resizeMode="cover"
          />
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>{t('rate_your_ride')}</Text>

        <View style={styles.driverInfoCard}>
          <Image 
            source={{ uri: driverInfo.avatar }} 
            style={styles.driverAvatar} 
          />
          <View style={styles.driverDetails}>
            <Text style={styles.driverName}>{driverInfo.name}</Text>
            <Text style={styles.vehicleText}>{driverInfo.vehicle}</Text>
            <Text style={styles.priceText}>{driverInfo.amount}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map(star => (
            <TouchableOpacity 
              key={star} 
              onPress={() => setRating(star)}
              activeOpacity={0.7}
            >
              <Image 
                source={{ 
                  uri: rating >= star 
                    ? 'https://img.icons8.com/ios-filled/96/37497A/star.png'
                    : 'https://img.icons8.com/ios/96/37497A/star--v1.png'
                }} 
                style={styles.starIcon} 
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.chipsContainer}>
          {chips.map(chip => {
            const isSelected = selectedChips.includes(chip.id);
            return (
              <TouchableOpacity
                key={chip.id}
                style={[styles.chip, isSelected && styles.chipSelected]}
                onPress={() => toggleChip(chip.id)}
                activeOpacity={0.8}
              >
                <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                  {chip.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.commentsLabel}>{t('additional_comments')}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={t('share_experience')}
          placeholderTextColor="#999"
          multiline
          numberOfLines={4}
          value={comments}
          onChangeText={setComments}
        />

        <TouchableOpacity 
          style={styles.submitButton} 
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitButtonText}>{t('submit_review')}</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
