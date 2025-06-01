
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface ReportToneSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const ReportToneSelector: React.FC<ReportToneSelectorProps> = ({ value, onChange }) => {
  const tones = [
    { id: 'professional', label: '專業分析' },
    { id: 'casual', label: '輕鬆解說' },
    { id: 'presentation', label: '投顧簡報' }
  ];

  return (
    <div>
      <Label className="text-gray-700 font-medium mb-3 block">
        報告語氣：
      </Label>
      <div className="flex space-x-8">
        {tones.map((tone) => (
          <div key={tone.id} className="flex items-center space-x-2">
            <Checkbox 
              id={tone.id}
              checked={value === tone.id}
              onCheckedChange={(checked) => checked && onChange(tone.id)}
            />
            <Label htmlFor={tone.id} className="cursor-pointer">
              {tone.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};
