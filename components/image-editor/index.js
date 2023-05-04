import React, { useState, useEffect, useRef } from 'react';

const colors = ['black', 'white', 'red', 'green', 'blue', 'yellow', '#ffff83'];

function fileToDataUri(field) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.readAsDataURL(field);
  });
}

const renderCanva = (canvaRef, pencilColor, pencilSize, image) => {
  const canvasElement = canvaRef.current;
  const context = canvasElement.getContext('2d');

  // if an image is present,
  // the image passed as a parameter is drawn in the canvas
  if (image) {
    const imageWidth = window.innerWidth;
    const imageHeight = image.height;

    // rescaling the canvas element
    canvasElement.width = window.innerWidth;
    canvasElement.height = imageHeight;

    context.drawImage(image, 0, 0, imageWidth, imageHeight);
  }

  let isDrawing;

  canvasElement.onmousedown = (e) => {
    var rect = canvasElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    isDrawing = true;
    context.beginPath();
    context.lineWidth = pencilSize;
    context.strokeStyle = pencilColor;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.moveTo(x, y);
  };

  canvasElement.onmousemove = (e) => {
    var rect = canvasElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (isDrawing) {
      context.lineTo(x, y);
      context.stroke();
    }
  };

  canvasElement.onmouseup = function () {
    isDrawing = false;
    context.closePath();
  };
};

const Canvas = (props) => {
  const [image, setImage] = useState('');
  const [pencilSize, setPencilSize] = useState(0);
  const [pencilColor, setPencilColor] = useState('black');

  const canvaRef = useRef(null);

  useEffect(() => {
    if (canvaRef) {
      renderCanva(canvaRef, pencilColor, pencilSize);
    }
  }, [canvaRef, pencilColor, pencilSize]);

  // Button handlers

  const onClear = () => {
    const canvasElement = canvaRef.current;
    const context = canvasElement.getContext('2d');

    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  };

  const onSave = () => {
    const canvasElement = canvaRef.current;
    const img = canvasElement.toDataURL('image/png');
    setImage(img);
  };

  // Syles

  const styleCanva = {
    border: '1px solid black',
    marginLeft: '0rem',
    width: '100%',
  };

  const style = {
    marginTop: '5px',
  };

  return (
    <div>
      <img src={image} alt='' />
      <canvas
        ref={canvaRef}
        id='canvas'
        width='500'
        height='200'
        style={styleCanva}
      ></canvas>

      <div style={style}>
        <span>Size: </span>
        <input
          type='range'
          min='1'
          max='50'
          value={pencilSize}
          onChange={(e) => {
            const value = e.target.value;
            setPencilSize(value);
          }}
          className='size'
          id='sizeRange'
        />
      </div>
      <div style={style}>
        <span>Color: </span>
        {colors.map((color) => {
          return (
            <div key={color}>
              <input
                type='radio'
                name='colorRadio'
                value={pencilColor}
                onChange={(e) => {
                  setPencilColor(color);
                }}
                checked={pencilColor === color}
              />
              <label htmlFor={color}>{color}</label>
            </div>
          );
        })}
      </div>
      <div style={style}>
        <button onClick={onClear}>Clear</button>
        <button onClick={onSave}>Save</button>
      </div>
      <br />
      <input
        id='upload'
        type='file'
        accept='image/*'
        onChange={async (e) => {
          const [file] = e.target.files;

          const image = document.createElement('img');
          const src = await fileToDataUri(file);
          image.src = src;

          // enbaling the brush after after the image
          // has been uploaded
          image.addEventListener('load', () => {
            const imageWidth = image.width;
            const imageHeight = image.height;
            console.log(file, imageWidth, imageHeight);
            renderCanva(canvaRef, pencilColor, pencilSize, image);
          });
        }}
      />
    </div>
  );
};

export default Canvas;
