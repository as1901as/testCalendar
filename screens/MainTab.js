import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import CommunityScreen from './FeedsScreen';
import MapScreen from './MapScreen';
import SettingScreen from './SettingScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#009688',
      }}>
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon1 name="map-marker" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="chatbot"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon1 name="wechat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;