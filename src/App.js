import React from 'react'
import "./App.css";
const date =new Date()
const currentTime = date.getHours()

const customeStyle={
  color: ""
}
let paragraph;
let greeting;
if(currentTime < 12){
  greeting ="Good Morning"
  paragraph="You open this Website between 6AM to 11PM"
  customeStyle.color="red"
}
else if(currentTime < 18 ){
  greeting = "Good Afternoon"
  paragraph="You open this Website between 12PM to 5PM"
  customeStyle.color="green"
}
else {
  greeting = "Good Night"
  paragraph="You open this Website Above 6PM"
  customeStyle.color="blue"
}





const App = () => {
  return (
    <div className='body'>
      <div className='container'>
      <h1 className='heading' style={customeStyle}>{greeting}</h1>
      <p className='paragraph'>{paragraph}</p>
      </div>
    </div>
  )
}

export default App

