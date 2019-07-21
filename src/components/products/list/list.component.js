import React from 'react'

const List = props => (
  <div className="product">
    {(props.products || []).map(item => (
      <div className="product__card">
        <img className="product__image" src="https://hniesfp.imgix.net/8/images/detailed/94/01-02010100R3G1_6.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress" alt="" />
        <div className="product__content">
          <span className="product__name">{item.name}</span>
          <br />
          <span className="product__price">{item.price}</span>
          <hr className="product__divider" />
          <p className="product__description">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
)

export default List