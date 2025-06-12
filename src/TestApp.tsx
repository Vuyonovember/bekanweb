import React from 'react';

const TestApp = () => {
  console.log('TestApp is rendering');
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'green',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      zIndex: 9999
    }}>
      Test App is Rendering - If you see this, React is working
    </div>
  );
};

export default TestApp;
