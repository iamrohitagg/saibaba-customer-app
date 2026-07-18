import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF4',
  },
  headerGradient: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F2B5B',
    marginBottom: 2,
  },
  brandText: {
    fontSize: 16,
    color: '#0F2B5B',
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: 30,
    height: 30,
  },
  content: {
    flexGrow: 1,
    paddingTop: 100, // Account for absolute header
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 24,
    color: '#1E293B',
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  driverInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  driverAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    backgroundColor: '#EEE',
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    color: '#333',
    fontWeight: '400',
    marginBottom: 2,
  },
  vehicleText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 2,
  },
  priceText: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 15,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    gap: 15,
  },
  starIcon: {
    width: 40,
    height: 40,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 25,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#37497A',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
  },
  chipSelected: {
    backgroundColor: '#37497A',
  },
  chipText: {
    fontSize: 14,
    color: '#37497A',
  },
  chipTextSelected: {
    color: '#FFF',
  },
  commentsLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
    backgroundColor: '#FDFBF4',
    marginBottom: 25,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#37497A',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  }
});
