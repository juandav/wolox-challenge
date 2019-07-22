import React, {Component} from 'react'
import {connect} from 'react-redux'
import Bar from 'components/products/bar'
import Search from 'components/products/search'
import List from 'components/products/list'
import {fetchProducts, changeSearchTerm} from 'store/products/actions'
import {unsetCurrentApiToken} from 'store/auth/actions'
import Spinner from 'components/shared/spinner'

class ProductsPage extends Component {
  handleToChangeSearchTerm = e => {
    this.props.changeSearchTerm(e.target.value)
  }
  handleUnsetToken = _e => {
    console.log('unset')
    this.props.unsetCurrentApiToken()
  }
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    return (
      <>
        <Bar unsetToken={this.handleUnsetToken}/>
        <Search changeSearchTerm={this.handleToChangeSearchTerm} />
        {this.props.loading? 
          <Spinner />: 
          <List 
            searchTerm={this.props.searchTerm} 
            products={this.props.products} 
          />}
      </>
    )
  }
}

const mapStateToProps = ({ 
  data:{
    products, 
    searchTerm,
    loading,
  },
}) => ({ 
  products,
  searchTerm,
  loading,
})

const Page = connect(
  mapStateToProps, 
  ({fetchProducts, changeSearchTerm, unsetCurrentApiToken})
)(ProductsPage)

export default Page