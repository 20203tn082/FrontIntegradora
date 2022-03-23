import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Capsule from "../../screens/capsula/Capsule";
const Stack = createStackNavigator();

export default function CapsuleStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#131c46'}
            }}
        >
            <Stack.Screen
                name="capsuleStack"
                component={ Capsule }
                options={{ title: "Capsula informativa" }}
            />
            

        </Stack.Navigator>
    )
}