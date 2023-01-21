import React, { useState } from 'react';

export default function PictureOne() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={isActive ? 'background background--active' : 'background'}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive((prev) => !prev);
        }}
        className={isActive ? 'picture' : 'picture picture--active'}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
