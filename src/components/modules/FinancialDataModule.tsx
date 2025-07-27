import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

interface FinancialDataModuleProps {
  symbol: string;
}

export const FinancialDataModule: React.FC<FinancialDataModuleProps> = ({ symbol }) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-50 p-3 rounded text-center">
          <DollarSign className="h-6 w-6 mx-auto mb-1 text-purple-600" />
          <div className="text-sm font-medium">每股盈餘 (EPS)</div>
          <div className="text-lg font-bold text-purple-600">$6.16</div>
          <div className="text-xs text-gray-600">2023年度</div>
        </div>
        <div className="bg-orange-50 p-3 rounded text-center">
          <TrendingUp className="h-6 w-6 mx-auto mb-1 text-orange-600" />
          <div className="text-sm font-medium">營收成長率</div>
          <div className="text-lg font-bold text-orange-600">+4.9%</div>
          <div className="text-xs text-gray-600">年度成長</div>
        </div>
      </div>
      <div className="bg-gray-50 p-3 rounded">
        <div className="text-sm font-medium mb-2">財務指標</div>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-gray-500">本益比 (P/E)</div>
            <div className="font-medium">28.5</div>
          </div>
          <div>
            <div className="text-gray-500">股價淨值比 (P/B)</div>
            <div className="font-medium">5.2</div>
          </div>
          <div>
            <div className="text-gray-500">股息殖利率</div>
            <div className="font-medium">0.52%</div>
          </div>
          <div>
            <div className="text-gray-500">毛利率</div>
            <div className="font-medium">44.1%</div>
          </div>
        </div>
      </div>
    </div>
  );
};