import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Storage from '../storage';

class Index extends Component {
  constructor(props) {
    super(props);
    this.handlePoemChange = this.handlePoemChange.bind(this);
    this.handleSavePoem = this.handleSavePoem.bind(this);
    this.state = {
      poems: [''],
    };
    let poems = this.loadPoems();
    if(poems){
      this.setState('poems',poems);
    }
  }
  loadPoems(){
    return storage.getData('poems');
  }
  handlePoemChange(poem){
    this.setState({poem: poem});
  }
  handleSavePoem(value){
    console.log('handleSavePoem',value,this.state.poems);
    storage.setData('poems',this.state.poems);
    storage.store();
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
          value={this.state.poems[0]}
          onChange={this.handlePoemChange}></TextField>
      <Button
        label="Save Poem"
        value="save"
        handleClick={this.handleSavePoem}></Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index;
