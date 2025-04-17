import React from 'react';
import AnimatedCard from '../../components/Common/AnimatedCard';

/**
 * Dashboard页面 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const Dashboard: React.FC = () => {
  // 仪表盘数据
  const stats = [
    { title: '总客户数', value: '128', change: '+12%', icon: '👥' },
    { title: '本月会议', value: '42', change: '+8%', icon: '📅' },
    { title: '转化率', value: '24.8%', change: '+3.2%', icon: '📈' },
    { title: '客户满意度', value: '92%', change: '+5%', icon: '😊' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">欢迎使用 AI CRM 系统</h1>
      <p className="text-gray-300 mb-8">智能客户关系管理平台，助力业务增长</p>
      
      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <AnimatedCard key={index} className="text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-400 text-sm">{stat.title}</h3>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
                <p className="text-green-400 text-sm mt-1">
                  {stat.change} 较上月
                </p>
              </div>
              <div className="text-3xl bg-[#2a2a40] p-3 rounded-lg">
                {stat.icon}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
      
      {/* 客户增长趋势 */}
      <AnimatedCard className="text-white mb-8">
        <h2 className="text-xl font-bold mb-4">客户增长趋势</h2>
        <p className="text-gray-400 mb-4">过去6个月数据</p>
        <div className="h-64 bg-[#1a1a2e] rounded-lg flex items-center justify-center">
          <p className="text-gray-400">图表区域 - 静态展示</p>
        </div>
      </AnimatedCard>
      
      {/* 最近活动 */}
      <AnimatedCard className="text-white">
        <h2 className="text-xl font-bold mb-4">最近活动</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-b border-gray-800 pb-3">
              <div className="flex justify-between">
                <p className="font-medium">客户会议 #{item}</p>
                <p className="text-gray-400 text-sm">2小时前</p>
              </div>
              <p className="text-gray-400 mt-1">与客户讨论了新产品方案</p>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Dashboard;
