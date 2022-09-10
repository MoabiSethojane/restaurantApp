import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTab() {
    // Because we want to keep track of the state of out button we use useState hook to help us on that
    // By using Booking inside ore brackets that will be on booking by default 
    const [activeTab, setActiveTab] = useState("Booking")
  return (
    // Styling our buttons components e.g subcomponents
    <View style={{flexDirection:"row", alignSelf:"center"}}>
    {/* HeaderButton */}
    {/* Because our background color and text color change depending on the button 
    status of the button so we need to pass both the background color and text color as props */}
      {/* pass the state of out activce tab to booking tab  and the setActiveTab will be the setactive tab hook*/}
      <HeaderButton
       text="Booking" 
       btncolor="black"
       textcolor="white"
        activeTab={activeTab}
         setActiveTab={setActiveTab}/>
      <HeaderButton 
      text="Pickup"
      btncolor="white" 
      textcolor="black"
      activeTab={activeTab}
       setActiveTab={setActiveTab}/>
    </View>
  )
}
// Create buttons as sub components of headerTab component
// turn our Booking  into a prop
const HeaderButton=(props)=>(
    
    
    //  Wrap buttons  UsingTouchable opacity to allow our text to be able to be pressed when the 
    //onpress is added to the text because text does not have onpress by default 
//    paddingVertical will shift the text from the height and paddingHorizontal will shift it away for the width
//   Because the background color will be black based on a specific codition we must have codititional check (if statment)
  <TouchableOpacity style={{
    // because we have created props for our backgroudcolor we must pull it using props
    backgroundColor:props.activeTab === props.text ?'black':'white',
    paddingVertical:6,
    paddingHorizontal:16,
    borderRadius:30
    }}
    onPress={()=> props.setActiveTab(props.text)}>
    {/* our text must take props as text  */}
    {/* Also pull our text color using props as we have created one for text color */}
    {/* Next step will be to make our text clickable, for that we must add the onpress functionality to our
    touchableopacity */}
    {/* Also we must change the text color like our background color using the state  */}
    <Text style={{color:props.activeTab === props.text ? "white" :"black", 
    fontSize:15, 
    fontWeight:"900"}}>
    {props.text}</Text>
    </TouchableOpacity>
    
)