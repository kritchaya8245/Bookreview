import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image, Text, TextInput, FlatList, TouchableOpacity, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Latest(props) {
    const navigation = useNavigation();
    const continues = [
        { "Name": "LIQUOR MYSTERY", "writer": "โรคุโจ โนเอรุ", "page": "80", "pageall": "300", "uri": "https://image.makewebcdn.com/makeweb/m_1920x0/7GFEYsdVK/DefaultData/Liquor_mystery.jpg?v=202206091808" },
        { "Name": "ร้านนี้เปิดให้ตายหลัง 4 ทุ่ม", "writer": "Alex Finlay", "page": "80", "pageall": "300", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202404/609741/1000271476_front_XXL.jpg?imgname=%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%95%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87-4-%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%A1" },
        { "Name": "คดีฆาตกรรมในบ้านสิบเหลี่ยม", "writer": "อายาสึจิ ยูกิโตะ", "page": "80", "pageall": "300", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202107/530088/6000049898_front_XXL.jpg?imgname=%E0%B8%84%E0%B8%94%E0%B8%B5%E0%B8%86%E0%B8%B2%E0%B8%95%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B8%9A%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1"},
    ];

    return (
        <ScrollView style={{ backgroundColor: "#212121" }}>
            <FlatList
                data={continues}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ flexDirection: "column", marginTop: 10, alignItems: 'center' }}>
                                <View style={{ flexDirection: "row", backgroundColor: "white", width: 420, height: 180, borderRadius: 10 }}>
                                    <Image style={{ marginLeft: 10, marginTop: 10, borderRadius: 10, width: 110, height: 160, }} source={{ uri: item.uri }} />
                                    <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 10 }}>
                                        <Text style={{ fontSize: 20 }}>{item.Name}</Text>
                                        <Text style={{ color: 'gray' }}>{item.writer}</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginTop: 20, color: 'gray', fontSize: 18 }}>{item.page}</Text>
                                            <Text style={{ marginTop: 20, color: 'gray', marginLeft: 5, fontSize: 18 }}>of</Text>
                                            <Text style={{ marginTop: 20, color: 'gray', marginLeft: 5, fontSize: 18 }}>{item.pageall}</Text>
                                        </View>
                                        <View style={{ marginLeft: 250, marginTop: 40 }}>
                                            <FontAwesome name="trash" size={30} color="gray" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}