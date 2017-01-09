import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Col, Navbar, Jumbotron, Button, Row} from 'react-bootstrap';
import './App.css';

import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n'
    }

    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({ input: value })
    console.log(this.state.input);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={6}>
            <MarkdownInput input={this.onChange} value={this.state.input}/>
          </Col>
          <Col xs={12} md={6}>
            <MarkdownOutput input={this.state.input}/>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
