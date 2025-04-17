import React from 'react';
import AnimatedCard from '../../components/Common/AnimatedCard';
import AnimatedButton from '../../components/Common/AnimatedButton';
import AnimatedChart from '../../components/Common/AnimatedChart';

/**
 * DataVisualization页面 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const DataVisualization: React.FC = () => {
  // 模拟数据导出函数
  const exportData = (format: string) => {
    alert(`数据已导出为${format}格式`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">数据可视化</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 客户分布图 */}
        <AnimatedCard>
          <h2 className="text-xl font-bold text-white mb-4">客户行业分布</h2>
          <AnimatedChart className="h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400">饼图展示区域 - 静态展示</p>
              <div className="flex justify-center mt-4 space-x-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                  <span className="text-gray-300 text-sm">金融 (35%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-gray-300 text-sm">科技 (25%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                  <span className="text-gray-300 text-sm">教育 (20%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                  <span className="text-gray-300 text-sm">其他 (20%)</span>
                </div>
              </div>
            </div>
          </AnimatedChart>
        </AnimatedCard>
        
        {/* 客户价值分布 */}
        <AnimatedCard>
          <h2 className="text-xl font-bold text-white mb-4">客户价值分布</h2>
          <AnimatedChart className="h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400">柱状图展示区域 - 静态展示</p>
              <div className="flex justify-center mt-4 space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-500 h-20"></div>
                  <span className="text-gray-300 text-sm mt-1">高价值</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-400 h-32"></div>
                  <span className="text-gray-300 text-sm mt-1">中价值</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-blue-300 h-16"></div>
                  <span className="text-gray-300 text-sm mt-1">低价值</span>
                </div>
              </div>
            </div>
          </AnimatedChart>
        </AnimatedCard>
        
        {/* 客户增长趋势 */}
        <AnimatedCard>
          <h2 className="text-xl font-bold text-white mb-4">客户增长趋势</h2>
          <AnimatedChart className="h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400">折线图展示区域 - 静态展示</p>
              <div className="w-full h-32 mt-4 flex items-end justify-between px-4">
                <div className="h-full flex flex-col justify-between">
                  <span className="text-gray-400 text-xs">100</span>
                  <span className="text-gray-400 text-xs">50</span>
                  <span className="text-gray-400 text-xs">0</span>
                </div>
                <div className="flex-1 h-full flex items-end">
                  <div className="flex-1 flex items-end">
                    <div className="w-full border-t border-blue-500 relative" style={{ height: '30%' }}>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1 -translate-y-1"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="w-full border-t border-blue-500 relative" style={{ height: '40%' }}>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1 -translate-y-1"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="w-full border-t border-blue-500 relative" style={{ height: '60%' }}>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1 -translate-y-1"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="w-full border-t border-blue-500 relative" style={{ height: '70%' }}>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1 -translate-y-1"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="w-full border-t border-blue-500 relative" style={{ height: '90%' }}>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1 -translate-y-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-8 mt-2">
                <span className="text-gray-400 text-xs">1月</span>
                <span className="text-gray-400 text-xs">2月</span>
                <span className="text-gray-400 text-xs">3月</span>
                <span className="text-gray-400 text-xs">4月</span>
                <span className="text-gray-400 text-xs">5月</span>
              </div>
            </div>
          </AnimatedChart>
        </AnimatedCard>
        
        {/* 客户满意度 */}
        <AnimatedCard>
          <h2 className="text-xl font-bold text-white mb-4">客户满意度</h2>
          <AnimatedChart className="h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block rounded-full p-4 bg-[#2a2a40]">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#444"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="3"
                      strokeDasharray="92, 100"
                    />
                  </svg>
                  <div className="absolute text-2xl font-bold text-white">92%</div>
                </div>
              </div>
              <p className="text-gray-300 mt-4">客户满意度评分</p>
            </div>
          </AnimatedChart>
        </AnimatedCard>
      </div>
      
      {/* 数据导出 */}
      <AnimatedCard>
        <h2 className="text-xl font-bold text-white mb-4">数据导出</h2>
        <p className="text-gray-400 mb-4">选择导出格式：</p>
        <div className="flex space-x-4">
          <AnimatedButton 
            onClick={() => exportData('JSON')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            导出为JSON
          </AnimatedButton>
          <AnimatedButton 
            onClick={() => exportData('CSV')}
            className="bg-green-600 hover:bg-green-700"
          >
            导出为CSV
          </AnimatedButton>
          <AnimatedButton 
            onClick={() => exportData('PDF')}
            className="bg-red-600 hover:bg-red-700"
          >
            导出为PDF
          </AnimatedButton>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default DataVisualization;
