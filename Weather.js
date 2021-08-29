import React from 'react';
import PropTypes from 'prop-types';

import {Text, View, StyleSheet, StatusBar} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#141E30", "#243B55"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#3a7bd5", "#3a6073"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#000046", "#1CB5E0"],
        title: "На улице дождь",
        subtitle: "Сиди дома!"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Mist: {
        iconName: "weather-sunny",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Smoke: {
        iconName: "weather-windy",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Haze: {
        iconName: "weather-sunny",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Dust: {
        iconName: "weather-windy-variant",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Fog: {
        iconName: "weather-sunny",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Sand: {
        iconName: "weather-sunny",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Ash: {
        iconName: "weather-sunny",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Squall: {
        iconName: "weather-sunny",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Ясная погодка",
        subtitle: "Можно гулять!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "На улице тучно",
        subtitle: "Я бы на твоем месте не выходил!"
    },
}

const Weather = ({temp, condition}) => {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "#fff"
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    title: {
        color: "#fff",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
}

export default Weather