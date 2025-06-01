
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface ReportOptionsProps {
  options: {
    epsChart: boolean;
    financialTable: boolean;
    riskWarning: boolean;
  };
  onChange: (options: any) => void;
}

export const ReportOptions: React.FC<ReportOptionsProps> = ({ options, onChange }) => {
  const handleOptionChange = (key: string, checked: boolean) => {
    onChange({
      ...options,
      [key]: checked
    });
  };

  const optionsList = [
    { key: 'epsChart', label: '自動加入 EPS 趨勢圖', checked: options.epsChart },
    { key: 'financialTable', label: '顯示近三年財報表格', checked: options.financialTable },
    { key: 'riskWarning', label: '風險提示段落', checked: options.riskWarning }
  ];

  return (
    <div className="flex flex-wrap gap-6">
      {optionsList.map((option) => (
        <div key={option.key} className="flex items-center space-x-2">
          <Checkbox 
            id={option.key}
            checked={option.checked}
            onCheckedChange={(checked) => handleOptionChange(option.key, checked as boolean)}
          />
          <Label htmlFor={option.key} className="cursor-pointer text-sm">
            ✔️{option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};
