import React, { Component } from 'react';
import './App.css';


class MarkdownInput extends Component {
  constructor(props) {
    super(props);


    this.onChange = this.onChange.bind(this);
  }
  onChange (e) {
    this.props.input(e.target.value);
  }
  componentDidUpdate() {
  }
  render() {
    return(
      <div>
          <textarea  rows="22" onChange={this.onChange} value={this.props.value}/>
      </div>
    );
  }
}

export default MarkdownInput;
