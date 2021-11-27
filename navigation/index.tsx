/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Image, ImageSourcePropType, ImageProps, View } from 'react-native';

import { ORCA } from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TodayTabScreen from '../screens/TodayTabScreen';
import ExploreTabScreen from '../screens/ExploreTabScreen';
import FavouritesTabScreen from '../screens/FavouritesTabScreen';
import ConnectTabScreen from "../screens/ConnectTabScreen";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { CONNECT_TAB_ICON, EXPLORE_TAB_ICON, FAVOURITES_TAB_ICON, TODAY_TAB_ICON, USER_AVATAR } from '../assets/images';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen}  options={{ headerShown: false }}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="TodayTab"
      screenOptions={{
        tabBarActiveTintColor: ORCA,
      }}>
      <BottomTab.Screen
        name="TodayTab"
        component={TodayTabScreen}
        options={({ navigation }: RootTabScreenProps<'TodayTab'>) => ({
          title: 'Today',
          headerStyle: {
            backgroundColor: ORCA,
            shadowColor: 'transparent'
          },
          tabBarIcon: ({ color }) => <TabBarIcon name={TODAY_TAB_ICON} color={color} />,
          headerRight: () => (
            <View style={{marginRight: 19}}>
               <Image source={USER_AVATAR} height={20} width={20}/>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="ExploreTab"
        component={ExploreTabScreen}
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <TabBarIcon name={EXPLORE_TAB_ICON} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="FavouritesTab"
        component={FavouritesTabScreen}
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color }) => <TabBarIcon name={FAVOURITES_TAB_ICON} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="ConnectTab"
        component={ConnectTabScreen}
        options={{
          title: 'Connect',
          tabBarIcon: ({ color }) => <TabBarIcon name={CONNECT_TAB_ICON} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: ImageProps | ImageSourcePropType;
  color: string;
}) {
  // return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  return <Image source={props.name}/>
}
