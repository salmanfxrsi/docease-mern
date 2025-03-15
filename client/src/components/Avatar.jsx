import React from 'react';

const Avatar = ({ image, name }) => {
    return (
        <div className="avatar">
    <div className="mask mask-squircle h-12 w-12">
      <img src={image} alt={name} />
    </div>
  </div>
    );
};

export default Avatar;