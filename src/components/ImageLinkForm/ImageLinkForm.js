import React from 'react';

const ImageLinkForm = () => {
  return (
    <div>
    <div className="center">
      <p className='f3 white grow' >
        {'This magic brain will detect hooman faces in a given image, Git it a try.'}
      </p>
      </div>
      <div className='center'>
        <div className='pa2 br3 shadow-5'>
        <input type='tex' className='f4 pa2 w-70 center' />
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-gold'>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;