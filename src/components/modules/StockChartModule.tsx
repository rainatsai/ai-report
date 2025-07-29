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
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 min-h-[200px] relative overflow-hidden">
        {/* 模擬 K線圖 */}
        <div className="relative h-40 w-full">
          {/* 背景網格 */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full border-t border-gray-300"
                style={{ top: `${i * 25}%` }}
              />
            ))}
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="absolute h-full border-l border-gray-300"
                style={{ left: `${i * 16.67}%` }}
              />
            ))}
          </div>
          
          {/* 模擬 K線圖柱 */}
          <div className="absolute inset-0 flex items-end justify-around px-2">
            {[
              { high: 85, low: 60, open: 65, close: 80, color: 'green' },
              { high: 88, low: 70, open: 80, close: 75, color: 'red' },
              { high: 82, low: 55, open: 75, close: 78, color: 'green' },
              { high: 90, low: 65, open: 78, close: 85, color: 'green' },
              { high: 92, low: 72, open: 85, close: 88, color: 'green' },
              { high: 95, low: 75, open: 88, close: 82, color: 'red' },
              { high: 87, low: 68, open: 82, close: 85, color: 'green' },
            ].map((candle, i) => (
              <div key={i} className="relative w-2 flex flex-col items-center">
                {/* 上影線 */}
                <div
                  className="w-px bg-gray-600"
                  style={{ height: `${(candle.high - Math.max(candle.open, candle.close)) * 1.5}px` }}
                />
                {/* K線實體 */}
                <div
                  className={`w-full ${
                    candle.color === 'green' 
                      ? 'bg-green-500' 
                      : 'bg-red-500'
                  }`}
                  style={{ 
                    height: `${Math.abs(candle.close - candle.open) * 2}px`,
                  }}
                />
                {/* 下影線 */}
                <div
                  className="w-px bg-gray-600"
                  style={{ height: `${(Math.min(candle.open, candle.close) - candle.low) * 1.5}px` }}
                />
              </div>
            ))}
          </div>
          
          {/* 移動平均線 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 20 120 Q 60 100 100 110 T 180 105 T 260 95 T 340 100"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M 20 125 Q 60 105 100 115 T 180 110 T 260 100 T 340 105"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </svg>
        </div>
        
        {/* 圖表說明 */}
        <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-0.5 bg-blue-500"></div>
              <span>MA5</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-0.5 bg-yellow-500"></div>
              <span>MA20</span>
            </div>
          </div>
          <div className="text-right">
            <div>支撐位: $180.50</div>
            <div>阻力位: $195.20</div>
          </div>
        </div>
      </div>
    </div>
  );
};