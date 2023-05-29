import React from "react";
import { View, Text , ActivityIndicator} from "react-native";


export default function Preload(){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8A84E2'}}>
            <ActivityIndicator  size={32} color={'white'} />
        </View>
    )
};