

import React from 'react';

class App extends React.Component {
  state = {
    fullName : "Skander Hammami" ,
    bio : "xxxxx" ,
    imgSrc : "./",
    profession : "Student",
    shows : true,
  };
  
  render () {
     return (
    <div className="App">
    
       <button onClick={this.shows}>{this.fullName, this.bio, this.imgSrc, this.profession} </button>
    
    </div>
     );
 }
}


