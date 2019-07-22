import React from 'react'

const List = props => {
  const products = (props.products || []).filter(item => item.name.toLowerCase().includes(props.searchTerm))
  return (
    <div className="product">
      {(products || []).map(item => (
        <div key={item.id} className="product__card">
          <img className="product__image" src={item.image_url} alt="product" />
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
}

export default List