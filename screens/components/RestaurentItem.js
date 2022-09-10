import { View, Text, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons"
//  restaurant represented as objects inside localRestaurent
export const localRestaurents=[
  {
    name: "Beachside bar",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1200px-Restaurant_N%C3%A4sinneula.jpg",
  categories:["Cafe", "Bar"],
  price:"RR",
  reviews:1244,
rating:4.5,
},
{
  name: "Benihana",
image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
categories:["Cafe", "Bar"],
price:"RR",
reviews:1244,
rating:3.7,
},
{
  name: "Benihana",
image: "https://www.baiarestaurant.co.za/images/outside.jpg",
categories:["Cafe", "Bar"],
price:"RR",
reviews:1244,
rating:3.7,
},
{
  name: "Benihana",
image: "https://www.capetownmagazine.com/media_lib/preview/3f8b85a6bf05222c24bcfc84e9d06c15.preview.jpg?width=1200&enable=upscale",
categories:["Cafe", "Bar"],
price:"RR",
reviews:1244,
rating:3.7,
},
{
  name: "Benihana",
image: "http://restaurantvilakazi.co.za/wp-content/uploads/2010/05/restaurant-vilakazi-bar.jpg",
categories:["Cafe", "Bar"],
price:"RR",
reviews:1244,
rating:3.7,
},

]
export default function RestaurentItem(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
   {/* Start of the loop  */}
    {props.restaurantData.map((restaurant, index)=>(

    
    <View key={index} style={{marginTop:20,padding:15,backgroundColor:"#fff"}}>
    {/* this component will display restaurent image */}
    <RestaurentImage image={restaurant.image}/>
      {/* Restaurent info */}
     <RestaurentInfo name={restaurant.name} rating={restaurant.rating}/>
    </View>
    )
    )}
    {/* end o floop */}
    </TouchableOpacity>
  )
}
// bulid sub components
const RestaurentImage =(props)=>(
  // passing image to subcomponent for the internet
  // Adding image and icon with touchableOpacity in framgments
 <>
 <Image source={{uri:props.image,
 }}
  style={{width:"100%", height:280}}
  />
  <TouchableOpacity style={{position:"absolute", right:20, top:20}}>
    <MaterialCommunityIcons name="heart-outline" size={25} color="orange"/>
  </TouchableOpacity>
  </>
)
// bulid another sub components
const RestaurentInfo=(props)=>(
  <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",
  marginTop:10}}>
  {/* restaurent name */}
  <View>
  <Text style={{fontSize:15, fontWeight:"bold"}}>{props.name}</Text>
  {/* waiting time */}
  <Text style={{fontSize:13,color:'grey'}}>30-45 min </Text>
  </View>
  {/* rating */}
  <View style={{backgroundColor:'#eee',height:30,width:30,
  alignItems:"center", borderRadius:15,justifyContent:"center"}}>
  <Text>{props.rating}</Text>
  </View>
</View>
)

