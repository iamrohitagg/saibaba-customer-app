import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  mapContainer: {
    flex: 1,
    position: 'relative',
    marginTop: -20, // To tuck under the rounded header
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginLeft: -25, // Half of width
    marginTop: -25, // Half of height
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerRings: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(29, 91, 158, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerRingInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'rgba(29, 91, 158, 0.7)',
  },
  markerIcon: {
    fontSize: 35,
  },
  bottomSheet: {
    backgroundColor: '#F9FAFC',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    marginTop: -30, // Overlap the map
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  sheetTitleMain: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
  sheetTitleSub: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 20,
  },
  rideOptionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  rideOptionCardSelected: {
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardIconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardIcon: {
    width: '100%',
    height: '100%',
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 16,
  },
  chevron: {
    fontSize: 18,
    color: '#94A3B8',
  },
  // Specific card styles
  cardBookNow: {
    backgroundColor: '#E6F7F2',
    borderColor: '#82D4C3',
  },
  cardBookNowSelected: {
    borderColor: '#1D997F',
  },
  cardSchedule: {
    backgroundColor: '#FFF0E6',
    borderColor: '#F3B588',
  },
  cardScheduleSelected: {
    borderColor: '#E06B26',
  },
  cardRental: {
    backgroundColor: '#F2E6F7',
    borderColor: '#C6A5D9',
  },
  cardRentalSelected: {
    borderColor: '#8E48AF',
  },
  proceedButton: {
    backgroundColor: '#1D5B9E',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  proceedButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
  proceedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
