import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image, Text, TextInput, FlatList, TouchableOpacity, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BookMark(props) {
    const navigation = useNavigation();
    const bookmarks = [
        { "Name": "ร้านนี้เปิดให้ตายหลัง 4 ทุ่ม", "writer": "Alex Finlay", "page": "80", "pageall": "300", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202404/609741/1000271476_front_XXL.jpg?imgname=%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%95%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87-4-%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%A1" },
        { "Name": "ห้ามส่งเสียงดัง ระวังเป็นศพ!", "writer": "พักซ็องชินและรวมนักเขียน", "page": "80", "pageall": "300", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202404/608967/1000271279_front_XXL.jpg?imgname=%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%94%E0%B8%B1%E0%B8%87-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A8%E0%B8%9E!" },
        { "Name": "คดีฆาตกรรมซูชิจานหมุน", "writer": "โยชิมุระ ทัตสึยะ", "page": "80", "pageall": "300", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202403/606454/1000270303_front_XXL.jpg?imgname=%E0%B8%84%E0%B8%94%E0%B8%B5%E0%B8%86%E0%B8%B2%E0%B8%95%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%8B%E0%B8%B9%E0%B8%8A%E0%B8%B4%E0%B8%88%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A1%E0%B8%B8%E0%B8%99-(Food-Mystery)--%E0%B8%9E%E0%B8%B7%E0%B8%A1%E0%B8%9E%E0%B9%8C-2"},
    ];

    return (
        <ScrollView style={{ backgroundColor: "#212121" }}>
            <FlatList
                data={bookmarks}
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