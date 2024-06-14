// src/LoadingScreen.js
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-black flex justify-center items-center z-[9999]">
      <div className="spinner-border animate-pulse inline-block w-[200px] h-[200px] border-4 rounded-full" role="status">
        <img src="/JayBhatade_Logo-modified.png " className=" "alt="" />
      </div>
    </div>
  );
};

export default LoadingScreen;