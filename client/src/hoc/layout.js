import React, { Component } from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { connect } from "react-redux";
import { getSiteData } from "../actions/siteActions";

class Layout extends Component {
  componentDidMount() {
    if (Object.keys(this.props.site).length === 0) {
      this.props.dispatch(getSiteData());
    }
  }

  render() {
    return (
      <div className="row">
        <Header />
        <div className="row">{this.props.children}</div>
        <Footer data={this.props.site} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    site: state.site
  };
};

export default connect(mapStateToProps)(Layout);
