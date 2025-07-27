
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  FileText, 
  Download, 
  Share2, 
  ArrowLeft, 
  ChevronDown,
  FileImage,
  Video,
  Mic,
  Edit3,
  TrendingUp,
  BarChart3,
  Plus,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ReportBanner } from './report-preview/ReportBanner';
import { TechnicalAnalysisSection } from './report-preview/TechnicalAnalysisSection';
import { InvestmentSection } from './report-preview/InvestmentSection';
import { FinancialTableSection } from './report-preview/FinancialTableSection';
import { EpsChartSection } from './report-preview/EpsChartSection';
import { RiskWarningSection } from './report-preview/RiskWarningSection';


interface ReportPreviewProps {
  stockCode: string;
  reportTone: string;
  investmentView: string;
  options: any;
  onBack: () => void;
}

// 編輯對話框的展示建議後續補齊
export const ReportPreview: React.FC<ReportPreviewProps> = ({
  stockCode,
  reportTone,
  investmentView,
  options,
  onBack
}) => {
  const { toast } = useToast();
  // click handler for edit
  const handleEditSection = (section: string) => {
    toast({
      title: `編輯「${section}」區塊`,
      description: '開啟編輯介面 / 對話框...',
      duration: 1800,
    });
  };

  const handleExport = (format: string) => {
    toast({
      title: "匯出成功",
      description: `${format} 檔案已開始下載/生成`,
      duration: 3000,
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex items-center space-x-2 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>返回設定</span>
        </Button>
        
        <div className="flex gap-2 flex-wrap justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm px-4 py-2"
                size="sm"
              >
                <Download className="mr-2 h-4 w-4" />
                匯出檔案
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border shadow-lg z-50">
              <DropdownMenuItem onClick={() => handleExport('PDF')} className="cursor-pointer">
                <Download className="mr-2 h-4 w-4" />
                PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('Word')} className="cursor-pointer">
                <Download className="mr-2 h-4 w-4" />
                Word
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('JPEG')} className="cursor-pointer">
                <FileImage className="mr-2 h-4 w-4" />
                JPEG
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            onClick={() => handleExport('短片')}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm px-4 py-2"
            size="sm"
          >
            <Video className="mr-2 h-4 w-4" />
            匯出短片
          </Button>
          <Button
            variant="outline"
            onClick={() => handleExport('Podcast')}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm px-4 py-2"
            size="sm"
          >
            <Mic className="mr-2 h-4 w-4" />
            匯出 Podcast
          </Button>
          <Button
            variant="outline"
            onClick={() => handleExport('內部分享')}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm px-4 py-2"
            size="sm"
          >
            <Share2 className="mr-2 h-4 w-4" />
            內部分享鏈結
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-5">
          <h2 className="text-lg font-bold flex items-center space-x-2 text-gray-800">
            <FileText className="h-5 w-5" />
            <span>📄 報告預覽（可編輯）</span>
          </h2>
        </div>
        <ScrollArea className="max-h-[900px] min-h-[520px] pr-1">
          {/* Banner+Sections with per-section editable */}
          <ReportBanner stockCode={stockCode} onEdit={() => handleEditSection('Banner')}/>
          <div className="space-y-4 text-sm">
            <TechnicalAnalysisSection stockCode={stockCode} onEdit={() => handleEditSection('技術分析')} />
            <InvestmentSection stockCode={stockCode} investmentView={investmentView} onEdit={() => handleEditSection('投資分析')} />
            {options.financialTable && (
              <FinancialTableSection onEdit={() => handleEditSection('財務數據')} />
            )}
            {options.epsChart && (
              <EpsChartSection stockCode={stockCode} onEdit={() => handleEditSection('EPS趨勢')} />
            )}
            
            {/* 整合的圖表區塊 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white space-y-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-700">{stockCode} 技術線圖</h4>
                <Button variant="outline" size="sm" className="text-xs">
                  <Edit3 className="h-3 w-3 mr-1" />
                  編輯
                </Button>
              </div>
              <div className="bg-gray-50 rounded p-6 text-center min-h-[150px] flex items-center justify-center">
                <div>
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">RSI: 65.4</p>
                  <p className="text-sm text-gray-600">MACD: 買進訊號</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-white space-y-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-700">營收年增率圖</h4>
                <Button variant="outline" size="sm" className="text-xs">
                  <Edit3 className="h-3 w-3 mr-1" />
                  編輯
                </Button>
              </div>
              <div className="bg-gray-50 rounded p-6 text-center min-h-[150px] flex items-center justify-center">
                <div>
                  <BarChart3 className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Q4 2023: -2.8%</p>
                  <p className="text-sm text-gray-600">Q1 2024: +4.9%</p>
                </div>
              </div>
            </div>
            
            {/* 新增圖表/文字方塊按鈕 */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <Plus className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500 mb-3">新增圖表或文字方塊</p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  新增圖表
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <FileText className="h-4 w-4 mr-2" />
                  新增文字方塊
                </Button>
              </div>
            </div>
            
            {options.riskWarning && (
              <RiskWarningSection onEdit={() => handleEditSection('風險提示')} />
            )}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};
