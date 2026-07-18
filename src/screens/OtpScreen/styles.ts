import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logoContainer: {
    width: width * 0.5,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#E5B26F',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
  logoAsset: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleMain: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 15,
  },
  titleHighlight: {
    color: '#E5B26F',
  },
  instructionMain: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  instructionSub: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.85,
    textAlign: 'center',
    lineHeight: 20,
  },
  otpContainerWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  otpBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  otpBox: {
    width: (width - 48 - (5 * 8)) / 6, // Total width - paddings - 5 gaps / 6 boxes
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  otpBoxActive: {
    borderColor: '#E5B26F',
    shadowColor: '#E5B26F',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
  },
  otpText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  otpDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D1D5DB',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  waitingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  waitingText: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  autoReadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  checkMark: {
    fontSize: 12,
    color: '#0F2B5B',
    fontWeight: 'bold',
  },
  autoReadText: {
    fontSize: 13,
    color: '#FFFFFF',
    opacity: 0.9,
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
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  resendContainer: {
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  footer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.7,
    marginTop: 2,
  }
});
