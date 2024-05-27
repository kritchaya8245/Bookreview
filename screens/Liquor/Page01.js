import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Page01() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "column"}}>
        <Text style={{marginTop:10, marginLeft:200, fontSize:20}}>แก้วที่ 1</Text>
        <Text style={{marginTop:5, marginLeft:110, fontSize:18}}>ไฮบอลในบาร์เนื้อย่าง กี่แก้วก็ไม่พอ</Text>
        <Text style={{marginTop:50, marginLeft:150, fontSize:16}}>รายละเอียดการไหว้วาน</Text>
        <Text style={{marginTop:5, marginLeft:110, fontSize:16}}>อามาซาวะ ริกะ คุณพี่สาวยอดนักสืบ</Text>
        <Text style={{marginTop:20, marginLeft:80, fontSize:14}}>"เอ๊ะ แปลกจังน่าจะอยู่แถวนี้นี่นา..."</Text>
        <Text style={{marginTop:20, marginLeft:85, fontSize:14}}>ช่วงเวลาอาทิตย์ใกล้ลับขอบฟ้าของเย็นวันพุธที่ 1 กรกฏาคม</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>ทั้งที่ยังไม่มีการประกาศสิ้นสุดฤดูฝนอย่างเป็นทางการแต่ดวงอาทิตย์</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>กลับเป็นพระเอกกลางท้องฟ้าตลอดวันเมฆฝนไม่ปรากฏตัวให้เห็นสักพัก</Text>
        <Text style={{marginTop:20, marginLeft:85, fontSize:14}}>ผมลอดช่องตรวจตั๋วรถไฟใต้ดินของสถานีอิเคบุคุโระอันสลับ</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>ซับซ้อนราวกับเขาวงกตขนาดมหึมา แล้วโผล่ขึ้นมาบนถนน เดินผ่านร้าน</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>อิซากายะ และร้านคาราโอเกะที่คึกคักด้วยนักศึกษา จากนั้นฉีกออกจาก</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>ถนนใหญ่ เพ่งมองแผนที่ในสมาร์ตโฟนด้วยความรอบคอบพลางมองหาตึก</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>ที่เป็นจุดหมายปลายทาง</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>------------------------------</Text>
        <Text style={{marginTop:20, marginLeft:85, fontSize:12}}>อิซากายะ คือ ร้านอาหารแนวกินดื่มสไตล์ญี่ปุ่น เน้นขายเครื่องดื่ม</Text>
        <Text style={{marginTop:10, marginLeft:20, fontSize:12}}>แอลกอฮอลล์หลากหลาย ราคาย่อมเยา และอาหารแนวกับแกล้ม</Text>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Page02")} />
    </View>
  );
}