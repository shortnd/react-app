import React from 'react';
import { Link } from 'react-router';


export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/");
  }
  render() {
    return (
    <header>
      <h1>KillerNews.net!</h1>
      {this.props.children}
      <Link to="archives" class="btn btn-primary">Archives</Link>
      <Link to="settings" class="btn btn-success">Settings</Link>
      <button class="btn btn-warning" onClick={this.navigate.bind(this)}>Featured</button>
    </header>
    );
  }
}
