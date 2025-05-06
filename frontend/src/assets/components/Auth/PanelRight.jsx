import React from 'react';

const PanelRight = ({ onClick }) => {
  return (
    <div className="panel right-panel" onClick={onClick}>
      <div className="content">
        <h3>Already a Member?</h3>
        <p>
          Log in to access your dashboard, manage bookings, and make your event unforgettable with EventMaster.
        </p>
        <button className="btn transparent">
          Login
        </button>
      </div>
    </div>
  );
};

export default PanelRight;
