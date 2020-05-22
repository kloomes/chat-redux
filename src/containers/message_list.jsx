import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from './message_form';
import { fetchMessages } from '../actions/index';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div className="right-container">
        <div className="message-list">
          {this.props.messages.map((message) => {
            return (
              <Message message={message} key={message.created_at} />
            );
          })}
        </div>
        <div>
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
