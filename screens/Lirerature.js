import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BookStorage from "../storages/BookStorage";
import { ScrollView } from "react-native-gesture-handler";

export default function Literature() {
    const navigation = useNavigation();
    const [books, setBooks] = useState([
        { id: 1, name: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1", detail: "แฮร์รี่ พอตเตอร์เป็นเด็กชายธรรมดา ๆ ที่อาศัยอยู่ในบ้านธรรมดา ๆ กับครอบครัวธรรมดา ๆ อย่างพวกเดอร์สลีย์ จนกระทั่งวันเกิดปีที่ 11 ของเขามาถึง  แฮร์รี่ได้รู้ว่าเขาเป็นพ่อมดและต้องไปเข้าเรียนที่โรงเรียนคาถาพ่อมดแม่มดและเวทมนตร์ศาสตร์ฮอกวอตส์  นับจากนั้นเป็นต้นมา ชีวิตของแฮร์รี่ พอตเตอร์ก็ไม่ธรรมดาอีกต่อไป…", price: 395, image: "https://platform-api.nanmeebooks.com/uploads/upload/file/detail_image/20200930/6f395b883dd115e3c8388089c8036550.jpg", },
        { id: 2, name: "แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ เล่ม 2", detail: "", price: 395, image: "https://platform-api.nanmeebooks.com/uploads/upload/file/cover_image/9786160447657-sm.webp", },
        { id: 3, name: "แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน เล่ม 3", detail: "", price: 495, image: "https://platform-api.nanmeebooks.com/uploads/upload/file/cover_image/9786160447664-sm.webp", },
        { id: 4, name: "แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี เล่ม 4", price: 495, detail: "", image: "https://platform-api.nanmeebooks.com/uploads/upload/file/cover_image/9786160447671-sm.webp", },

    ]);
    const loadBooks = async () => {
        let books = await BookStorage.readItems();
        setBooks(books);
    };

    useEffect(() => {
        // WHEN MOUNT AND UPDATE
        const unsubscribe = navigation.addListener("focus", () => {
            loadBooks();
        });
        // WHEN UNMOUNT
        return unsubscribe;
    }, [navigation]);

    const [refresh, setRefresh] = useState(false);

    const BookItem = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => { navigation.navigate("LiteratureDetail", { "id": item.id }); }}
            style={{ backgroundColor: "#212121", margin: 7, flex: 1, elevation: 5, borderRadius: 10, borderWidth: 2 }}
        >
            <View style={{ flexDirection: "row", borderRadius: 10 }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 1 / 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.image }} />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 14, color: "white" }}> {item.name} </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 20, color: "orange" }}>{item.price}</Text>
                    <Text style={{ paddingTop: 6, color: "white" }}> บาท</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={books}
                refreshing={refresh}
                onRefresh={() => { loadBooks(); }}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => (<BookItem item={item} />)}
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("LiteratureForm", { "id": null });
                }}
                style={{ backgroundColor: "lightblue", flex: 1, alignItems: "center", justifyContent: "center", width: 50, height: 50, borderRadius: 40, position: "absolute", right: 30, bottom: 30, elevation: 5, }}
            >
                <FontAwesome name="plus" size={20} />
            </TouchableOpacity>
        </View>
    );
}