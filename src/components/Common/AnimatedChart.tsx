import React from 'react';

/**
 * AnimatedChart组件 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const AnimatedChart: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#1a1a2e] rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedChart;
