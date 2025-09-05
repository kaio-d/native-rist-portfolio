import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home/Home';
import { Skills } from '../screens/Skills/Skills';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Skills" component={Skills} />
    </Drawer.Navigator>
  );
}