import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TechBackground from '../Common/TechBackground';

/**
 * Layout组件 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 * 侧边栏使用实色背景，确保不透明
 */
const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // 检测是否为移动设备
  const isMobile = window.innerWidth < 768;

  // 在移动设备上，默认关闭侧边栏
  React.useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
    
    // 监听窗口大小变化
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // 导航项
  const navItems = [
    { path: '/', label: '仪表盘', icon: '📊' },
    { path: '/customers', label: '客户管理', icon: '👥' },
    { path: '/voice-recognition', label: '语音识别', icon: '🎤' },
    { path: '/user-profile', label: '用户画像', icon: '👤' },
    { path: '/smart-questionnaire', label: '智能问卷', icon: '📝' },
    { path: '/data-visualization', label: '数据可视化', icon: '📈' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#121225]">
      {/* 纯色背景，没有动画 */}
      <TechBackground />
      
      {/* 侧边栏 - 使用实色背景，确保不透明 */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#121225] text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 border-r border-gray-800`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 bg-[#121225] border-b border-gray-800">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
              AI
            </div>
            <span className="ml-2 text-xl font-semibold">CRM系统</span>
          </div>
          <button 
            className="md:hidden text-white" 
            onClick={toggleSidebar}
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        
        {/* 导航菜单 */}
        <nav className="mt-5 px-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg ${
                location.pathname === item.path
                  ? 'bg-[#2a2a40] text-yellow-400'
                  : 'text-gray-300 hover:bg-[#2a2a40]'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      
      {/* 主内容区域 */}
      <main className="flex-1 overflow-auto bg-[#121225]">
        {/* 顶部栏 */}
        <header className="h-16 bg-[#121225] border-b border-gray-800 flex items-center justify-between px-4">
          <button 
            className="text-white md:hidden" 
            onClick={toggleSidebar}
          >
            <span className="text-2xl">☰</span>
          </button>
          <div className="text-white text-xl font-semibold md:hidden">
            AI CRM系统
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </header>
        
        {/* 页面内容 */}
        <div className="p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
