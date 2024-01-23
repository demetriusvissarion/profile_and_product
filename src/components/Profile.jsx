import React from 'react';

const Profile = (props) => {
    return (
        <div id="profile">
            <h1 id="name">{props.name}</h1>
            <p data-testid="job" id="job">
            {props.job}
            </p>
            <p id="birthdate">{props.birthdate}</p>
        </div>
    );
};

export default Profile;