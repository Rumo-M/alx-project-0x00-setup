import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      
      <Card />

      {/* Buttons with different rounded shapes */}
      <Button title="Small Rounded" styles="px-4 py-2 bg-blue-500 text-white rounded-sm" />
      <Button title="Medium Rounded" styles="px-4 py-2 bg-green-500 text-white rounded-lg" />
      <Button title="Fully Rounded" styles="px-4 py-2 bg-red-500 text-white rounded-full" />
    </div>
  );
};

export default Landing;
