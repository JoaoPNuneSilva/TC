import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Register from "../pages/Register"


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DashBoard"
                component={DashBoard}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
            />
             {/*
            <Stack.Screen
                name="SignUp "
                component={}
                options={{
                    title: 'Configurações',
                    headerStyle: {
                      backgroundColor: '#0B72F3',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            /> */}
        </Stack.Navigator>
    )
}
