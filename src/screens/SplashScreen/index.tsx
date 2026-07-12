import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSplashScreen } from './useSplashScreen';
import { styles } from './styles';

export function SplashScreen({ navigation }: any) {
  const { t } = useSplashScreen({ navigation });

  return (
    <LinearGradient
      colors={['#0F2B5B', '#153A73', '#3A334B', '#924A22']}
      locations={[0, 0.4, 0.7, 1]}
      style={styles.container}
    >
      <View style={styles.content}>
        
        {/* Logo Placeholder */}
        <View style={styles.logoContainer}>
           <Image 
             source={{ uri: 'https://via.placeholder.com/200x120/00000000/E5B26F?text=Logo+Asset' }}
             style={styles.logoAsset}
             resizeMode="contain"
           />
        </View>

        {/* Brand Name */}
        <View style={styles.brandContainer}>
          <Text style={styles.brandTextWhite}>jai</Text>
          <Text style={styles.brandTextGold}>Bababji</Text>
          <Text style={styles.brandTextWhite}>Cab</Text>
        </View>

        {/* Tagline translated */}
        <Text style={styles.tagline}>{t('splash_tagline')}</Text>

        {/* Car Graphic Placeholder */}
        <View style={styles.carContainer}>
           <Image 
             source={{ uri: 'https://via.placeholder.com/150x80/00000000/E5B26F?text=Car+Asset' }}
             style={styles.carAsset}
             resizeMode="contain"
           />
        </View>

      </View>

      {/* Footer translated */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>{t('splash_footer_1')}</Text>
        <Text style={styles.footerText}>{t('splash_footer_2')}</Text>
      </View>
    </LinearGradient>
  );
}
