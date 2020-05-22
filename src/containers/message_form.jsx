import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
  render() {
    return (
      <form className="form">
        <input type="text" />
        <button type="submit">
          Post
        </button>
      </form>
    );
  }
}

export default MessageForm;
