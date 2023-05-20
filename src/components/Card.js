import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card">
      <div>
          <span>Name: </span>
          {user.name}
      </div>
      <div>
        <span>UserName: </span>
        {user.username}
      </div>
      <div>
        <span>Adress: </span>
        {user.address.street}
      </div>
      
    </div>
  );
};

export default Card;
