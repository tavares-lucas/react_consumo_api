import React, { Component } from 'react';
import logo from './logo.svg';
import './Product.css';

class Product extends Component {
  render() {
  	const props = this.props
  	const product = props.product
  	var classesNames = 'product'

  	if(product.outOfStock)
  		classesNames = classesNames + ' out-of-stock'

    return (
    	<div className={classesNames}>
    	  <figure>
    	    <a href={product.url} target="_blank"><img src={product.img} /></a>
    	  </figure>
    	  <header><strong>{product.name}</strong></header>
    	  <span className='sku'>SKU: {product.id}</span><br />
    	  <span className='price'>R$ {product.price}</span><br />
    	</div>
    )
  }
}

export default Product;
