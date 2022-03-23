import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Report from "../../screens/report/Report";
const Stack = createStackNavigator();

export default function ReportStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#131c46'}
            }}
        >
            <Stack.Screen
                name="reportStack"
                component={ Report }
                options={{ title: "Reporte" }}
            />
            
        </Stack.Navigator>
    )
}