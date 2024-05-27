import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Catagory from "../components/Catagory";
import BottomTab from "./BottomTab";
import Main from "../screens/Main";
import CatagoryPage from "../screens/CatagoryPage";
import Novel from "../screens/Novel";
import NovelDetail from "../screens/NovelDetail";
import NovelForm from "../screens/NovelForm";
import Literature from "../screens/Lirerature";
import LiteratureDetail from "../screens/LiteratureDetail";
import LiteratureForm from "../screens/LiteratureForm";
import Page01 from "../screens/Liquor/Page01";
import Page02 from "../screens/Liquor/Page02";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="Catagory" component={CatagoryPage} options={{ title : "Catagory" }}  />
      <Stack.Screen name="Page01" component={Page01}/>
      <Stack.Screen name="Page02" component={Page02}/>
      <Stack.Screen name="Main" component={Main} options={{ title : "Main" }} />
      <Stack.Screen name="Novel" component={Novel} options={{ title : "นิยาย" }} />
      <Stack.Screen name="NovelDetail" component={NovelDetail} options={{ title : "รายละเอียด"}} />
      <Stack.Screen name="NovelForm" component={NovelForm} options={{ title : "NovelForm"}} />
      <Stack.Screen name="Literature" component={Literature} options={{ title : "วรรณกรรม" }} />
      <Stack.Screen name="LiteratureDetail" component={LiteratureDetail} options={{ title : "รายละเอียด"}} />
      <Stack.Screen name="LiteratureForm" component={LiteratureForm} options={{ title : "LiteratureForm"}} />
    </Stack.Navigator>
  );
}