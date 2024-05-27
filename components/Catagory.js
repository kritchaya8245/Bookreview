import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, View } from "react-native";
import MyIcon from "./MyIcon";

export default function Catagory() {
    const navigation = useNavigation();
    return (
      <View style={{ marginHorizontal : 20 , marginTop : 10 , padding : 20, borderWidth : 1, borderColor : '#212121', borderRadius : 20, backgroundColor : 'white' }}>
        {/* View ก้อนที่ 2 */}
        <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around" }}>
          <MyIcon title="Novel" name="eye" size={30} color="#212121" onPress={ ()=>{ navigation.navigate("Novel")}}/>
          <MyIcon title="Literature" name="paperclip" size={30} color="#212121" onPress={ ()=>{ navigation.navigate("Literature")}}/>
          <MyIcon title="Documentary" name="camera" size={30} color="#212121"/>
          <MyIcon title="Comic" name="star" size={30} color="#212121"/>
        </View>
        {/* View ก้อนที่ 3 */}
        <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around" }}>
          <MyIcon title="Selfdev" name="user-circle" size={30} color="#212121"/>
          <MyIcon title="Business" name="cubes" size={30} color="#212121"/>
          <MyIcon title="Technology" name="television" size={30} color="#212121"/>
          <MyIcon title="Study" name="book" size={30} color="#212121" />
        </View>
        {/* View ก้อนที่ 4 */}
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <MyIcon title="Health" name="heart" size={30} color="#212121"/>
          <MyIcon title="Home" name="home" size={30} color="#212121"/>
          <MyIcon title="Travel" name="plane" size={30} color="#212121"/>
          <MyIcon title="abroad" name="map" size={30} color="#212121"/>
        </View>
      </View>
    );
  }