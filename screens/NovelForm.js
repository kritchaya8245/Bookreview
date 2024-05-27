import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import BookStorage from "../storages/BookStorage";

export default function NovelForm() {  
  const navigation = useNavigation();
  const route = useRoute();
  // RANDOM ID
  const [key, setKey] = useState( "_" + Math.random().toString(36).substring(2, 9) );
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [novel, setNovel] = useState("");
  
  const onLoad = async () => {
    const { id } = route.params;
    if (id) {
      let book = await BookStorage.readItemDetail(id);   
      setKey(book.id);
      setName(book.name);
      setDetail(book.detail);
      setPrice(book.price.toString());
      setImage(book.image);
      setNovel(book.novel)
    }
  };
  useEffect(() => { onLoad(); }, []); 

  const saveBook = async () => {
    //A NEW ITEM
    let new_data = { "id": key, "name": name, "detail": detail,"price": price, "image": image ,"catagory": "novel"};
    //SAVE
    await BookStorage.writeItem(new_data);
    //REDIRECT TO
    navigation.navigate("Novel");
  };

  // useLayoutEffect(() => {
  //   navigation.setOptions({ title: pid ? "edit" : "create" });
  // }, [navigation]);

  return (
    <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <Text>ชื่อหนังสือ</Text>
        <TextInput placeholder="Enter name ..." value={name} onChangeText={(text) => setName(text)} />
        <Text>รายละเอียด</Text>
        <TextInput placeholder="Enter name ..." value={detail} onChangeText={(text) => setDetail(text)} />
        <Text>หมวดหมู่</Text>
        <TextInput placeholder="Enter name ..." value={novel} onChangeText={(text) => setNovel(text)} />
        <Text>ราคา</Text>
        <TextInput placeholder="Enter price ..." value={price} onChangeText={(text) => setPrice(text)} />
        <Text>ลิงค์รูปภาพ</Text>
        <TextInput placeholder="Enter image URL ..." value={image} onChangeText={(text) => setImage(text)} />
      </ScrollView>
      <Button title="SAVE" color="tomato" onPress={saveBook} />
    </KeyboardAvoidingView>
  );
}