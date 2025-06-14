
import React, { useState } from 'react';
import { StockInput } from '@/components/StockInput';
import { ReportFormatSelector } from '@/components/ReportFormatSelector';
import { ReportToneSelector } from '@/components/ReportToneSelector';
import { ReportOptions } from '@/components/ReportOptions';
import { InvestmentViewSelector } from '@/components/InvestmentViewSelector';
import { GenerateButton } from '@/components/GenerateButton';
import { ReportPreview } from '@/components/ReportPreview';
import { PenTool } from 'lucide-react';

const Index = () => {
  const [selectedStock, setSelectedStock] = useState('');
  const [reportFormat, setReportFormat] = useState('summary');
  const [reportTone, setReportTone] = useState('professional');
  const [investmentView, setInvestmentView] = useState('neutral');
  const [options, setOptions] = useState({
    epsChart: true,
    financialTable: true,
    riskWarning: true
  });
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                AI 報告撰寫工具
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {!showPreview ? (
          <div className="max-w-4xl mx-auto">
            {/* Input Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              <StockInput 
                value={selectedStock}
                onChange={setSelectedStock}
              />
              
              <ReportFormatSelector
                value={reportFormat}
                onChange={setReportFormat}
              />
              
              <ReportToneSelector
                value={reportTone}
                onChange={setReportTone}
              />

              <InvestmentViewSelector
                value={investmentView}
                onChange={setInvestmentView}
              />
              
              <ReportOptions
                options={options}
                onChange={setOptions}
              />
              
              <GenerateButton
                onClick={handleGenerateReport}
                isGenerating={isGenerating}
                disabled={!selectedStock}
              />
            </div>
          </div>
        ) : (
          <ReportPreview
            stockCode={selectedStock}
            reportFormat={reportFormat}
            reportTone={reportTone}
            investmentView={investmentView}
            options={options}
            onBack={() => setShowPreview(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
