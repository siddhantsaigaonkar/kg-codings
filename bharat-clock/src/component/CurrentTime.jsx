import React from 'react'

export default function CurrentTime() {

  let time = new Date();
  return (
    <div>
      <p>This the current time: {time.toLocaleDateString()} <br />
      {time.toLocaleTimeString()}   
      </p>
    </div>
  );
}
