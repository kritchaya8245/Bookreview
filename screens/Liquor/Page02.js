import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Page02() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={{marginTop:20, marginLeft:85, fontSize:14}}>ถึงแม้จะเลยหกโมงครึ่งไปแล้ว แต่เหงื่อยังซึมแขนขณะก้าวเดิน</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>คนจากร้านอาหารจีนตักน้ำราดพื้นถนน ไม่แน่ใจว่าต้องการคลายร้อน</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>หรือเปล่า ได้กลิ่นเหมือนตอนฝนตกใหม่ ๆ โชยมาจากพื้นลาดยาง</Text>
        <Text style={{marginTop:20, marginLeft:80, fontSize:14}}>"ขอโทษด้วยคับ ผมคิดว่าคงอยู่แถวนี้"</Text>
        <Text style={{marginTop:20, marginLeft:85, fontSize:14}}>ผมหันกลับไปโค้งศรีษะ หญิงสาวผู้ที่เดินตามหลังมาส่ายหน้า</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>เล็กน้อยพร้อมตอบว่า "ไม่เป็นไร" รอบข้างออกจะมืดไปสักหน่อย</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>ผมจึงอาสาพาเธอไปที่ร้าน</Text>
        <Text style={{marginTop:20, marginLeft:85, fontSize:14}}>ตำแหน่งของตึกถูกแล้ว แต่ทางเข้าอยู่ทิศตรงข้าม เมื่อสิ้นสุด</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>ขั้นตอนค้นหาร้านในเมืองใหญ่ที่มักมาพร้อมความสับสนในที่สุด ก็มาถึง</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>บาร์เนื้อย่างชื่อดังจากเว็บไซต์ที่รีวิวปากต่อปาก เมื่อขึ้นลิฟต์ขนาดใหญ่</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>ถึงชั้นสามและเปิดประตูเข้าไป มีพนักงานหญิงมาต้อนรับ เธอสวมเสื้อเชฟ</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>แขนสามส่วนผ่าปลายแขนกลัดกระดุมสีไวน์สองแถวตรงหน้าอก</Text>
        <Text style={{marginTop:20, marginLeft:80, fontSize:14}}>"ยินดีต้อนรับค่ะ ได้จองไว้ไหมคะ"</Text>
        <Text style={{marginTop:20, marginLeft:80, fontSize:14}}>"เอ่อ ครับ จองชื่ออามาซาวะครับ..."</Text>
        <Text style={{marginTop:20, marginLeft:80, fontSize:14}}>"จองไว้สามท่านนะคะ ทางร้านเตรียมที่นั่งไว้แล้วค่ะ เพื่อนของ</Text>
        <Text style={{marginTop:20, marginLeft:20, fontSize:14}}>ลูกค้าก็มาถึงก็มาถึงแล้วนะคะ"</Text>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Page03")} />
    </View>
  );
}