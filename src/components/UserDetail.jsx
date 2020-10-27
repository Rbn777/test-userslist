import React from 'react';

import './UserDetail.css';

const UserDetail = (props) => {
    const { 
        user_firstname,
        user_lastname, 
        user_email,
        user_cell,
        user_country,
        user_city,
        user_streetNb,
        user_street,
        user_pic } = props.location.state;

    return (
        <div className="UserDetail">
            <img className="UserDetailPic" alt="user_pic" src={user_pic} />
            <div className="UserDetailText">
                <h3>{user_lastname} {user_firstname}</h3>
                <h6>{user_email}</h6>
                <p className="ParagraphArea">Address : {user_streetNb} {user_street}, {user_city}, {user_country}<br />
                    Cellphone : {user_cell}<br />
                    Nationality : {user_country}
                </p>
            </div>
        </div>
    );
};

export default UserDetail;