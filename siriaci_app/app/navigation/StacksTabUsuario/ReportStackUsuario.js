import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Report from "../../screens/report/Report";
import CreateReport from "../../components/reports/CreateReport";
import VistaReporte from "../../components/reports/VistaReporte";
const Stack = createStackNavigator();

export default function ReportStackUsuario() {
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
                name="vistaReporte"
                component={ VistaReporte }
                options={{ title: "Crear Nuevo Reporte" }}
            />


        </Stack.Navigator>
    )
}