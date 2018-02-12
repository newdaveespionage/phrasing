import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header'
import TextField from '../components/TextField'

class Index extends Component {
  constructor(props) {
    super(props);
    this.handlePoemChange = this.handlePoemChange.bind(this);
    this.state = {
      poem: '',
    };
  }
  handlePoemChange(poem){
    this.setState({poem: poem});
  }
  render() {
    return (
      <div className="App">
        <Header text="Phrasing: Words Made Sound" type="H1" />
        <TextField
          id="textarea"
          label="Words"
          placeholder="Words go Here"
          multiline
          margin="normal"
          value={this.state.poem}
          onChange={this.handlePoemChange}
        />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index;
