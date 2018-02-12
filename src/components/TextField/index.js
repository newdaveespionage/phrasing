import React, {Component} from 'react';
import textarea from './textarea';
import input from './input';
import './TextField.css';

class TextField extends Component {
  renderTextArea(props) {
    return <div className="TextField">
      <textarea name={props.name} placeholder={props.placeholder} className="TextFieldEntry">{props.value}</textarea>
    </div>;
  };
  renderInput(props) {
    return <div className="TextField">
      <input name={props.name} type="text" placeholder={props.placeholder} className="TextFieldEntry" value={props.value}/>
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
