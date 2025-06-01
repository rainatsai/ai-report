
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Settings } from 'lucide-react';

interface ReportFormatSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const ReportFormatSelector: React.FC<ReportFormatSelectorProps> = ({ value, onChange }) => {
  const formats = [
    { id: 'summary', label: '摘要型', description: '簡潔重點' },
    { id: 'complete', label: '完整型', description: '詳細分析' },
    { id: 'custom', label: '自訂型', description: '點選設定', hasSettings: true }
  ];

  return (
    <div>
      <Label className="text-gray-700 font-medium mb-3 block">
        報告格式：
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="flex space-x-8">
        {formats.map((format) => (
          <div key={format.id} className="flex items-center space-x-2">
            <RadioGroupItem value={format.id} id={format.id} />
            <Label htmlFor={format.id} className="cursor-pointer flex items-center space-x-2">
              <span>{format.label}</span>
              {format.hasSettings && <Settings className="h-4 w-4 text-gray-400" />}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
