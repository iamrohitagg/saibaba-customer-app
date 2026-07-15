import { StyleSheet } from 'react-native';

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
    flex: 1,
    paddingTop: 100, // Account for absolute header
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 24,
    color: '#1E293B',
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '500',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconPlaceholder: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: '#1E293B',
  },
  labelText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#FFF',
    marginBottom: 20,
    color: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  guestCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  guestCardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  guestCardTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  footerNote: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#37497A',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  }
});
