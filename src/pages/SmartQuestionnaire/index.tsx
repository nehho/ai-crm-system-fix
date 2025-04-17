import React, { useState } from 'react';
import AnimatedCard from '../../components/Common/AnimatedCard';
import AnimatedButton from '../../components/Common/AnimatedButton';

/**
 * SmartQuestionnaire页面 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const SmartQuestionnaire: React.FC = () => {
  // 模拟问卷问题
  const initialQuestions = [
    { id: 1, question: '您的投资经验有多少年？', answer: '', required: true, status: 'pending' },
    { id: 2, question: '您的风险承受能力如何？', answer: '中等', required: true, status: 'completed' },
    { id: 3, question: '您的投资目标是什么？', answer: '', required: true, status: 'pending' },
    { id: 4, question: '您计划投资多长时间？', answer: '', required: true, status: 'pending' },
    { id: 5, question: '您是否有紧急备用金？', answer: '是', required: false, status: 'completed' },
    { id: 6, question: '您对哪些行业感兴趣？', answer: '', required: false, status: 'pending' },
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');

  // 保存当前问题的答案
  const saveAnswer = () => {
    if (answer.trim() === '') return;
    
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answer = answer;
    updatedQuestions[currentQuestion].status = 'completed';
    setQuestions(updatedQuestions);
    setAnswer('');
    
    // 移动到下一个未完成的问题
    const nextUnanswered = updatedQuestions.findIndex((q, index) => index > currentQuestion && q.status === 'pending');
    if (nextUnanswered !== -1) {
      setCurrentQuestion(nextUnanswered);
    }
  };

  // 计算完成进度
  const completedCount = questions.filter(q => q.status === 'completed').length;
  const progressPercentage = Math.round((completedCount / questions.length) * 100);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">智能问卷</h1>
      
      {/* 进度指示器 */}
      <AnimatedCard className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">问卷完成进度</h2>
        <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
          <div 
            className="bg-blue-600 h-4 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-white">{completedCount} / {questions.length} 已完成 ({progressPercentage}%)</p>
      </AnimatedCard>
      
      {/* 问题列表 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 左侧问题导航 */}
        <AnimatedCard className="md:col-span-1">
          <h2 className="text-xl font-bold text-white mb-4">问题列表</h2>
          <div className="space-y-2">
            {questions.map((q, index) => (
              <div 
                key={q.id}
                onClick={() => setCurrentQuestion(index)}
                className={`p-3 rounded-lg cursor-pointer ${
                  currentQuestion === index 
                    ? 'bg-blue-600' 
                    : q.status === 'completed' 
                      ? 'bg-green-700' 
                      : 'bg-[#2a2a40]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-white truncate">{q.question}</p>
                  <span className="text-xs px-2 py-1 rounded bg-opacity-50 bg-black text-white">
                    {q.required ? '必填' : '选填'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>
        
        {/* 右侧当前问题 */}
        <AnimatedCard className="md:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">当前问题</h2>
          {questions[currentQuestion] && (
            <div>
              <div className="bg-[#2a2a40] p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {questions[currentQuestion].question}
                  {questions[currentQuestion].required && <span className="text-red-500 ml-1">*</span>}
                </h3>
                {questions[currentQuestion].status === 'completed' && (
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm">当前答案:</p>
                    <p className="text-white">{questions[currentQuestion].answer}</p>
                  </div>
                )}
                <textarea
                  className="w-full p-3 bg-[#1a1a2e] text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  rows={4}
                  placeholder="请输入您的回答..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-between">
                <AnimatedButton 
                  onClick={() => {
                    const prevQuestion = currentQuestion > 0 ? currentQuestion - 1 : questions.length - 1;
                    setCurrentQuestion(prevQuestion);
                    setAnswer('');
                  }}
                  className="bg-gray-600 hover:bg-gray-700"
                >
                  上一题
                </AnimatedButton>
                <AnimatedButton 
                  onClick={saveAnswer}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  保存答案
                </AnimatedButton>
                <AnimatedButton 
                  onClick={() => {
                    const nextQuestion = (currentQuestion + 1) % questions.length;
                    setCurrentQuestion(nextQuestion);
                    setAnswer('');
                  }}
                  className="bg-gray-600 hover:bg-gray-700"
                >
                  下一题
                </AnimatedButton>
              </div>
            </div>
          )}
        </AnimatedCard>
      </div>
      
      {/* 提交按钮 */}
      <div className="mt-8 flex justify-end">
        <AnimatedButton 
          className={`${
            completedCount === questions.filter(q => q.required).length
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
          disabled={completedCount < questions.filter(q => q.required).length}
        >
          提交问卷
        </AnimatedButton>
      </div>
    </div>
  );
};

export default SmartQuestionnaire;
