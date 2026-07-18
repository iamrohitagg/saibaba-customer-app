import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const DUMMY_PLACES = [
  'मेरा स्थान (सहरसा जंक्शन)',
  'स्टेशन रोड',
  'गांधी चौक',
  'महावीर मंदिर',
  'दुर्गा मंदिर रोड',
  'डीबी रोड'
];

export const AddressSearchScreen = ({ navigation, route }: any) => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const { type, currentValue } = route.params || {};
  const [searchText, setSearchText] = useState(currentValue || '');

  const filteredPlaces = DUMMY_PLACES.filter(place => 
    place.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectPlace = (place: string) => {
    navigation.navigate({
      name: 'LocationSelection',
      params: { updatedAddress: place, type },
      merge: true,
    });
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {type === 'pickup' ? t('search_pickup_location') : t('search_destination_title')}
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={t('search_placeholder')}
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
          autoFocus
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText('')} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={filteredPlaces}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.suggestionItem}
            onPress={() => handleSelectPlace(item)}
          >
            <View style={styles.pinIcon} />
            <Text style={styles.suggestionText}>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>{t('no_location_found')}</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFC',
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#000',
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    fontSize: 16,
    color: '#666',
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  pinIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1D5B9E',
    marginRight: 12,
  },
  suggestionText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 30,
    fontSize: 16,
  }
});
