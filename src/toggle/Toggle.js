import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from '../toggle/actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    <button onClick={toggleMessage}>Toggle Me!
    </button>
    { messageVisibility &&
    <p>reduxxxxx innit</p>
    }
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
