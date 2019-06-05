import React from 'react';
import { connect } from 'react-redux';

const Toggle = ({ messageVisibility, dispatch }) => (
  // dispatch is being brought in as a prop because of connect()
  // connecting the Toggle component gives us access to dispatch

  <div>

    {/* dispatch is a function accepting an object (an action) as an argument */}

    <button onClick={() => dispatch({
        type: 'TOGGLE_MESSAGE',
    })}

    // the action type 'TOGGLE_MESSAGE' triggers the reducer

    >Toggle Me!
    </button>

    { messageVisibility &&
    <p>reduxxxxx innit</p>
    }

  </div>
);


const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle);
