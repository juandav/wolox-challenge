import React, {Component} from 'react'
import {connect} from 'react-redux'
import Bar from 'components/products/bar'
import Search from 'components/products/search'
import List from 'components/products/list'
import {fetchProducts} from 'store/products/actions'

class ProductsPage extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    return (
      <>
        <Bar />
        <Search />
        <List products={this.props.products} />
      </>
    )
  }
}

const mapStateToProps = ({ 
  data:{products},
}) => ({ 
  products,
})

export default connect(
  mapStateToProps, 
  ({fetchProducts})
)(ProductsPage)