import React, { Component } from 'react';
import Header from '../components/Header_Footer/Header';
import Footer from '../components/Header_Footer/Footer';
import { connect } from 'react-redux';
import { getSiteData } from '../actions/siteActions';


class Layout extends Component {
  componentDidMount() {
    if(Object.keys(this.props.site).length === 0) {
      this.props.dispatch(getSiteData());
    }
  }

  render() {
    return (
      <div className="row">
        <Header />
        <div className="page_container row">
          {this.props.children}
        </div>
        <Footer data={this.props.site} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}

export default connect(mapStateToProps)(Layout);
