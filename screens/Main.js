import React from "react";
import { ScrollView, View } from "react-native";
import Home from "../components/Home";

export default function Main() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#212121', marginTop: 20 }}>
                <Home />
             </View>
        </ScrollView>
    );
}
