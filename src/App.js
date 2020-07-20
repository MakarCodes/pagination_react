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

  receiveData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map(pd => (
        <React.Fragment>
          <p>{pd.title}</p>
          <img src={pd.thumbnailUrl} alt='' />
        </React.Fragment>
      ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
      });
    });
  };

  handlePageClick = e => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receiveData();
      }
    );
  };
  render() {
    return (
      <div>
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}
