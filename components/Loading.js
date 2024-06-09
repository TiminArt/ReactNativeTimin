import React from "react";
import { SafeAreaView, Text } from "react-native";
import { gStyles } from "../styles/style";

export default function Loading() {
    return (
        <SafeAreaView style={gStyles.container}>
            <Text style={gStyles.text}>Получение погоды...</Text>
        </SafeAreaView>
    )
}