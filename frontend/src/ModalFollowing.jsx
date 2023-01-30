import React from "react";
const ModalFollowing = ({ following, closeModal }) => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Followers</h2>
          <ul>
            {following.map((following) => (
              <li key={following.id}>{following.name}</li>
            ))}
          </ul>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };


  export default ModalFollowing;