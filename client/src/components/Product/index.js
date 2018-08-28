import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import ProductInfo from './productInfo';
import ProductImg from './productImg';

import { connect } from 'react-redux';

import { getProductDetail, clearProductDetail } from '../../actions/productActions';
import { addToCart } from '../../actions/userActions';

class ProductPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id)).then(response => {
      if(!this.props.products.prodDetail) {
        this.props.history.push('/');
      }
    })
  }

  componentWillUnmount(){
    this.props.dispatch(clearProductDetail());
  }

  addToCartHandler = (id) => {
    this.props.dispatch(addToCart(id))
  }

  render() {
    return (
      <div>
        {/* <PageTop
          title="Product Detail"
        /> */}

        {
          this.props.products.prodDetail ?
            <div className="product_detail_wrapper row" style={{ marginTop: '30px' }}>
              <div className="col-md-5 col-sm-12">
                <div>
                  <ProductImg
                    detail={this.props.products.prodDetail}
                  />
                </div>
              </div>
              <div className="col-md-7 col-sm-12">
                <ProductInfo
                  addToCart={(id) => this.addToCartHandler(id)}
                  detail={this.props.products.prodDetail}
                />
              </div>
            </div>
          :null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductPage);
