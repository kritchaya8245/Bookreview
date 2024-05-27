import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Catagory from '../components/Catagory';

export default function CatagoryPage() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#212121'}}>
            <Catagory />
        </ScrollView>
    );
}