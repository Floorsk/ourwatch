import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../pages/SplashScreen"
import Home from '../pages/Home'

const Routes = () => {

    const Drawer = createDrawerNavigator()

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Splash">
                <Drawer.Screen name="Splash" component={SplashScreen} />
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes