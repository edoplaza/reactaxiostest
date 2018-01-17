import React, { Component } from 'react';

class Advertisement extends Component{
  render(){
    let image = this.props.featuredImage
    let description = this.props.description
    let title = this.props.title
    let tag = this.props.tag
    let price = this.props.price
    return (
      <div className="advertisement">
        <figure className="featured-image">
          <img src={image} alt={title}/>
        </figure>
        <div className="advertisement-header">
          <h2>{title }</h2>
          <p>{description}</p>
        </div>
        <div className="advertisement-meta">
          <span>{price} €</span><span></span>
        </div>
      </div>
    );
  }
}

export default Advertisement
