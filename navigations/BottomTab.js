import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import Main from '../screens/Main';
import ReadingTab from './ReadingTab';
import Like from '../components/Like';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray' }}>
          <Tab.Screen
            name="Main"
            component={Main}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="กำลังอ่าน"
            component={ReadingTab}
            options={{
              tabBarLabel: "Reading",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="book" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="รายการโปรด"
            component={Like}
            options={{
              tabBarLabel: "like",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="heart" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="แจ้งเตือน"
            component={Main}
            options={{
              tabBarLabel: "Activity",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="bell" color={color} size={size} /> ),
            }}
          />
        </Tab.Navigator>
      );
}