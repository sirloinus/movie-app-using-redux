import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from '../toggle/actions';
import { getMovies } from '../movies/actions';

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    <button onClick={toggleMessage}>Toggle Me!
    </button>
    { messageVisibility &&
    <p>reduxxxxx innit</p>
    }
    <button onClick={getMovies}>Load movies!
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
