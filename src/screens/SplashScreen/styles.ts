import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -50,
  },
  logoContainer: {
    width: width * 0.7,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#E5B26F',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 50,
    elevation: 20,
  },
  logoAsset: {
    width: '100%',
    height: '100%',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 15,
  },
  brandTextWhite: {
    fontSize: 36,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  brandTextGold: {
    fontSize: 36,
    fontWeight: '700',
    color: '#E5B26F',
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 5,
    letterSpacing: 1,
  },
  carContainer: {
    width: width * 0.6,
    height: 100,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carAsset: {
    width: '100%',
    height: '100%',
  },
  footer: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 4,
  }
});
