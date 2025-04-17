import React from 'react';

/**
 * TechBackground组件 - 提供纯色背景，移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#121225] overflow-hidden">
      {/* 纯色背景，没有任何动画效果 */}
    </div>
  );
};

export default TechBackground;
