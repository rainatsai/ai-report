import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { BarChart3, DollarSign, Activity, TrendingUp } from 'lucide-react';

interface AddModuleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddModule: (type: string) => void;
}

export const AddModuleDialog: React.FC<AddModuleDialogProps> = ({
  open,
  onOpenChange,
  onAddModule
}) => {
  const moduleTypes = [
    {
      id: 'stock-chart',
      title: '股票圖表',
      description: '顯示技術線圖與指標',
      icon: BarChart3,
    },
    {
      id: 'stock-quote',
      title: '個股即時報價',
      description: '即時股價與基本資訊',
      icon: DollarSign,
    },
    {
      id: 'technical-analysis',
      title: '技術分析圖表',
      description: 'RSI、MACD 等技術指標',
      icon: Activity,
    },
    {
      id: 'financial-data',
      title: '財務報告數據',
      description: 'EPS、營收成長等財務指標',
      icon: TrendingUp,
    },
  ];

  const handleAddModule = (type: string) => {
    onAddModule(type);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>新增內容模組</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {moduleTypes.map((module) => {
            const IconComponent = module.icon;
            return (
              <Button
                key={module.id}
                variant="outline"
                className="h-auto p-4 justify-start text-left"
                onClick={() => handleAddModule(module.id)}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="h-8 w-8 text-gray-600" />
                  <div>
                    <div className="font-medium">{module.title}</div>
                    <div className="text-sm text-gray-500">{module.description}</div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};