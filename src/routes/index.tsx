import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./Drawer.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}