import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookShelf from '../components/BookShelf';
import BookMark from '../components/Bookmark';
import Latest from '../components/Latest';
const Tab = createMaterialTopTabNavigator();

export default function ReadingTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "#212121" }} >
            <Tab.Screen
                name="BookShelf"
                component={BookShelf}
                options={{
                    tabBarLabel: "ชั้นหนังสือ",
                    // tabBarIcon: ({ color, size }) => (<FontAwesome name="bolt" color={color} size={size} />),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={BookMark}
                options={{
                    tabBarLabel: "บุ๊คมาร์ค",
                    // tabBarIcon: ({ color, size }) => (<FontAwesome name="fire" color={color} size={size} />),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Latest"
                component={Latest}
                options={{
                    tabBarLabel: "ดูล่าสุด",
                    // tabBarIcon: ({ color, size }) => (<FontAwesome name="leaf" color={color} size={size} />),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}