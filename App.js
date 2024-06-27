import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import MyCardsScreen from "./screens/MyCards";
import StatisticsScreen from "./screens/Statistics";
import SettingsScreen from "./screens/Setting";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { useContext } from "react";
import { ThemeDark, ThemeLight } from "./Data/mockupData";

const Tab = createBottomTabNavigator();

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "MyCards") {
                iconName = focused ? "card" : "card-outline";
              } else if (route.name === "Statistics") {
                iconName = focused ? "stats-chart" : "stats-chart-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme === "dark" ? "#383FFA" : "#000000", // Active tab color
            tabBarInactiveTintColor: "gray", // Inactive tab color
            tabBarStyle: {
              paddingTop: 15,
              height: 70,
              backgroundColor:
                theme === "dark"
                  ? ThemeDark.backgroundColor
                  : ThemeLight.backgroundColor, // Background color based on theme
              borderTopWidth: 0, // Remove top border
              elevation: 0, // Remove Android shadow
              shadowOpacity: 0, // Remove iOS shadow
            },
            tabBarLabelStyle: {
              fontWeight: "bold",
              fontSize: 12,
              marginBottom: 10, // Adjust the space between the icon and the text
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="MyCards" component={MyCardsScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
