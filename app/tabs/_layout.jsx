import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout(){
    return(
        <Tabs
        screenOptions={{
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
            name="two"
            options ={{
                title:'Search',
                tabBarIcon:({color,size})=>(
                    <Ionicons name="search" color={color} size={size}/>
                )
            }}
            />
            <Tabs.Screen
            name="three"
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