import React, { Component } from 'react';
import axios from 'axios';
import Advertisement from './Advertisement'

class App extends React.Component {
  constructor() {
    super();
    this.state = {  data: [] };
  }
  componentDidMount() {
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then(response => {
        this.setState({data: response.data})
        console.log(response.data)
    });
  }
  render() {
    return (
      <div className="home container">
        <div className="advertisements">
          {
            this.state.data.slice(0, 12).map(function(ad, i){
            return <Advertisement
              key={i}
              featuredImage={ad.image_link}
              title = {ad.name}
              tag = {ad.brand}
              description = {ad.description}
              price = {ad.price}
            />
           })
         }

        </div>
     </div>
    )
  }
}

export default App
