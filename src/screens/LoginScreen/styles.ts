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
    paddingTop: 60,
  },
  logoContainer: {
    width: width * 0.5,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
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
    marginBottom: 40,
  },
  titleMain: {
    fontSize: 26,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 36,
  },
  titleHighlight: {
    color: '#E5B26F',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
    opacity: 0.9,
    lineHeight: 22,
  },
  inputContainerOuter: {
    width: '100%',
    height: 65,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
    shadowColor: '#E5B26F',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  inputContainerInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    overflow: 'hidden',
    paddingHorizontal: 15,
  },
  countryCodeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  flagIcon: {
    fontSize: 20,
    marginRight: 6,
  },
  countryCodeText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginRight: 6,
  },
  dropdownIcon: {
    fontSize: 10,
    color: '#666666',
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#E0E0E0',
    marginHorizontal: 10,
  },
  textInputWrapper: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: '#000000',
    paddingVertical: 0,
    height: '100%',
  },
  placeholderContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  placeholder: {
    fontSize: 14,
    color: '#999999',
    fontWeight: '500',
  },
  buttonWrapper: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 30,
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
  otherLoginContainer: {
    alignItems: 'center',
  },
  otherLoginText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '400',
  }
});
