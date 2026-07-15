import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MapView, {
  Marker,
  Polyline,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { useRideDetailsScreen } from "./useRideDetailsScreen";
import { styles } from "./styles";

export function RideDetailsScreen({ route }: any) {
  const { t, rideData, handleBookAgain, handleDownloadInvoice } =
    useRideDetailsScreen({ route });

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
            resizeMode="cover"
          />
        </View>
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Section */}
        <View style={styles.topCard}>
          <View style={styles.titleRow}>
            <Text style={styles.screenTitle}>{t("ride_details")}</Text>
            <View style={styles.statusBadgeYellow}>
              <Text style={styles.statusText}>{rideData.status}</Text>
            </View>
          </View>
          <View style={styles.dateRow}>
            <Text style={styles.dateText}>{rideData.date}</Text>
            <Text style={styles.distanceText}>{rideData.distance} / पूर्ण</Text>
          </View>

          {/* Map View */}
          <View style={[styles.mapImage, { overflow: "hidden" }]}>
            <MapView
              style={StyleSheet.absoluteFill}
              provider={
                Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
              }
              userInterfaceStyle="light"
              initialRegion={{
                latitude: 28.6189,
                longitude: 77.214,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              <Marker
                coordinate={{ latitude: 28.6139, longitude: 77.209 }}
                title="Pickup"
              />
              <Marker
                coordinate={{ latitude: 28.6239, longitude: 77.219 }}
                title="Drop-off"
                pinColor="blue"
              />
              <Polyline
                coordinates={[
                  { latitude: 28.6139, longitude: 77.209 },
                  { latitude: 28.6239, longitude: 77.219 },
                ]}
                strokeColor="#1D5B9E"
                strokeWidth={3}
              />
            </MapView>
          </View>

          {/* Fare Summary */}
          <Text style={styles.sectionTitle}>{t("fare_summary")}</Text>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>{t("fare_summary")}</Text>
            <View style={styles.paidBadge}>
              <Text style={styles.paidText}>{t("paid_badge")}</Text>
            </View>
          </View>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>{t("tolls_taxes")}</Text>
            <Text style={styles.fareValue}>₹{rideData.fare.tollsTaxes}</Text>
          </View>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>{t("total_paid")}</Text>
            <View style={styles.paidBadge}>
              <Text style={styles.paidText}>₹{rideData.fare.totalPaid}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Vehicle and Driver */}
          <Text style={styles.sectionTitle}>{t("vehicle_driver_details")}</Text>
          <View style={styles.vehicleGrid}>
            <View style={styles.gridColumn}>
              <Text style={styles.gridLabel}>{t("vehicle_label")}</Text>
              <Text style={styles.gridValue}>{rideData.vehicle.type}</Text>

              <Text style={[styles.gridLabel, { marginTop: 10 }]}>
                {t("driver_label")}
              </Text>
              <Text style={styles.gridValue}>{rideData.driver.name}</Text>
            </View>
            <View style={styles.gridColumn}>
              <Text style={styles.gridLabel}>{t("license_plate_label")}</Text>
              <Text style={styles.gridValue}>
                {rideData.vehicle.licensePlate}
              </Text>

              <Text style={[styles.gridLabel, { marginTop: 10 }]}>
                {t("rating_label")}
              </Text>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{rideData.driver.rating}</Text>
                <Text style={styles.starIcon}>★</Text>
              </View>
            </View>
            <View
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/96/1E293B/car.png",
                }}
                style={[styles.carImage, { tintColor: "#1E293B" }]}
              />
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/96/1E293B/user.png",
                }}
                style={[styles.driverImage, { tintColor: "#1E293B" }]}
              />
            </View>
          </View>
        </View>

        {/* Passenger Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{t("passenger_details")}</Text>
          <View style={styles.row}>
            <Text style={styles.labelCol}>{t("name_label")}</Text>
            <Text style={styles.valueCol}>{rideData.passenger.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelCol}>{t("phone_label")}</Text>
            <Text style={styles.valueCol}>{rideData.passenger.phone}</Text>
          </View>
        </View>

        {/* Luggage Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{t("luggage_details")}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text style={styles.labelCol}>{t("luggage_type")}</Text>
                <Text style={styles.valueCol}>{rideData.luggage.type}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.labelCol}>{t("quantity")}</Text>
                <Text style={styles.valueCol}>{rideData.luggage.quantity}</Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", paddingHorizontal: 10 }}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/1E293B/suitcase.png",
                }}
                style={{
                  width: 30,
                  height: 30,
                  opacity: 0.8,
                  tintColor: "#1E293B",
                }}
              />
            </View>
          </View>
        </View>

        {/* Route Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{t("route_details")}</Text>
          <View style={styles.row}>
            <Text style={styles.labelCol}>{t("pickup_label")}</Text>
            <Text style={styles.valueCol}>{rideData.route.pickup}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelCol}>{t("drop_label")}</Text>
            <Text style={styles.valueCol}>{rideData.route.drop}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelCol}>{t("distance_label")}</Text>
            <Text style={styles.valueCol}>{rideData.route.distance}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.actionButton, styles.bookAgainBtn]}
            onPress={handleBookAgain}
          >
            <Text style={styles.actionText}>{t("book_again")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.invoiceBtn]}
            onPress={handleDownloadInvoice}
          >
            <Text style={styles.actionText}>{t("download_invoice")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
