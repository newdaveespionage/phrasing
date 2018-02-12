import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header'
import TextField from '../components/TextField'

function Index(props) {
  return (
    <div className="App">
      <Header text="Phrasing: Words Made Sound" type="H1" />
          <TextField
            id="textarea"
            label="Words"
            placeholder="Words go Here"
            multiline
            margin="normal"
          />
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index;
