
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
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
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
import { ChartArea } from './report-preview/ChartArea';

interface ReportPreviewProps {
  stockCode: string;
  reportFormat: string;
  reportTone: string;
  investmentView: string;
  options: any;
  onBack: () => void;
}

// 編輯對話框的展示建議後續補齊
export const ReportPreview: React.FC<ReportPreviewProps> = ({
  stockCode,
  reportFormat,
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
        
        <div className="flex gap-2">
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
              <DropdownMenuItem onClick={() => handleExport('短片')} className="cursor-pointer">
                <Video className="mr-2 h-4 w-4" />
                短片
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('Podcast')} className="cursor-pointer">
                <Mic className="mr-2 h-4 w-4" />
                Podcast
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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

      {/* 調整 panel 比例，Chart 更多空間 */}
      <ResizablePanelGroup direction="horizontal" className="min-h-[900px]">
        <ResizablePanel defaultSize={58} minSize={40}>
          <Card className="p-6 h-full mr-2 flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <h2 className="text-lg font-bold flex items-center space-x-2 text-gray-800">
                <FileText className="h-5 w-5" />
                <span>📄 報告預覽（可編輯）</span>
              </h2>
              {/* [移除] universal 編輯按鈕 */}
            </div>
            <ScrollArea className="flex-1 max-h-[820px] min-h-[520px] pr-1">
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
                {options.riskWarning && (
                  <RiskWarningSection onEdit={() => handleEditSection('風險提示')} />
                )}
              </div>
            </ScrollArea>
          </Card>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={42} minSize={20}>
          <ChartArea stockCode={stockCode} onEdit={() => handleEditSection('圖表區')} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

