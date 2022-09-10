import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTab from './components/HeaderTab'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import RestaurentItem, { localRestaurents } from './components/RestaurentItem'


export default function Home() {
  const [restaurantData, setRastaurantData]=React.useState(localRestaurents)
  return (
    // Use SafeAreaView so that the header tab does not appear outside the safe area
    // Styling our safe area  in our home screen and by adding flex 1 
    // this background color will cover the whole screen
    <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
    {/*wrap our Header component in a view */}
    {/* we also want our header Tab component to be in a white background and give space for our header tab component by using 
    padding to be 15 ,we must style the view holding it  */}
    <View style={{backgroundColor:"white", padding:15}}>
    <HeaderTab/>
    <SearchBar />
    </View>
    {/* this will help on the veritical scorll  */}
    <ScrollView showVerticalScrollIndicator={false}>
    <Categories />
    <RestaurentItem  restaurantData={restaurantData}/>
  
    </ScrollView>
    
    </SafeAreaView>
  )
}