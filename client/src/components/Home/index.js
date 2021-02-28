import React, { Component } from "react";
import HomeSlider from "./slider";
import HomePromotion from "./promotion";
import CardBlock from "../utils/cardBlock";
import ImgShowcase from "./imgShowcase";
import Motto from "./motto";

import { connect } from "react-redux";
import {
  getProductsBySell,
  getProductsByArrival
} from "../../actions/productActions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <CardBlock
          list={this.props.products.bySell}
          title="Best Selling Guitars"
        />
        <HomePromotion />
        <CardBlock list={this.props.products.byArrival} title="New Arrivals" />
        <ImgShowcase />
        <Motto />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Home);
