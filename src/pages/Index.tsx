
import React, { useState } from 'react';
import { StockInput } from '@/components/StockInput';
import { ReportSettings } from '@/components/ReportSettings';
import { ReportPreview } from '@/components/ReportPreview';
import { LanguageSelector } from '@/components/LanguageSelector';
import { TrendingUp, FileText, BarChart3 } from 'lucide-react';

const Index = () => {
  const [selectedStock, setSelectedStock] = useState('');
  const [reportStyle, setReportStyle] = useState('summary');
  const [language, setLanguage] = useState('zh-CN');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerateReport = async () => {
    if (!selectedStock) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreview(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                智能股票分析报告系统
              </h1>
            </div>
            <LanguageSelector 
              language={language} 
              onLanguageChange={setLanguage} 
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Input & Settings */}
          <div className="space-y-6">
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <FileText className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold">自动报告</h3>
                <p className="text-blue-200 text-sm">一键生成专业分析</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <BarChart3 className="h-8 w-8 text-green-400 mb-2" />
                <h3 className="text-white font-semibold">多维分析</h3>
                <p className="text-blue-200 text-sm">基本面+技术面</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <TrendingUp className="h-8 w-8 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold">智能推荐</h3>
                <p className="text-blue-200 text-sm">投资建议与风险</p>
              </div>
            </div>

            <StockInput 
              value={selectedStock}
              onChange={setSelectedStock}
              language={language}
            />
            
            <ReportSettings
              reportStyle={reportStyle}
              onReportStyleChange={setReportStyle}
              language={language}
              onGenerateReport={handleGenerateReport}
              isGenerating={isGenerating}
              disabled={!selectedStock}
            />
          </div>

          {/* Right Panel - Preview */}
          <div>
            <ReportPreview
              stockCode={selectedStock}
              reportStyle={reportStyle}
              language={language}
              isGenerating={isGenerating}
              showPreview={showPreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
