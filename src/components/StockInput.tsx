
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface StockInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const StockInput: React.FC<StockInputProps> = ({ value, onChange }) => {
  const popularStocks = [
    { code: 'AAPL', name: 'Apple Inc.' },
    { code: 'MSFT', name: 'Microsoft Corp.' },
    { code: 'GOOGL', name: 'Alphabet Inc.' },
    { code: 'TSLA', name: 'Tesla Inc.' },
    { code: 'NVDA', name: 'NVIDIA Corp.' },
    { code: '2330.TW', name: '台積電' },
    { code: '0700.HK', name: '騰訊控股' }
  ];

  return (
    <div>
      <Label className="text-gray-700 font-medium mb-3 block">
        🔍 請輸入股票代碼 / 公司名稱
      </Label>
      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value.toUpperCase())}
            placeholder="例如：AAPL, TSLA, 2330.TW"
            className="pl-10 h-12 text-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-12 px-4">
              AAPL <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {popularStocks.map((stock) => (
              <DropdownMenuItem
                key={stock.code}
                onClick={() => onChange(stock.code)}
                className="cursor-pointer"
              >
                <div>
                  <div className="font-semibold">{stock.code}</div>
                  <div className="text-sm text-gray-500">{stock.name}</div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
