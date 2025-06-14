
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface InvestmentViewSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const InvestmentViewSelector: React.FC<InvestmentViewSelectorProps> = ({ value, onChange }) => {
  const views = [
    { id: 'bullish', label: '看多', icon: TrendingUp, color: 'text-green-600' },
    { id: 'bearish', label: '看空', icon: TrendingDown, color: 'text-red-600' },
    { id: 'neutral', label: '持平', icon: Minus, color: 'text-gray-600' }
  ];

  return (
    <div>
      <Label className="text-gray-700 font-medium mb-3 block">
        投資觀點：
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="flex space-x-8">
        {views.map((view) => {
          const IconComponent = view.icon;
          return (
            <div key={view.id} className="flex items-center space-x-2">
              <RadioGroupItem value={view.id} id={view.id} />
              <Label htmlFor={view.id} className="cursor-pointer flex items-center space-x-2">
                <IconComponent className={`h-4 w-4 ${view.color}`} />
                <span>{view.label}</span>
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};
