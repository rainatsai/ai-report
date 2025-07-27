import React from 'react';
import { TrendingUp } from 'lucide-react';

interface StockQuoteModuleProps {
  symbol: string;
}

export const StockQuoteModule: React.FC<StockQuoteModuleProps> = ({ symbol }) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-2xl font-bold text-gray-800">$189.84</div>
          <div className="text-sm text-gray-600">{symbol} 即時股價</div>
        </div>
        <div className="bg-green-50 p-3 rounded">
          <div className="flex items-center space-x-1 text-green-600">
            <TrendingUp className="h-4 w-4" />
            <span className="font-bold">+2.34</span>
            <span className="text-sm">(+1.25%)</span>
          </div>
          <div className="text-sm text-gray-600">今日漲跌</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 text-xs">
        <div className="text-center">
          <div className="text-gray-500">開盤</div>
          <div className="font-medium">$187.50</div>
        </div>
        <div className="text-center">
          <div className="text-gray-500">最高</div>
          <div className="font-medium">$190.12</div>
        </div>
        <div className="text-center">
          <div className="text-gray-500">最低</div>
          <div className="font-medium">$186.88</div>
        </div>
        <div className="text-center">
          <div className="text-gray-500">成交量</div>
          <div className="font-medium">45.2M</div>
        </div>
      </div>
    </div>
  );
};