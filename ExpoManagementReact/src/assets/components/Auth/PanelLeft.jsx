import React from 'react';

const PanelLeft = ({ onClick }) => {
  return (
    <div className="panel left-panel" onClick={onClick}>
      <div className="content">
        <h3>New to EventMaster?</h3>
        <p>
          Join us to create, plan, and manage stunning events. Whether it's a wedding, party, or corporate meetup — we've got your back!
        </p>
        <button className="btn transparent">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default PanelLeft;
