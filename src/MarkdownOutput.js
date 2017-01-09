import React, {Component} from 'react';
import marked from 'marked';

class MarkdownOutput extends Component {
  constructor(props) {
    super(props);
  }
  rawMarkup (value) {
    var rawMarkup = marked(value, {sanitize: true});
    return {__html: rawMarkup}
  }
  render() {
    return(
      <div>
        <div dangerouslySetInnerHTML={this.rawMarkup(this.props.input)} />
      </div>
    );
  }
}

export default MarkdownOutput;
