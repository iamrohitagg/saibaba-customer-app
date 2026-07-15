import './src/i18n';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import { RootState } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

import { store, persistor } from './src/store';
import { SplashScreen } from './src/screens/SplashScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { OtpScreen } from './src/screens/OtpScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { RidesScreen } from './src/screens/RidesScreen';
import { RideDetailsScreen } from './src/screens/RideDetailsScreen';
import { RateRideScreen } from './src/screens/RateRideScreen';
import { RentalPackageScreen } from './src/screens/RentalPackageScreen';
import { ProfileSetupScreen } from './src/screens/ProfileSetupScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { PassengerDetailsScreen } from './src/screens/PassengerDetailsScreen';
import { VehicleSelectionScreen } from './src/screens/VehicleSelectionScreen';
import { LanguageSelectionScreen } from './src/screens/LanguageSelectionScreen';
import { RentalConfirmationScreen } from './src/screens/RentalConfirmationScreen';
import { ScheduleRideScreen } from './src/screens/ScheduleRideScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RidesStackNav = createNativeStackNavigator();
const HomeStackNav = createNativeStackNavigator();

const DummyScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Coming Soon</Text>
  </View>
);

function RidesStack() {
  return (
    <RidesStackNav.Navigator screenOptions={{ headerShown: false }}>
      <RidesStackNav.Screen name="RidesList" component={RidesScreen} />
      <RidesStackNav.Screen name="RideDetails" component={RideDetailsScreen} />
      <RidesStackNav.Screen name="RateRide" component={RateRideScreen} />
    </RidesStackNav.Navigator>
  );
}

function HomeStack() {
  return (
    <HomeStackNav.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNav.Screen name="HomeMain" component={HomeScreen} />
      <HomeStackNav.Screen name="RentalPackage" component={RentalPackageScreen} />
      <HomeStackNav.Screen name="PassengerDetails" component={PassengerDetailsScreen} />
      <HomeStackNav.Screen name="VehicleSelection" component={VehicleSelectionScreen} />
      <HomeStackNav.Screen name="RentalConfirmation" component={RentalConfirmationScreen} />
      <HomeStackNav.Screen name="ScheduleRide" component={ScheduleRideScreen} />
    </HomeStackNav.Navigator>
  );
}

function MainTabs() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let icon = '';
          if (route.name === 'HomeTab') icon = '🏠';
          else if (route.name === 'TripsTab') icon = '🚙';
          else if (route.name === 'OffersTab') icon = '🎯';
          else if (route.name === 'ProfileTab') icon = '👤';
          return <Text style={{ fontSize: 20, color }}>{icon}</Text>;
        },
        tabBarActiveTintColor: '#0F2B5B',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: Math.max(insets.bottom, 5),
          paddingTop: 5,
          height: 60 + Math.max(insets.bottom - 5, 0),
        },
        tabBarLabelStyle: {
          fontSize: 12,
        }
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ tabBarLabel: t('tab_home') }} />
      <Tab.Screen name="TripsTab" component={RidesStack} options={{ tabBarLabel: t('tab_rides') }} />
      <Tab.Screen name="OffersTab" component={DummyScreen} options={{ tabBarLabel: t('tab_offers') }} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ tabBarLabel: t('tab_profile') }} />
    </Tab.Navigator>
  );
}

function I18nSync({ children }: { children: React.ReactNode }) {
  const language = useSelector((state: RootState) => state.auth.language);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return <>{children}</>;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nSync>
          <SafeAreaProvider>
          <NavigationContainer>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Otp" component={OtpScreen} />
              <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
              <Stack.Screen name="MainTabs" component={MainTabs} />
            </Stack.Navigator>
          </NavigationContainer>
          </SafeAreaProvider>
        </I18nSync>
      </PersistGate>
    </Provider>
  );
}

export default App;
