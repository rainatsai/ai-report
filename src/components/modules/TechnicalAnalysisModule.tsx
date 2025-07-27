import React from 'react';
import { BarChart3, Activity } from 'lucide-react';

interface TechnicalAnalysisModuleProps {
  symbol: string;
}

export const TechnicalAnalysisModule: React.FC<TechnicalAnalysisModuleProps> = ({ symbol }) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded text-center">
          <Activity className="h-6 w-6 mx-auto mb-1 text-blue-600" />
          <div className="text-sm font-medium">RSI 指標</div>
          <div className="text-lg font-bold text-blue-600">65.4</div>
          <div className="text-xs text-gray-600">超買區間</div>
        </div>
        <div className="bg-green-50 p-3 rounded text-center">
          <BarChart3 className="h-6 w-6 mx-auto mb-1 text-green-600" />
          <div className="text-sm font-medium">MACD</div>
          <div className="text-lg font-bold text-green-600">買進</div>
          <div className="text-xs text-gray-600">黃金交叉</div>
        </div>
      </div>
      <div className="bg-gray-50 p-3 rounded">
        <div className="text-sm font-medium mb-2">技術分析摘要</div>
        <div className="text-xs text-gray-600 space-y-1">
          <p>• 短期均線(5日)向上突破中期均線(20日)</p>
          <p>• 成交量放大，顯示買盤積極</p>
          <p>• 支撐位於 $180，阻力位於 $195</p>
        </div>
      </div>
    </div>
  );
};