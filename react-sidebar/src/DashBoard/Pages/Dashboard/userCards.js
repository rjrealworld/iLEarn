import React, { Component } from "react";
import './userCards.css';

class UserCards extends Component {
  state = {
    data: [],
    per: 1,
    page: 1,
    total_pages: null
  };

  uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="user-card">
            <div className="card-body">
            <center>
              <h3>Profile</h3></center>
              <div className="avatar">
                <img
                  src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk="
                  className="card-img-top"
                  alt=""
                />
              </div>
              <center>
              <h5 className="card-title">Riya Jain</h5>
              <p className="card-text">rj.riyajain09@gmail.com</p>
              </center>
            </div>
          </div>
    );
  }
}

export default UserCards;
