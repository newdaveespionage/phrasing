import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Storage from '../storage';
import Perform from '../perform';

class Index extends Component {
  constructor(props) {
    super(props);
    this.handlePoemChange = this.handlePoemChange.bind(this);
    this.handlePoemTitleChange = this.handlePoemTitleChange.bind(this);
    this.handleSavePoem = this.handleSavePoem.bind(this);
    this.handlePlayPoem = this.handlePlayPoem.bind(this);
    this.handleStopPoem = this.handleStopPoem.bind(this);
    this.poemTemplate = {
      title: '',
      text: ''
    }
    this.stateTemplate = {
      poems: [],
      currentPoemIndex: 0,
      currentPoem: Object.assign({},this.poemTemplate)
    };
    Storage.initialize('phrasingData');
    let data = this.loadData();
    if(data){
      //TODO: inegrity checks of stored state?
      this.state = Object.assign({},this.stateTemplate,data);
    }else{
      this.state = Object.assign({},this.stateTemplate);
    }
    Perform.initialize();
  }
  loadData(){
    // load any stored poems
    return Storage.getData('storedState');
  }
  handlePoemTitleChange(title){
    // update the currentPoem state
    let poemState = Object.assign({}, this.state.currentPoem, {title:title});
    this.setState({currentPoem: poemState});
  }
  handlePoemChange(poem){
    // update the currentPoem state
    let poemState = Object.assign({}, this.state.currentPoem, {text:poem});
    this.setState({currentPoem: poemState});
  }
  handleSavePoem(value){
    // update current poem based on state
    let poemState = this.state.poems.slice(0);
    let currentPoem = Object.assign({},this.state.currentPoem);
    poemState[this.state.currentPoemIndex] = currentPoem;
    this.setState({poems:poemState});

    // save all poems
    Storage.setData('storedState',this.state);
    Storage.store();
  }
  handlePlayPoem(value){
    Perform.play(this.state.currentPoem.text);
  }
  handleStopPoem(value){
    Perform.stop();
  }
  render() {
    return (
      <div className="App">
        <Header text="Phrasing: Words Made Sound" type="H1" />
        <TextField
          id="textarea"
          label="Title"
          placeholder="Title"
          value={this.state.currentPoem.title}
          onChange={this.handlePoemTitleChange}></TextField>
        <TextField
          id="textarea"
          label="Words"
          placeholder="Words go Here"
          multiline
          value={this.state.currentPoem.text}
          onChange={this.handlePoemChange}></TextField>
      <Button
        label="Save Poem"
        value="save"
        handleClick={this.handleSavePoem}></Button>
      <Button
        label="Play Poem"
        value="play"
        handleClick={this.handlePlayPoem}></Button>
      <Button
        label="Stop Playback"
        value="stop"
        handleClick={this.handleStopPoem}></Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index;
