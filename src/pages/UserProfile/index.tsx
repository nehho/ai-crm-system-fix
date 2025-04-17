import React from 'react';
import AnimatedCard from '../../components/Common/AnimatedCard';

/**
 * UserProfile页面 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const UserProfile: React.FC = () => {
  // 模拟用户画像数据
  const userProfile = {
    name: '张三',
    age: 35,
    occupation: '金融分析师',
    company: '科技有限公司',
    riskTolerance: '中等',
    investmentGoals: ['退休规划', '子女教育', '资产增值'],
    preferredProducts: ['混合型基金', '债券', '低风险理财产品'],
    communicationStyle: '偏好详细解释和数据支持',
    decisionMakingProcess: '谨慎型，需要充分信息才能做决策',
    painPoints: ['缺乏时间研究投资产品', '担心市场波动风险'],
    opportunities: ['有额外资金需要投资', '对ESG投资有兴趣']
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">用户画像</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 基本信息 */}
        <AnimatedCard className="md:col-span-1">
          <h2 className="text-xl font-bold text-white mb-4">基本信息</h2>
          <div className="space-y-3">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-[#2a2a40] rounded-full flex items-center justify-center text-3xl">
                {userProfile.name.charAt(0)}
              </div>
            </div>
            <div className="border-b border-gray-800 pb-2">
              <p className="text-gray-400 text-sm">姓名</p>
              <p className="text-white">{userProfile.name}</p>
            </div>
            <div className="border-b border-gray-800 pb-2">
              <p className="text-gray-400 text-sm">年龄</p>
              <p className="text-white">{userProfile.age}岁</p>
            </div>
            <div className="border-b border-gray-800 pb-2">
              <p className="text-gray-400 text-sm">职业</p>
              <p className="text-white">{userProfile.occupation}</p>
            </div>
            <div className="border-b border-gray-800 pb-2">
              <p className="text-gray-400 text-sm">公司</p>
              <p className="text-white">{userProfile.company}</p>
            </div>
            <div className="pb-2">
              <p className="text-gray-400 text-sm">风险承受能力</p>
              <p className="text-white">{userProfile.riskTolerance}</p>
            </div>
          </div>
        </AnimatedCard>
        
        {/* 投资偏好 */}
        <AnimatedCard className="md:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">投资偏好分析</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#2a2a40] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">投资目标</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {userProfile.investmentGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2a2a40] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">偏好产品</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {userProfile.preferredProducts.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2a2a40] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">沟通风格</h3>
              <p className="text-gray-300">{userProfile.communicationStyle}</p>
            </div>
            <div className="bg-[#2a2a40] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">决策过程</h3>
              <p className="text-gray-300">{userProfile.decisionMakingProcess}</p>
            </div>
          </div>
        </AnimatedCard>
        
        {/* 痛点与机会 */}
        <AnimatedCard className="md:col-span-3">
          <h2 className="text-xl font-bold text-white mb-4">痛点与机会</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">客户痛点</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {userProfile.painPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">潜在机会</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {userProfile.opportunities.map((opportunity, index) => (
                  <li key={index}>{opportunity}</li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default UserProfile;
