import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
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
    flex: 1,
    paddingTop: 100, // Account for absolute header
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 22,
    color: '#1E293B',
    marginTop: 10,
    marginBottom: 20,
  },
  successIconContainer: {
    marginBottom: 10,
  },
  successIcon: {
    width: 80,
    height: 80,
  },
  successDesc: {
    fontSize: 22,
    color: '#000',
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsCard: {
    backgroundColor: '#F3EDDF',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 18,
    color: '#333',
  },
  detailValue: {
    fontSize: 18,
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  paidBadge: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginLeft: 10,
  },
  paidText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  viewDetailsButton: {
    backgroundColor: '#37497A',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  viewDetailsText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
  footerDisclaimer: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
