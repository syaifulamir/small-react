import React, { Component } from 'react';
import Listing from '../pages/Listing';
import DetailList from '../pages/DetailList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Listing} />
        <Route path="/detail/:id" component={DetailList} />
      </div>
    );
  }
}

export default Content;
