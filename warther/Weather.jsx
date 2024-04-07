import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { View } from "react-native-web";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "c62bbdc90c459c2d8df8cb94835da690";
  const Apidata = async (cityName) => {
    try {
      setLoading(true);
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
      const response = await fetch(apiUrl);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Apidata("karachi");
    if (weatherData !== null) {
      console.log(weatherData);
    }
  }, []);

  return (
    <>
      <View>
        <Text style={style.deg}>22°</Text>
        <Text style={style.CityName}>Karachi</Text>
        <View style={style.Icon}>
          <View>
            <Text>humidity</Text>
            <Text>temp_min</Text>
          </View>
          <View>
            <Text>Icon</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  deg: {
    fontSize: 80,
    alignItems: "center",
    marginTop: "50%",
    color: "black",
  },
  CityName: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
  },
  Icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 70,
    height: "50%",
    alignItems: "center",
  },
});

// import { useEffect, useState } from "react";
// import { Dimensions, StyleSheet, Text } from "react-native";
// import { View } from "react-native-web";

// export const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const API_KEY = "c62bbdc90c459c2d8df8cb94835da690";

//   const fetchData = async (cityName) => {
//     try {
//       setLoading(true);
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
//       const response = await fetch(apiUrl);
//       if (response.status === 200) {
//         const data = await response.json();
//         setWeatherData(data);
//         console.log(data); // Correctly log the weather data
//       } else {
//         setWeatherData(null);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData("karachi");
//   }, []);

//   useEffect(() => {
//     if (weatherData !== null) {
//       console.log(weatherData); // Correctly log the weather data
//     }
//   }, [weatherData]);

//   return (
//     <View>
//       {/* Your weather data display components here */}
//     </View>
//   );
// };

// export default Weather;

// import React, { useEffect, useState } from "react";
// import { Dimensions, StyleSheet, Text, View } from "react-native";

// export const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const API_KEY = "c62bbdc90c459c2d8df8cb94835da690";

//   const fetchData = async (cityName) => {
//     try {
//       setLoading(true);
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
//       const response = await fetch(apiUrl);
//       if (response.ok) {
//         const data = await response.json();
//         setWeatherData(data);
//       } else {
//         setWeatherData(null);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData("Karachi");
//     console.log(setWeatherData);
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : weatherData ? (
//         <>
//           <Text style={styles.deg}>{weatherData.main.temp}°</Text>
//           <Text style={styles.cityName}>{weatherData.name}</Text>
//           <View style={styles.iconContainer}>
//             <View>
//               <Text>Humidity: {weatherData.main.humidity}</Text>
//               <Text>Min Temp: {weatherData.main.temp_min}°C</Text>
//             </View>
//             {/* You can display weather icons here */}
//           </View>
//         </>
//       ) : (
//         <Text>No weather data available</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   deg: {
//     fontSize: 80,
//     marginTop: "50%",
//     color: "black",
//   },
//   cityName: {
//     fontSize: 20,
//   },
//   iconContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: Dimensions.get("screen").width - 70,
//     height: "50%",
//     alignItems: "center",
//   },
// });
