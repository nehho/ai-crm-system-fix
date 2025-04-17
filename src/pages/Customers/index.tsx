import React, { useState } from 'react';
import AnimatedCard from '../../components/Common/AnimatedCard';
import AnimatedButton from '../../components/Common/AnimatedButton';

/**
 * Customers页面 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const Customers: React.FC = () => {
  // 模拟客户数据
  const initialCustomers = [
    { id: 1, name: '张三', company: '科技有限公司', risk: '低', value: '高', lastContact: '2025-04-10' },
    { id: 2, name: '李四', company: '金融集团', risk: '中', value: '中', lastContact: '2025-04-05' },
    { id: 3, name: '王五', company: '教育科技', risk: '高', value: '低', lastContact: '2025-04-01' },
    { id: 4, name: '赵六', company: '医疗科技', risk: '低', value: '高', lastContact: '2025-03-28' },
    { id: 5, name: '钱七', company: '零售集团', risk: '中', value: '中', lastContact: '2025-03-25' },
  ];

  const [customers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState('');

  // 过滤客户
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 风险等级对应的样式
  const riskStyles = {
    '低': 'bg-green-500',
    '中': 'bg-yellow-500',
    '高': 'bg-red-500'
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">客户管理</h1>
      
      {/* 搜索和过滤 */}
      <AnimatedCard className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="搜索客户..."
              className="w-full p-2 bg-[#2a2a40] text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <AnimatedButton className="bg-blue-600 hover:bg-blue-700">
              添加客户
            </AnimatedButton>
          </div>
        </div>
      </AnimatedCard>
      
      {/* 客户列表 */}
      <AnimatedCard>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#1a1a2e] text-white">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-3 px-4 text-left">客户名称</th>
                <th className="py-3 px-4 text-left">公司</th>
                <th className="py-3 px-4 text-left">风险等级</th>
                <th className="py-3 px-4 text-left">客户价值</th>
                <th className="py-3 px-4 text-left">最近联系</th>
                <th className="py-3 px-4 text-left">操作</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-800 hover:bg-[#2a2a40]">
                  <td className="py-3 px-4">{customer.name}</td>
                  <td className="py-3 px-4">{customer.company}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${riskStyles[customer.risk as keyof typeof riskStyles]}`}>
                      {customer.risk}
                    </span>
                  </td>
                  <td className="py-3 px-4">{customer.value}</td>
                  <td className="py-3 px-4">{customer.lastContact}</td>
                  <td className="py-3 px-4">
                    <AnimatedButton className="bg-[#2a2a40] hover:bg-[#3a3a50] text-sm py-1">
                      查看详情
                    </AnimatedButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Customers;
