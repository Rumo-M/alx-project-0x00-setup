import React from 'react';
import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm">
      {title}
    </div>
  );
};

export default Pill;