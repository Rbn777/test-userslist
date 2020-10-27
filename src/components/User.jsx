import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const PlaylistCard = ({ 
    user_firstname,
    user_lastname, 
    user_email,
    user_cell,
    user_country,
    user_city,
    user_streetNb,
    user_street,
    user_pic,
    user_picHS, }) => {
  
  return (
    <Link to={{
        pathname:`/${user_email}`,
        state: {
            user_email: `${user_email}`,
            user_firstname: `${user_firstname}`,
            user_lastname: `${user_lastname}`, 
            user_cell: `${user_cell}`,
            user_country: `${user_country}`,
            user_city: `${user_city}`,
            user_streetNb: `${user_streetNb}`,
            user_street: `${user_street}`,
            user_pic: `${user_picHS}`
        },

    }}>
        <div className="User">
            <img className="UserPic" alt="user_pic" src={user_pic}/>
            <div className="UserText">
                <h5>{user_lastname} {user_firstname}</h5>
                <h6>Nat : {user_country}</h6>
            </div>
        </div>
    </Link>
  );
};

export default PlaylistCard;