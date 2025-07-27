import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockChartModuleProps {
  symbol: string;
}

export const StockChartModule: React.FC<StockChartModuleProps> = ({ symbol }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{symbol} 技術線圖</span>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-green-600">
            <TrendingUp className="h-4 w-4" />
            <span>RSI: 65.4</span>
          </div>
          <div className="flex items-center space-x-1 text-blue-600">
            <TrendingDown className="h-4 w-4" />
            <span>MACD: 買進訊號</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded p-6 text-center min-h-[120px] flex items-center justify-center">
        <div className="text-gray-600">
          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
          <p className="text-sm">技術分析圖表</p>
          <p className="text-xs text-gray-500">支撐位: $180 | 阻力位: $195</p>
        </div>
      </div>
    </div>
  );
};