
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';

interface StockInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const StockInput: React.FC<StockInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <Label className="text-gray-700 font-medium mb-3 block">
        🔍 請輸入股票代碼 / 公司名稱
      </Label>
      <div className="relative">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value.toUpperCase())}
          placeholder="例如：AAPL, TSLA, 2330.TW"
          className="pl-10 h-12 text-lg"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};
