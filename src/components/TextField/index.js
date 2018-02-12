import React, {Component} from 'react';
import textarea from './textarea';
import input from './input';
import './TextField.css';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  renderTextArea(props) {
    return <div className="TextField">
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        className="TextFieldEntry"
        onChange={this.handleChange}
        value={props.value}/>
    </div>;
  };
  renderInput(props) {
    return <div className="TextField">
      <input
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        className="TextFieldEntry"
        value={props.value}
        onChange={this.handleChange}
      />
    </div>;
  };
  render() {
    if (this.props.multiline) {
      return this.renderTextArea(this.props);
    } else {
      return this.renderInput(this.props);
    }
  }
}

export default TextField
