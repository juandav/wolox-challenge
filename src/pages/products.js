import React, {Component} from 'react'
import {connect} from 'react-redux'
import Bar from 'components/products/bar'
import Search from 'components/products/search'
import List from 'components/products/list'
import {fetchProducts, changeSearchTerm} from 'store/products/actions'

class ProductsPage extends Component {
  handleToChangeSearchTerm = e => {
    this.props.changeSearchTerm(e.target.value)
  }
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    return (
      <>
        <Bar />
        <Search changeSearchTerm={this.handleToChangeSearchTerm} />
        <List 
          searchTerm={this.props.searchTerm} 
          products={this.props.products} 
        />
      </>
    )
  }
}

const mapStateToProps = ({ 
  data:{products, searchTerm},
}) => ({ 
  products,
  searchTerm
})

export default connect(
  mapStateToProps, 
  ({fetchProducts, changeSearchTerm})
)(ProductsPage)