import React from 'react';

interface PillProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Pill: React.FC<PillProps> = ({ text, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-full bg-blue-500 text-white text-sm hover:bg-blue-600 focus:outline-none ${className || ''}`}
    >
      {text}
    </button>
  );
};

export default Pill;
