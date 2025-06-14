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
        {/* Report Preview */}
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
            
            {/* 可上下滑動的區域，拉長高度。Banner搬進來，Banner縮小 */}
            <ScrollArea className="flex-1 max-h-[820px] min-h-[520px] pr-1">
              {/* Banner 縮小 style 並下移，全部進稿件滑動區 */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-md p-3 shadow group mb-4 text-[0.93rem] relative">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="absolute top-2 right-2 bg-white/10 border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 px-2 py-1 text-xs"
                  style={{ fontSize: '12px', height: '1.6rem', minWidth: 0 }}
                >
                  <Edit3 className="h-3 w-3 mr-1" />
                  編輯
                </Button>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=80&h=80&fit=crop&crop=face" 
                      alt="東聯未來證券" 
                      className="w-10 h-10 rounded-lg bg-white p-1"
                    />
                    <div>
                      <h2 className="text-base font-bold leading-tight">東聯未來證券</h2>
                      <p className="text-blue-200 text-sm leading-tight">個股分析報告</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{stockCode}</div>
                    <div className="text-xs">Apple Inc.</div>
                    <div className="text-green-300 text-xs">$175.85 (+2.45%)</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
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
                      <span className="text-sm">天線：支撐位 $170.25</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingDown className="h-4 w-4 text-green-600" />
                      <span className="text-sm">地線：阻力位 $180.50</span>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded p-4 min-h-[200px] flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm">{stockCode} K線圖與天地線</p>
                      <p className="text-xs text-gray-400 mt-1">當前價位：$175.85</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                    <strong>技術解讀：</strong>{stockCode} 目前股價位於天地線中間偏上區域，突破 $180.50 阻力位後有望挑戰新高，若跌破 $170.25 支撐位則需觀察回檔幅度。
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold flex items-center space-x-2 text-gray-800">
                      <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                      <span>{stockCode} 投資分析報告</span>
                    </h3>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 mr-2">
                      投資觀點：{getInvestmentViewText()}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      目標價：$190
                    </span>
                  </div>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    <p><strong>投資亮點：</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>iPhone 15 系列銷售表現強勁，特別是 Pro 系列需求旺盛</li>
                      <li>服務業務持續成長，App Store 與 iCloud 收入穩定增長</li>
                      <li>Vision Pro 產品線為未來成長帶來新動能</li>
                      <li>股票回購計畫持續進行，每股盈餘獲得提升</li>
                    </ul>
                    
                    <p><strong>風險因素：</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>中國市場競爭加劇，華為回歸影響市占率</li>
                      <li>全球經濟不確定性可能影響消費性電子需求</li>
                      <li>供應鏈成本上升壓縮毛利率</li>
                    </ul>
                  </div>
                </div>
                
                {options.financialTable && (
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold flex items-center space-x-2 text-gray-800">
                        <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                        <span>財務數據表格</span>
                      </h4>
                    </div>
                    <div className="bg-white border rounded overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-3 py-2 text-left">項目</th>
                            <th className="px-3 py-2 text-right">2023</th>
                            <th className="px-3 py-2 text-right">2022</th>
                            <th className="px-3 py-2 text-right">2021</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="px-3 py-2">營收 (億美元)</td>
                            <td className="px-3 py-2 text-right">3,832</td>
                            <td className="px-3 py-2 text-right">3,943</td>
                            <td className="px-3 py-2 text-right">3,658</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-3 py-2">淨利 (億美元)</td>
                            <td className="px-3 py-2 text-right">970</td>
                            <td className="px-3 py-2 text-right">998</td>
                            <td className="px-3 py-2 text-right">946</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-3 py-2">EPS (美元)</td>
                            <td className="px-3 py-2 text-right">6.16</td>
                            <td className="px-3 py-2 text-right">6.11</td>
                            <td className="px-3 py-2 text-right">5.67</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-3 py-2">毛利率 (%)</td>
                            <td className="px-3 py-2 text-right">44.1</td>
                            <td className="px-3 py-2 text-right">43.3</td>
                            <td className="px-3 py-2 text-right">41.8</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {options.epsChart && (
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold flex items-center space-x-2 text-gray-800">
                        <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                        <span>EPS 趨勢圖</span>
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded text-center">
                      <BarChart3 className="h-16 w-16 mx-auto mb-3 text-gray-400" />
                      <p className="text-sm text-gray-600 mb-2">{stockCode} 每股盈餘趨勢</p>
                      <div className="flex justify-center space-x-8 text-xs">
                        <div>2021: $5.67</div>
                        <div>2022: $6.11</div>
                        <div>2023: $6.16</div>
                        <div className="text-green-600">2024E: $6.45</div>
                      </div>
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
                      本報告僅供參考，不構成投資建議。投資有風險，過去績效不代表未来表現。
                      投資人應審慎評估投資標的與本身風險承受能力。本分析基於公開資訊，
                      東聯未來證券不保證資訊之正確性與完整性。
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </Card>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Chart Area */}
        <ResizablePanel defaultSize={35} minSize={25}>
          <Card className="p-8 h-full ml-2">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-gray-800">
              <BarChart3 className="h-5 w-5" />
              <span>🖼️ 圖表區</span>
            </h3>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
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
              
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
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

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Plus className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500 mb-3">
                  新增更多圖表
                </p>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Plus className="h-4 w-4 mr-2" />
                  新增圖表
                </Button>
              </div>
            </div>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
