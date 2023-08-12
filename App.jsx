// import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerComponent from "./src/Components/DrawerComponent";
import HomePage from "./src/Pages/HomePage";
import NavBar from "./src/Components/NavBar";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={DrawerComponent}
          screenOptions={{
            header: ({ navigation }) => (
              <>
                <NavBar navigation={navigation} />
              </>
            ),
            drawerStyle: {
              width: 330,
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            options={{
              // drawerLabel: "Home",
              title: "Homedafs",
              // drawerIcon: () => {
              //   <SimpleLineIcons name='home' size={20} color="#808080"/>
              // }
            }}
            component={HomePage}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

// // import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }
