import { View, Text, Image } from 'react-native'
 import img1 from '../../assets/images/bg2.jpg'
import React from 'react'
import { ScrollView } from 'react-native-web';
 const items =[
  
   {
    image: require("../../assets/images/shopping-bag.png"),
     text: 'Pick-up',
   },
   {
     image: require("../../assets/images/soft-drink.png"),
     text: 'Soft Drinks',
   },
   {
     image: require("../../assets/images/bread.png"),
     text: 'Bakery Items',
   },
   {
     image: require("../../assets/images/fast-food.png"),
     text: 'Fast foods',
  },
   {
     image: require("../../assets/images/deals.png"),
     text: 'Deals',
   },
   {
     image: require("../../assets/images/coffee.png"),
     text: 'Coffee & Tea',
},
];
export default function Categories() {
  return (
    //  MarginTop will create space between category component and header component and we give the category component the background color of white
    // padding vertical will give us some space veritically on our category component 
    //and padding Left will give us some space on the left of our component

    <View style={{marginTop:5, backgroundColor:"#fff",
    paddingVertical:10,
    paddingLeft:20}}>

{/*using scrollView and horizontal to allow our items inside the category componet to display horizontally
     and the showHorizontalScrollIndicator will hide the scroller   */}
    <ScrollView horizontal showHorizontalScrollIndicator={false}>
{/* this will center the image alignItems , marginRight will give some space on the right of  image giving another picture some space*/}
  {/* Starting of loop */}
  {/* give a unique key to each child using index*/}
  {items.map((item,index)=>(
    
    <View key={index} style={{alignItems:'center', marginRight:30}}>

  
    {/* Get images from the items array dynamically */}
     <Image source={item.image} style={{width:50,height:40,resizeMode:'contain'}}/> 
    {/* Get Text Diynamically from the array  */}
     <Text style={{fontSize: 13, fontWeight:"900"}}>{item.text}</Text>
     
     </View>
     ))}
   
        {/* Ending of the loop */}
    </ScrollView>
    </View>
  )
}