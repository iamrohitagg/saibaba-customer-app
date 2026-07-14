import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC', // slightly off-white like the mockup background
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  brandText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  avatarContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 22.5,
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 40,
  },
  topTextContainer: {
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 18,
    color: '#1E293B',
    marginBottom: 10,
  },
  packageText: {
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    color: '#1E293B',
  },
  carCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  carCardSelected: {
    backgroundColor: '#E6F7ED', // light green tint
    borderColor: '#E6F7ED',
  },
  carImageContainer: {
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  carImage: {
    width: '100%',
    height: '100%',
  },
  carInfoContainer: {
    flex: 1,
  },
  carName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1E293B',
  },
  carSeats: {
    fontSize: 14,
    color: '#475569',
    marginTop: 2,
  },
  carPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1E293B',
    marginTop: 2,
  },
  checkmarkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  checkmarkIcon: {
    width: 32,
    height: 32,
    tintColor: '#22C55E', // Green checkmark
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 10,
  },
  proceedBtn: {
    backgroundColor: '#354E75', // Slightly grayish dark blue as shown in mockup
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  proceedBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
    marginTop: 10,
  }
});
