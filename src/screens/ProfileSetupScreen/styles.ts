import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  logoContainer: {
    width: width * 0.5,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  logoAsset: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  titleMain: {
    fontSize: 24,
    fontWeight: '600',
    color: '#E5B26F',
    textAlign: 'center',
    marginBottom: 8,
  },
  instructionSub: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
  },
  formCard: {
    width: '100%',
    backgroundColor: '#F7F5EE',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    height: 50,
  },
  iconContainer: {
    width: 45,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },
  iconText: {
    fontSize: 18,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#1E293B',
  },
  genderContainer: {
    flexDirection: 'row',
    height: 60,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    overflow: 'hidden',
  },
  genderOption: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  genderOptionLeft: {
    borderRightWidth: 1,
    borderRightColor: '#D1D5DB',
  },
  genderOptionCenter: {
    borderRightWidth: 1,
    borderRightColor: '#D1D5DB',
  },
  genderOptionRight: {},
  genderInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  genderGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  genderIcon: {
    fontSize: 20,
    marginRight: 6,
  },
  genderText: {
    fontSize: 12,
    color: '#1E293B',
    textAlign: 'center',
    fontWeight: '500',
  },
  genderTextActive: {
    color: '#000000',
    fontWeight: '700',
  },
  buttonWrapper: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 20,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#FFFFFF',
    opacity: 0.7,
  },
  iconImage: {
    width: 20,
    height: 20,
    tintColor: '#EBB771',
  },
  genderIconImage: {
    width: 20,
    height: 20,
    marginRight: 6,
    tintColor: '#1E293B',
  },
  genderIconImageActive: {
    tintColor: '#000000',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: -15,
    marginBottom: 15,
    marginLeft: 5,
  }
});
