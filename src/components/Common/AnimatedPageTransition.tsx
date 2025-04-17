import React from 'react';

/**
 * AnimatedPageTransition组件 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const AnimatedPageTransition: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // 直接渲染子元素，不添加任何动画效果
  return <>{children}</>;
};

export default AnimatedPageTransition;
