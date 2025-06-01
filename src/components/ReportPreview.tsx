
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
  Plus
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ReportPreviewProps {
  stockCode: string;
  reportFormat: string;
  reportTone: string;
  options: any;
  onBack: () => void;
}

export const ReportPreview: React.FC<ReportPreviewProps> = ({
  stockCode,
  reportFormat,
  reportTone,
  options,
  onBack
}) => {
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: "匯出成功",
      description: `${format} 檔案已開始下載`,
      duration: 3000,
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>返回設定</span>
        </Button>
        
        <div className="flex space-x-3">
          <Button
            onClick={() => handleExport('PDF')}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            PDF
          </Button>
          <Button
            onClick={() => handleExport('Word')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Word
          </Button>
          <Button
            variant="outline"
            onClick={() => handleExport('內部分享')}
          >
            <Share2 className="mr-2 h-4 w-4" />
            內部分享鏈結
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Report Preview */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>📄 報告預覽（可編輯）</span>
              </h2>
              <Button variant="outline" size="sm">
                <Edit3 className="h-4 w-4 mr-2" />
                編輯
              </Button>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">{stockCode} 投資分析報告</h3>
                <p className="text-gray-600 leading-relaxed">
                  本報告針對 {stockCode} 進行全面分析，包含基本面與技術面評估...
                  {reportFormat === 'complete' && '詳細分析公司營運狀況、財務表現及未來展望...'}
                  {reportTone === 'casual' && '用輕鬆易懂的方式為您解析投資要點...'}
                </p>
              </div>
              
              {options.financialTable && (
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">財務數據表格</h4>
                  <div className="bg-gray-50 p-3 rounded text-center text-gray-500">
                    近三年財報表格將顯示於此
                  </div>
                </div>
              )}
              
              {options.epsChart && (
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">EPS 趨勢圖</h4>
                  <div className="bg-gray-50 p-3 rounded text-center text-gray-500">
                    EPS 趨勢圖表將顯示於此
                  </div>
                </div>
              )}
              
              {options.riskWarning && (
                <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-800">風險提示</h4>
                  <p className="text-red-700 text-sm">
                    投資有風險，過去績效不代表未來表現，請謹慎評估...
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Chart Area */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>🖼️ 圖表區</span>
            </h3>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Image className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500 mb-3">
                  拖拉或點擊新增圖表
                </p>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  新增技術線圖
                </Button>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500 mb-3">
                  營收年增率圖
                </p>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  新增營收圖表
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
