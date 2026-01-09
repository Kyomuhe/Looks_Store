import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor:'#007AFF',
            tabBarInactiveTintColor:'gray',
        }}
        >
            <Tabs.Screen
            name="index"
            options ={{
                title:'Home',
                tabBarIcon:({color,size})=>(
                    <Ionicons name="home" color={color} size={size}/>
                )
            }}
            />

            <Tabs.Screen
            name='collections'
            options ={{
                title:'Collections',
                tabBarIcon:({color,size})=>(
                    <Ionicons name="folder" color={color} size={size}/>
                )
            }}
            />
            <Tabs.Screen
            name='calendar'
            options ={{
                title:'Calendar',
                tabBarIcon:({color,size})=>(
                    <Ionicons name="calendar" color={color} size={size}/>
                )
            }}
            />
            <Tabs.Screen
            name="profile"
            options ={{
                title:'Profile',
                tabBarIcon:({color,size})=>(
                    <Ionicons name="person" color={color} size={size}/>
                )
            }}
            />
        </Tabs>
    )
}