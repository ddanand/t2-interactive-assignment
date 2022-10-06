import React from "react";

export const FullProfile = ({
  gender,
  name,
  picture,
  location,
  email,
  dob,
  phone,
  login
}) => {
  return (
    <>
    <div>
    <span>
      <div >
        <img src={picture.large} alt="anythingisok"/>
        <div>{`${name.title}. ${name.first} ${name.last}`}</div>
        <div>{`${location.street.number} ${location.street.name}`}</div>
        <div>{`${location.city}, ${location.state} ${location.postcode}`}</div>
        <div>{` ${location.country}`}</div>
      </div>
      <div >
        <div>{`Gender: ${gender}`}</div>
        <div>{`Email: ${email}`}</div>
        <div>{`Username: ${login.username}`}</div>
        <div>{`DOB: ${new Date(dob.date).toLocaleDateString()}`}</div>
        <div>{`Phone: ${phone}`}</div>
      </div>
    </span>
    </div>
    </>
  );
};
