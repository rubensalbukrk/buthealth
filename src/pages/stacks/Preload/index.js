import React from "react";
import { View, ActivityIndicator} from "react-native";


export default function Preload(){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8A84E2'}}>
            <ActivityIndicator  size={'large'} color={'white'} />
        </View>
    )
};