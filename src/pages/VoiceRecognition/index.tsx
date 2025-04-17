import React, { useState } from 'react';
import AnimatedCard from '../../components/Common/AnimatedCard';
import AnimatedButton from '../../components/Common/AnimatedButton';

/**
 * VoiceRecognition页面 - 移除所有动画效果
 * 这个版本完全移除了所有可能导致闪烁的动画效果
 */
const VoiceRecognition: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [transcription, setTranscription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  // 模拟开始录音
  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    
    // 模拟计时器
    const timer = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    
    // 模拟5秒后停止录音
    setTimeout(() => {
      clearInterval(timer);
      setIsRecording(false);
      setTranscription('这是一段模拟的语音转文字结果，展示了系统的语音识别功能。系统可以自动区分客户和业务员的对话，并提取关键信息用于后续分析。');
    }, 5000);
  };

  // 处理文件上传
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      
      // 模拟文件上传后的转写结果
      setTimeout(() => {
        setTranscription('这是从上传的音频文件中提取的文字内容。客户表示对投资产品很感兴趣，特别是低风险的理财产品。业务员介绍了几款适合客户风险偏好的产品选项。');
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">语音识别</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 录音区域 */}
        <AnimatedCard>
          <h2 className="text-xl font-bold text-white mb-4">录音识别</h2>
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-700 rounded-lg mb-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isRecording ? 'bg-red-600' : 'bg-[#2a2a40]'}`}>
              <span className="text-2xl">🎤</span>
            </div>
            <p className="text-white mb-2">
              {isRecording ? `录音中... ${recordingTime}秒` : '点击按钮开始录音'}
            </p>
            <AnimatedButton 
              onClick={startRecording} 
              disabled={isRecording}
              className={isRecording ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
            >
              {isRecording ? '录音中...' : '开始录音'}
            </AnimatedButton>
          </div>
        </AnimatedCard>
        
        {/* 文件上传区域 */}
        <AnimatedCard>
          <h2 className="text-xl font-bold text-white mb-4">上传音频文件</h2>
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-700 rounded-lg mb-4">
            <div className="w-16 h-16 rounded-full bg-[#2a2a40] flex items-center justify-center mb-4">
              <span className="text-2xl">📁</span>
            </div>
            <p className="text-white mb-2">
              {file ? `已选择: ${file.name}` : '支持 .mp3, .wav 格式'}
            </p>
            <label className="cursor-pointer">
              <input 
                type="file" 
                accept=".mp3,.wav" 
                className="hidden" 
                onChange={handleFileChange}
              />
              <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                选择文件
              </div>
            </label>
          </div>
        </AnimatedCard>
      </div>
      
      {/* 转写结果 */}
      {transcription && (
        <AnimatedCard className="mt-6">
          <h2 className="text-xl font-bold text-white mb-4">转写结果</h2>
          <div className="bg-[#2a2a40] p-4 rounded-lg">
            <p className="text-white whitespace-pre-line">{transcription}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <AnimatedButton className="bg-green-600 hover:bg-green-700">
              保存结果
            </AnimatedButton>
            <AnimatedButton className="bg-blue-600 hover:bg-blue-700">
              生成用户画像
            </AnimatedButton>
          </div>
        </AnimatedCard>
      )}
    </div>
  );
};

export default VoiceRecognition;
