import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  FileText, 
  Download, 
  Share2, 
  ArrowLeft, 
  Edit3,
  BarChart3,
  Image,
  Plus,
  FileImage,
  Video,
  Mic,
  TrendingUp,
  TrendingDown,
  GripVertical,
  ChevronDown
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

export const ReportPreview: React.FC<ReportPreviewProps> = ({
  stockCode,
  reportFormat,
  reportTone,
  investmentView,
  options,
  onBack
}) => {
  const { toast } = useToast();

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

      <ResizablePanelGroup direction="horizontal" className="min-h-[900px]">
        <ResizablePanel defaultSize={65} minSize={48}>
          <Card className="p-6 h-full mr-2 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold flex items-center space-x-2 text-gray-800">
                <FileText className="h-5 w-5" />
                <span>📄 報告預覽（可編輯）</span>
              </h2>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Edit3 className="h-4 w-4 mr-2" />
                編輯
              </Button>
            </div>
            <ScrollArea className="flex-1 max-h-[820px] min-h-[520px] pr-1">
              {/* Banner */}
              <ReportBanner stockCode={stockCode} />
              <div className="space-y-4 text-sm">
                <TechnicalAnalysisSection stockCode={stockCode} />
                <InvestmentSection stockCode={stockCode} investmentView={investmentView} />
                {options.financialTable && <FinancialTableSection />}
                {options.epsChart && <EpsChartSection stockCode={stockCode} />}
                {options.riskWarning && <RiskWarningSection />}
              </div>
            </ScrollArea>
          </Card>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={35} minSize={25}>
          <ChartArea stockCode={stockCode} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
