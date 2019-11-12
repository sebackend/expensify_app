// High Order component - HOC : A component that renders another component

// Reuse Code
// Render hijacking
// Prop Manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is </p>
    <strong>{props.info}</strong>
  </div>
);

const withAdminarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>You need to be authenticated</p>
        )
      }
    </div>
  );
};

// const AdminInfo = withAdminarning(Info);
const AuthInfo  = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is the info data" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the info data" />, document.getElementById('app'));