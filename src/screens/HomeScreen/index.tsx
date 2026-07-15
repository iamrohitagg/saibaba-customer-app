import React from "react";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { useHomeScreen } from "./useHomeScreen";
import { styles } from "./styles";

export function HomeScreen({ navigation }: any) {
  const { t, selectedRide, setSelectedRide, handleProceed } = useHomeScreen({
    navigation,
  });

  return (
    <View style={styles.container}>
      {/* Header Gradient */}
      <LinearGradient
        colors={["#FCAE75", "#AEE1F9"]}
        style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>नमस्ते. 🙏</Text>
          <Text style={styles.brandText}>jaiBababjiCab!</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/96/1D5B9E/user.png",
            }}
            style={[styles.avatarImage, { tintColor: "#1D5B9E" }]}
          />
        </View>
      </LinearGradient>

      {/* Map Area */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapPlaceholder}
          provider={
            Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
          }
          initialRegion={{
            latitude: 28.6139,
            longitude: 77.209,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          userInterfaceStyle="light"
        >
          <Marker
            coordinate={{ latitude: 28.6139, longitude: 77.209 }}
            title="Pickup Location"
            description="Your current location"
          />
        </MapView>
      </View>

      {/* Bottom Sheet Card */}
      <View style={styles.bottomSheet}>
        <View style={styles.sheetHandle} />

        <Text style={styles.sheetTitleMain}>
          {t("select_ride_type_hi") || "अपनी सवारी चुनें"}
        </Text>
        <Text style={styles.sheetTitleSub}>
          {t("select_ride_type_en") || "Select Ride Type"}
        </Text>

        {/* Option 1: Book Now */}
        <TouchableOpacity
          style={[
            styles.rideOptionCard,
            styles.cardBookNow,
            selectedRide === "book_now" && styles.cardBookNowSelected,
          ]}
          activeOpacity={0.8}
          onPress={() => setSelectedRide("book_now")}
        >
          <View style={styles.cardIconContainer}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/96/1E293B/car.png",
              }}
              style={[styles.cardIcon, { tintColor: "#1E293B" }]}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{t("book_now_title")}</Text>
            <Text style={styles.cardDesc}>{t("book_now_desc")}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Option 2: Schedule Later */}
        <TouchableOpacity
          style={[
            styles.rideOptionCard,
            styles.cardSchedule,
            selectedRide === "schedule_later" && styles.cardScheduleSelected,
          ]}
          activeOpacity={0.8}
          onPress={() => setSelectedRide("schedule_later")}
        >
          <View style={styles.cardIconContainer}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/96/1E293B/sedan.png",
              }}
              style={[styles.cardIcon, { tintColor: "#1E293B" }]}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{t("schedule_later_title")}</Text>
            <Text style={styles.cardDesc}>{t("schedule_later_desc")}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Option 3: Rental */}
        <TouchableOpacity
          style={[
            styles.rideOptionCard,
            styles.cardRental,
            selectedRide === "rental" && styles.cardRentalSelected,
          ]}
          activeOpacity={0.8}
          onPress={() => setSelectedRide("rental")}
        >
          <View style={styles.cardIconContainer}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/96/1E293B/suv.png",
              }}
              style={[styles.cardIcon, { tintColor: "#1E293B" }]}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{t("rental_title")}</Text>
            <Text style={styles.cardDesc}>{t("rental_desc")}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Proceed Button */}
        <TouchableOpacity
          style={[
            styles.proceedButton,
            !selectedRide && styles.proceedButtonDisabled,
          ]}
          disabled={!selectedRide}
          onPress={handleProceed}
          activeOpacity={0.8}
        >
          <Text style={styles.proceedButtonText}>{t("proceed")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
