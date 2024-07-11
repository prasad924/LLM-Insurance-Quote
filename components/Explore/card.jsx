import React from 'react';
const Card = ({ providers }) => {
  return (
    <div>
      {providers.map(item => (
        <div key={item.title} className='bg-white border border-black h-40 w-80 flex flex-col justify-center content-centerzt'>
            <div style={{fontFamily:"Inter,sans-serif", fontSize:'30.49px', fontWeight:400}}>{item.title}</div>
            <div style={{overflow:'hidden', textOverflow:'ellipsis'}}>{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;
