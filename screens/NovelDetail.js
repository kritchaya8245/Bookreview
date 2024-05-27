import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import BookStorage from "../storages/BookStorage";

export default function NovelDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const [book, setBook] = useState({
        "id":"xxxx",
        "name":"Example Book",
        "price":"100",
        "detail":"Detail book",
        "image":"https://picsum.photos/300",
    });
    //DELETE POPUP
    const confirmDelete = () => {
        return Alert.alert("ยืนยันการลบ?", "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?", [
            { text: "ยกเลิก" },
            { text: "ยืนยัน", onPress: () => { deleteBook(); }, },
        ]);
    };
    const deleteBook = async () => {
        const { id } = route.params;
        //REMOVE BOOK
        await BookStorage.removeItem(id);
        //REDIRECT TO
        navigation.navigate("Novel");
    };
    const TopRightMenu = ()=>(
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity 
                onPress={() => { navigation.navigate("NovelForm", { "id": book.id }); }}
                >
                <FontAwesome name="edit" size={30} />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { confirmDelete(); }}
                >
                <FontAwesome name="trash" size={30} />
            </TouchableOpacity>
        </View>
    );
    const onLoad = async () => {
        navigation.setOptions({ headerRight: () => (<TopRightMenu />) });
        const { id } = route.params;
        let b = await BookStorage.readItemDetail(id);
        setBook(b);
    };
    useEffect(() => { onLoad(); }, []);

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: book.image }} />
                </View>
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}> {book.name} </Text>
                <Text style={{fontSize: 14 ,marginLeft:5}}>{book.detail}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "green", fontSize: 20, marginTop:5, marginLeft:5}}>{book.price}</Text>
                    <Text style={{ paddingTop: 10 }}> บาท</Text>
                </View>
            </View>
        </View>
    );
}