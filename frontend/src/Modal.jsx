import React from "react";
//import "./Modal.css"; // you can import css file to style the modal

const ModalFollowers = ({ followers, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Followers</h2>
        <ul>
          {followers.map((followers) => (
            <li key={followers.id}>{followers.name}</li>
          ))}
        </ul>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};


export default ModalFollowers;
