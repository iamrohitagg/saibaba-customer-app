import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLanguage } from '../../store/auth/authSlice';

export function LanguageSelector() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.auth.language);

  const handleSelect = (lang: 'en' | 'hi') => {
    dispatch(setLanguage(lang));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, currentLanguage === 'en' && styles.activeButton]}
        onPress={() => handleSelect('en')}
        activeOpacity={0.8}
      >
        <Text style={[styles.text, currentLanguage === 'en' && styles.activeText]}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, currentLanguage === 'hi' && styles.activeButton]}
        onPress={() => handleSelect('hi')}
        activeOpacity={0.8}
      >
        <Text style={[styles.text, currentLanguage === 'hi' && styles.activeText]}>हिन्दी</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 4,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: '#1D5B9E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
  },
  activeText: {
    color: '#FFFFFF',
  },
});
