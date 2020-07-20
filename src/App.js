import React, { Component } from 'react';

import axios from 'axios';
import ReacrPaginate from 'react-paginae';

export default class App extends Component {
  constructor(props) {
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0,
    };
  }
  render() {
    return <div></div>;
  }
}
