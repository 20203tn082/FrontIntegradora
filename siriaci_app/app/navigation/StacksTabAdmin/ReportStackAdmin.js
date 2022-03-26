import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Report from "../../screens/report/Report";
import CreateReport from "../../components/reports/CreateReport";
const Stack = createStackNavigator();

export default function ReportStackAdmin() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#131c46'}
            }}
        >
            <Stack.Screen
                name="report"
                component={ Report }
                options={{ title: "Reporte" }}
            />
             <Stack.Screen
                name="createReport"
                component={ CreateReport }
                options={{ title: "Crear Nuevo Reporte" }}
            />
            
        </Stack.Navigator>
    )
}