import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import VoiceRecognition from './pages/VoiceRecognition';
import UserProfile from './pages/UserProfile';
import SmartQuestionnaire from './pages/SmartQuestionnaire';
import DataVisualization from './pages/DataVisualization';

/**
 * App组件 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/voice-recognition" element={<VoiceRecognition />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/smart-questionnaire" element={<SmartQuestionnaire />} />
          <Route path="/data-visualization" element={<DataVisualization />} />
          
          {/* 别名路由支持 */}
          <Route path="/userprofile" element={<Navigate to="/user-profile" replace />} />
          <Route path="/voice" element={<Navigate to="/voice-recognition" replace />} />
          <Route path="/questionnaire" element={<Navigate to="/smart-questionnaire" replace />} />
          <Route path="/data" element={<Navigate to="/data-visualization" replace />} />
          
          {/* 通配符路由，捕获所有未匹配路径并重定向到首页 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
