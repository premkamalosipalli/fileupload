import React from 'react';
import Login from '@/pages/Login';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface props {
  // Define your props here
}

const Welcome: React.FC<props> = () => {
  return (
    <div>
      Lets get our hands busy using FileUpload..!
      <Login></Login>
    </div>
  );
};

export default Welcome;
