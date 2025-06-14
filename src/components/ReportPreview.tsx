
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
  GripVertical
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

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

  const getInvestmentViewText = () => {
    switch (investmentView) {
      case 'bullish': return '看多';
      case 'bearish': return '看空';
      case 'neutral': return '持平';
      default: return '持平';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
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
        
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => handleExport('PDF')}
            className="bg-gray-600 hover:bg-gray-700 text-white text-sm px-3 py-2"
            size="sm"
          >
            <Download className="mr-1 h-3 w-3" />
            PDF
          </Button>
          <Button
            onClick={() => handleExport('Word')}
            className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-3 py-2"
            size="sm"
          >
            <Download className="mr-1 h-3 w-3" />
            Word
          </Button>
          <Button
            onClick={() => handleExport('JPEG')}
            className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-3 py-2"
            size="sm"
          >
            <FileImage className="mr-1 h-3 w-3" />
            JPEG
          </Button>
          <Button
            onClick={() => handleExport('短片')}
            className="bg-gray-700 hover:bg-gray-800 text-white text-sm px-3 py-2"
            size="sm"
          >
            <Video className="mr-1 h-3 w-3" />
            短片
          </Button>
          <Button
            onClick={() => handleExport('Podcast')}
            className="bg-gray-600 hover:bg-gray-700 text-white text-sm px-3 py-2"
            size="sm"
          >
            <Mic className="mr-1 h-3 w-3" />
            Podcast
          </Button>
          <Button
            variant="outline"
            onClick={() => handleExport('內部分享')}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm px-3 py-2"
            size="sm"
          >
            <Share2 className="mr-1 h-3 w-3" />
            內部分享鏈結
          </Button>
        </div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="min-h-[600px]">
        {/* Report Preview */}
        <ResizablePanel defaultSize={60} minSize={40}>
          <Card className="p-6 h-full mr-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center space-x-2 text-gray-800">
                <FileText className="h-5 w-5" />
                <span>📄 報告預覽（可編輯）</span>
              </h2>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Edit3 className="h-4 w-4 mr-2" />
                編輯
              </Button>
            </div>
            
            <div className="space-y-4 text-sm overflow-y-auto max-h-[calc(100vh-250px)]">
              {/* 天地圖區塊 */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-red-50 to-green-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                    <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                    <span>天地圖 - {stockCode} 技術分析</span>
                  </h4>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Edit3 className="h-3 w-3 mr-1" />
                    編輯圖表
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-red-600" />
                    <span className="text-sm">天線：支撐位 $150.25</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="h-4 w-4 text-green-600" />
                    <span className="text-sm">地線：阻力位 $165.80</span>
                  </div>
                </div>
                
                <div className="bg-white border rounded p-4 min-h-[200px] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">K線圖與天地線將顯示於此</p>
                    <p className="text-xs text-gray-400 mt-1">可拖拽調整圖表參數</p>
                  </div>
                </div>
                
                <div className="mt-3 text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                  <strong>技術解讀：</strong>當前股價位於天地線中間區域，建議觀察是否突破阻力位或跌破支撐位以判斷後續走勢。
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold flex items-center space-x-2 text-gray-800">
                    <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                    <span>{stockCode} 投資分析報告</span>
                  </h3>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    投資觀點：{getInvestmentViewText()}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  本報告針對 {stockCode} 進行全面分析，包含基本面與技術面評估...
                  {reportFormat === 'complete' && '詳細分析公司營運狀況、財務表現及未來展望...'}
                  {reportTone === 'casual' && '用輕鬆易懂的方式為您解析投資要點...'}
                  基於當前市場環境與公司基本面分析，我們持{getInvestmentViewText()}觀點...
                </p>
              </div>
              
              {options.financialTable && (
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold flex items-center space-x-2 text-gray-800">
                      <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                      <span>財務數據表格</span>
                    </h4>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center text-gray-500">
                    近三年財報表格將顯示於此
                  </div>
                </div>
              )}
              
              {options.epsChart && (
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold flex items-center space-x-2 text-gray-800">
                      <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                      <span>EPS 趨勢圖</span>
                    </h4>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center text-gray-500">
                    EPS 趨勢圖表將顯示於此
                  </div>
                </div>
              )}
              
              {options.riskWarning && (
                <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold flex items-center space-x-2 text-orange-800">
                      <GripVertical className="h-4 w-4 text-orange-400 cursor-move" />
                      <span>風險提示</span>
                    </h4>
                  </div>
                  <p className="text-orange-700 text-sm">
                    投資有風險，過去績效不代表未來表現，請謹慎評估...
                  </p>
                </div>
              )}
            </div>
          </Card>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Chart Area */}
        <ResizablePanel defaultSize={40} minSize={30}>
          <Card className="p-6 h-full ml-3">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-gray-800">
              <BarChart3 className="h-5 w-5" />
              <span>🖼️ 圖表區</span>
            </h3>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Image className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500 mb-3">
                  拖拉或點擊新增圖表
                </p>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Plus className="h-4 w-4 mr-2" />
                  新增技術線圖
                </Button>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500 mb-3">
                  營收年增率圖
                </p>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Plus className="h-4 w-4 mr-2" />
                  新增營收圖表
                </Button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500 mb-3">
                  成交量分析圖
                </p>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Plus className="h-4 w-4 mr-2" />
                  新增成交量圖
                </Button>
              </div>
            </div>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
