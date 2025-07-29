
import React, { useState } from 'react';
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
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

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
import { DraggableModule } from './DraggableModule';
import { AddModuleDialog } from './AddModuleDialog';
import { StockChartModule } from './modules/StockChartModule';
import { StockQuoteModule } from './modules/StockQuoteModule';
import { TechnicalAnalysisModule } from './modules/TechnicalAnalysisModule';
import { FinancialDataModule } from './modules/FinancialDataModule';


interface ReportPreviewProps {
  stockCode: string;
  reportTone: string;
  investmentView: string;
  options: any;
  onBack: () => void;
}

interface ModuleData {
  id: string;
  type: string;
  title: string;
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
  const [modules, setModules] = useState<ModuleData[]>([
    {
      id: 'default-stock-chart',
      type: 'stock-chart',
      title: 'AAPL K線圖'
    },
    {
      id: 'default-financial-data',
      type: 'financial-data',
      title: 'AAPL 財務數據 & EPS 趨勢'
    }
  ]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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

  const handleAddModule = (type: string) => {
    const moduleId = `module-${Date.now()}`;
    const moduleTypeMap = {
      'stock-chart': '股票圖表',
      'stock-quote': '個股即時報價',
      'technical-analysis': '技術分析圖表',
      'financial-data': '財務報告數據',
    };
    
    const newModule: ModuleData = {
      id: moduleId,
      type,
      title: moduleTypeMap[type as keyof typeof moduleTypeMap] || '新模組',
    };
    
    setModules(prev => [...prev, newModule]);
  };

  const handleDeleteModule = (id: string) => {
    setModules(prev => prev.filter(module => module.id !== id));
  };

  const handleEditModule = (id: string) => {
    toast({
      title: "編輯模組",
      description: "開啟模組編輯介面...",
      duration: 1800,
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setModules((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const renderModule = (module: ModuleData) => {
    switch (module.type) {
      case 'stock-chart':
        return <StockChartModule symbol={stockCode} />;
      case 'stock-quote':
        return <StockQuoteModule symbol={stockCode} />;
      case 'technical-analysis':
        return <TechnicalAnalysisModule symbol={stockCode} />;
      case 'financial-data':
        return <FinancialDataModule symbol={stockCode} />;
      default:
        return <div className="text-gray-500">未知模組類型</div>;
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
        <div className="flex items-center justify-between gap-2 mb-5">
          <h2 className="text-lg font-bold flex items-center space-x-2 text-gray-800">
            <FileText className="h-5 w-5" />
            <span>📄 報告預覽（可編輯）</span>
          </h2>
          <Button
            variant="outline"
            onClick={() => setShowAddDialog(true)}
            className="border-blue-300 text-blue-700 hover:bg-blue-50 text-sm px-3 py-1"
            size="sm"
          >
            <Plus className="mr-2 h-4 w-4" />
            新增模組
          </Button>
        </div>
        <ScrollArea className="h-[70vh] pr-1">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            {/* Banner+Sections with per-section editable */}
            <ReportBanner stockCode={stockCode} onEdit={() => handleEditSection('Banner')}/>
            <div className="space-y-4 text-sm">
              <InvestmentSection stockCode={stockCode} investmentView={investmentView} onEdit={() => handleEditSection('投資分析')} />
              {options.financialTable && (
                <FinancialTableSection onEdit={() => handleEditSection('財務數據')} />
              )}
              
              {/* 可拖拉的動態模組 */}
              <SortableContext items={modules.map(m => m.id)} strategy={verticalListSortingStrategy}>
                {modules.map((module) => (
                  <DraggableModule
                    key={module.id}
                    id={module.id}
                    title={module.title}
                    onDelete={handleDeleteModule}
                    onEdit={handleEditModule}
                  >
                    {renderModule(module)}
                  </DraggableModule>
                ))}
              </SortableContext>
              
              {options.riskWarning && (
                <RiskWarningSection onEdit={() => handleEditSection('風險提示')} />
              )}
              
              {/* 投資警語 - 放在最下方 */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  📢 投資警語： 本資料僅供參考，無任何投資建議之意。投資涉及風險，請審慎評估自身風險承受度。
                </p>
              </div>
            </div>
          </DndContext>
        </ScrollArea>
        
        <AddModuleDialog
          open={showAddDialog}
          onOpenChange={setShowAddDialog}
          onAddModule={handleAddModule}
        />
      </Card>
    </div>
  );
};
