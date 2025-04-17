import React from 'react';

/**
 * AnimatedButton组件 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const AnimatedButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#2a2a40] hover:bg-[#3a3a50] text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
