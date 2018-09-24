import React, { Component } from 'react';
import logo from './logo.svg';
import './ProductList.css';
import Product from './Product.jsx'

class ProductList extends Component {
  constructor(args) {
    super(args)
    this.state = {
      products: [
        {
          "name": "Jogo de Panelas Tramontina Turim Alumínio 5 Peças Vermelho",
          "id": "122605850",
          "url": "https://b2tracker.ad5track.com/tracker/click/?redirect_url=https%3A%2F%2Fwww.americanas.com.br%2Fproduto%2F122605850%3Fchave%3Db2wads_5ab41f744586fb0ddb5e6685_10368118000201_122605850&aid=5ab41f744586fb0ddb5e6685&sid=10368118000201&pid=122605850&pos=1&impression_id=d23a6719-44f1-4f87-a83b-52652466d706",
          "seller": "ESTRELA 10",
          "seller_id": "10368118000201",
          "img": "https://images-americanas.b2w.io/produtos/01/00/item/122605/8/122605850G1.png",
          "price": 129.9,
          "chave": "b2wads_5ab41f744586fb0ddb5e6685_10368118000201_122605850",
          "queryString": "context=search&api=b2wads&chave=b2wads_5ab41f744586fb0ddb5e6685_10368118000201_122605850&sellerId=10368118000201&sellerName=ESTRELA%2010&pos=0"          
        }
      ]
    }
  }

  componentDidMount() {
    this.fetchProducts()
  }

  updateProducts(products) {
    this.setState({
      products: products
    })
  }

  fetchProducts() {
    var self = this

    fetch('https://api.myjson.com/bins/16zdi4').then((data) => (
      data.json()      
    )).then((json) => {
      this.updateProducts(json.products)
    })
  }

  render() {
    return (
      <div className='products-list'>
        {this.state.products.map((product, index) => {
            return <Product index={index} product={product} />
        })}
      </div>
    )
  }
}

export default ProductList;
