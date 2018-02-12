import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.handleClick(e.target.name);
  }
  render() {
    return (<button name={this.props.value} onClick={this.handleClick}>{this.props.label}</button>);
  }
}

export default Button
