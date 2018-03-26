import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <div>
        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner">
            <img src={brain} alt='brain' />
          </div>
        </Tilt>
      </div>
      <div>
        <span className='f3 link dim black underline pa3 pointer '>Signout</span>
      </div>
    </div>
  );
}
export default Navigation;