import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image, Text, TextInput, FlatList, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(props) {
    const continues = [
        { "Name": "LIQUOR MYSTERY", "writer": "โรคุโจ โนเอรุ", "page": "80", "pageall": "300", "uri": "https://image.makewebcdn.com/makeweb/m_1920x0/7GFEYsdVK/DefaultData/Liquor_mystery.jpg?v=202206091808" },
        { "Name": "พิกัดต่อไปใครเป็นศพ?", "writer": "ฮิงาชิโนะ เคโงะ", "page": "80", "pageall": "300", "uri": "https://images-se-ed.com/ws/Storage/Originals/978616/287/9786162872068L.jpg?h=69adb944b24580a1f882ffd3de84ffea" },
        { "Name": "คดีฆาตกรรมในบ้านสิบเหลี่ยม", "writer": "อายาสึจิ ยูกิโตะ", "page": "80", "pageall": "300", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202107/530088/6000049898_front_XXL.jpg?imgname=%E0%B8%84%E0%B8%94%E0%B8%B5%E0%B8%86%E0%B8%B2%E0%B8%95%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B8%9A%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1" },
    ];

    const populars = [
        { "Name": "How to Live a Good Life", "writer": "นิ้วกลม", "list": "250", "view": "400", "love": "190", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202310/592478/1000265749_front_XXL.jpg?imgname=How-to-Live-a-Good-Life" },
        { "Name": "Principle Your Guided", "writer": "เรย์ ดาลิโอ", "list": "230", "view": "350", "love": "150", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202309/590313/1000264954_front_XXL.jpg?imgname=Principle-Your-Guided-Journal-(%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87)" },
        { "Name": "SCIENCE of SLEEP", "writer": "DARWALL-SMITH", "list": "220", "view": "400", "love": "120", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202310/592468/1000265740_front_XXL.jpg?imgname=The-Science-of-Sleep-%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%9A-(%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87)" },
        { "Name": "วิธีคิดของคนค่าตัวแพง", "writer": "คิตาโนะ ยุยหงะ", "list": "200", "view": "400", "love": "110", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202309/590558/1000265060_front_XXL.jpg?imgname=%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%99%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%9E%E0%B8%87" },
        { "Name": "เราทุกคนก็มีตอนที่เป็นบ้า", "writer": "ซองจิอึม", "list": "190", "view": "390", "love": "120", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202309/591173/1000265240_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%84%E0%B8%99%E0%B8%81%E0%B9%87%E0%B8%A1%E0%B8%B5%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B9%89%E0%B8%99" }
    ];

    const youmayalsolikes = [
        { "Name": "คดีคฤหาสน์กังหันทดน้ำ", "writer": "อายาสึจิ ยูกิโตะ", "list": "250", "view": "400", "love": "190", "uri": "https://cdn-shop.ookbee.com/Books/PRISMPUBLISHING23GMA/2023/20231011104914220205/Thumbnails/Cover.jpg" },
        { "Name": "คดีในคฤหาสน์แมวดำ", "writer": "อายาสึจิ ยูกิโตะ", "list": "230", "view": "350", "love": "150", "uri": "https://cdn-shop.ookbee.com/Books/AmarinBooks/2022/20220518063112192784/Thumbnails/Cover.jpg" },
        { "Name": "ปริศนาดอกไม้มายา", "writer": "ฮิงาชิโนะ เคโงะ", "list": "220", "view": "400", "love": "120", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/201703/210761/1000194753_front_XXL.jpg?imgname=%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%A8%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%B2" },
        { "Name": "พันธุกรรมอำพราง", "writer": "ฮิงาชิโนะ เคโงะ", "list": "200", "view": "400", "love": "110", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/201909/490242/1000224824_front_XXL.jpg?imgname=%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%AD%E0%B8%B3%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%87" },
        { "Name": "คดีในคฤหาสน์เขาวงกต", "writer": "อายาสึจิ ยูกิโตะ", "list": "190", "view": "390", "love": "120", "uri": "https://cdn-shop.ookbee.com/Books/PRISMPUBLISHING23GMA/2024/20240319084940252266/Thumbnails/Cover.jpg" }
    ];

    const newbooks = [
        { "Name": "เขียนท่ามกลางพายุฝน", "writer": "ยี่สิบเอ็ด", "list": "250", "view": "400", "love": "190", "uri": "https://storage.naiin.com/system/application/bookstore/resource/product/202311/596858/1000267283_front_XXL.jpg?imgname=%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%9D%E0%B8%99-%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B9%80%E0%B8%98%E0%B8%AD%E0%B9%83%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%B8%E0%B9%89%E0%B8%87" },
        { "Name": "พนิน Pnin", "writer": "วลาดิเมียร์ นาโบคอฟ", "list": "230", "view": "350", "love": "150", "uri": "https://image.makewebcdn.com/makeweb/m_1920x0/7GFEYsdVK/DefaultData/9786168053065.jpg?v=202206091808" },
        { "Name": "Business Family", "writer": "ดร.กฤษฎ์เลิศ", "list": "220", "view": "400", "love": "120", "uri": "https://www.matichonbook.com/uploads/products/cover_660e47855638a.jpg" },
        { "Name": "สถาปัตยกรรมคณะเรี่ย", "writer": "ชัชวาล สุวรรณสวัสดิ์", "list": "200", "view": "400", "love": "110", "uri": "https://cdn.readthecloud.co/wp-content/uploads/2024/03/26183031/thailand-book-fair-2024-12.jpg" },
        { "Name": " ขอให้ความรักอยู่กับแมว", "writer": "โตมร ศุขปรีชา", "list": "190", "view": "390", "love": "120", "uri": "https://cdn.readthecloud.co/wp-content/uploads/2024/03/26183224/thailand-book-fair-2024-3.jpg" }
    ];

    const navigation = useNavigation();

    return (
        <View style={props.style}>
            <View style={{ flexDirection: "column", padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: "white" }}>BOOKreview</Text>
                    <FontAwesome name="user" size={25} color="white" />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 10, width: 330 }}>
                        <TextInput style={{ fontSize: 14 }} placeholder="What're you looking for ?" />
                    </View>
                    <Text style={{ marginTop: 8, marginRight: 18, color: "white" }} onPress={() => { navigation.navigate("Catagory") }}>Catagory</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }} source={{ uri: 'https://i.pinimg.com/564x/36/a0/85/36a085785eabcc6add04d35e8c97be37.jpg' }} />
                </View>
                {/* Continue Reading */}
                <View style={{ flexDirection: "column", marginTop: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "white" }}>Continue Reading</Text>
                        <Text style={{ color: "white" }} onPress={() => { navigation.navigate("BookShelf") }}>More</Text>
                    </View>
                </View>
                <FlatList
                    horizontal={true}
                    data={continues}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ borderRadius: 10, marginTop: 5, backgroundColor: 'white', width: 300, height: 150, marginLeft: 10 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Image style={{ marginLeft: 10, marginTop: 10, borderRadius: 10, width: 110, height: 130, }} source={{ uri: item.uri }} />
                                            <View style={{ flexDirection: "column", marginTop: 10 }}>
                                                <Text style={{ marginLeft: 5 }}>{item.Name}</Text>
                                                <Text style={{ marginLeft: 5, color: "gray" }}>{item.writer}</Text>
                                                <View style={{flexDirection:'row', marginLeft:5}}>
                                                    <Text style={{ marginTop: 20, color: 'gray', fontSize: 14 }}>{item.page}</Text>
                                                    <Text style={{ marginTop: 20, color: 'gray', marginLeft: 5, fontSize: 14 }}>of</Text>
                                                    <Text style={{ marginTop: 20, color: 'gray', marginLeft: 5, fontSize: 14 }}>{item.pageall}</Text>
                                                </View>
                                                <Text style={{ marginTop: 40, marginLeft: 110 }} onPress={() => { navigation.navigate("Page01")}}>Continue</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        }
                    }
                    keyExtractor={item => item.id}
                />
                {/* Popular */}
                <View style={{ flexDirection: "column", marginTop: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "white" }}>Popular</Text>
                        <Text style={{ color: "white" }}>More</Text>
                    </View>
                </View>
                <FlatList
                    horizontal={true}
                    data={populars}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <View style={{ borderWidth: 1, borderColor: 'white', borderRadius: 10, backgroundColor: '#212121', height: 200, flexDirection: "column", marginLeft: 10 }}>
                                            <Image style={{ borderRadius: 10, width: 110, height: 130, }} source={{ uri: item.uri }} />
                                            <Text style={{ color: "white", marginTop: 5, marginLeft: 5, fontSize: 10 }}>{item.Name}</Text>
                                            <Text style={{ color: "gray", marginTop: 1, marginLeft: 5, fontSize: 10 }}>{item.writer}</Text>
                                            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 20 }}>
                                                <FontAwesome name="list" size={10} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.list}</Text>
                                                <FontAwesome style={{ marginLeft: 5, marginTop: -2 }} name="eye" size={12} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.view}</Text>
                                                <FontAwesome style={{ marginLeft: 5 }} name="heart" size={10} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.love}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        }
                    }
                    keyExtractor={item => item.id}
                />
                {/* You may also like */}
                <View style={{ flexDirection: "column", marginTop: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "white" }}>You may also like</Text>
                        <Text style={{ color: "white" }}>More</Text>
                    </View>
                </View>
                <FlatList
                    horizontal={true}
                    data={youmayalsolikes}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <View style={{ borderWidth: 1, borderColor: 'white', borderRadius: 10, backgroundColor: '#212121', height: 200, flexDirection: "column", marginLeft: 10 }}>
                                            <Image style={{ borderRadius: 10, width: 110, height: 130, }} source={{ uri: item.uri }} />
                                            <Text style={{ color: "white", marginTop: 5, marginLeft: 5, fontSize: 10 }}>{item.Name}</Text>
                                            <Text style={{ color: "gray", marginTop: 1, marginLeft: 5, fontSize: 10 }}>{item.writer}</Text>
                                            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 20 }}>
                                                <FontAwesome name="list" size={10} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.list}</Text>
                                                <FontAwesome style={{ marginLeft: 5, marginTop: -2 }} name="eye" size={12} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.view}</Text>
                                                <FontAwesome style={{ marginLeft: 5 }} name="heart" size={10} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.love}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            );
                        }
                    }
                    keyExtractor={item => item.id}
                />
                {/* New book */}
                <View style={{ flexDirection: "column", marginTop: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "white" }}>New Books</Text>
                        <Text style={{ color: "white" }}>More</Text>
                    </View>
                </View>
                <FlatList
                    horizontal={true}
                    data={newbooks}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <View style={{ borderWidth: 1, borderColor: 'white', borderRadius: 10, backgroundColor: '#212121', height: 200, flexDirection: "column", marginLeft: 10 }}>
                                            <Image style={{ borderRadius: 10, width: 110, height: 130, }} source={{ uri: item.uri }} />
                                            <Text style={{ color: "white", marginTop: 5, marginLeft: 5, fontSize: 10 }}>{item.Name}</Text>
                                            <Text style={{ color: "gray", marginTop: 1, marginLeft: 5, fontSize: 10 }}>{item.writer}</Text>
                                            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 20 }}>
                                                <FontAwesome name="list" size={10} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.list}</Text>
                                                <FontAwesome style={{ marginLeft: 5, marginTop: -2 }} name="eye" size={12} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.view}</Text>
                                                <FontAwesome style={{ marginLeft: 5 }} name="heart" size={10} color="white" />
                                                <Text style={{ fontSize: 9, color: "gray", marginLeft: 2, marginTop: -2 }}>{item.love}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            );
                        }
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}