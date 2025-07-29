import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

interface FinancialDataModuleProps {
  symbol: string;
}

export const FinancialDataModule: React.FC<FinancialDataModuleProps> = ({ symbol }) => {
  return (
    <div className="space-y-4">
      {/* 關鍵指標卡片 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
          <DollarSign className="h-6 w-6 mb-2 text-purple-600" />
          <div className="text-sm font-medium text-purple-800">每股盈餘 (EPS)</div>
          <div className="text-2xl font-bold text-purple-600 mb-1">$6.16</div>
          <div className="text-xs text-purple-500">2023年度 (+12.3%)</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
          <TrendingUp className="h-6 w-6 mb-2 text-green-600" />
          <div className="text-sm font-medium text-green-800">營收成長率</div>
          <div className="text-2xl font-bold text-green-600 mb-1">+4.9%</div>
          <div className="text-xs text-green-500">年度成長 ($383B)</div>
        </div>
      </div>
      
      {/* EPS 趨勢圖 */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg border">
        <div className="text-sm font-medium mb-3 text-gray-800">EPS 成長趨勢</div>
        <div className="relative h-24 w-full">
          {/* 背景網格 */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full border-t border-gray-300"
                style={{ top: `${i * 33.33}%` }}
              />
            ))}
          </div>
          
          {/* 趨勢線 */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 20 70 L 60 65 L 100 55 L 140 50 L 180 45 L 220 35 L 260 30"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            {/* 數據點 */}
            {[
              { x: 20, y: 70, value: '$3.28' },
              { x: 60, y: 65, value: '$4.45' },
              { x: 100, y: 55, value: '$5.61' },
              { x: 140, y: 50, value: '$5.89' },
              { x: 180, y: 45, value: '$6.05' },
              { x: 220, y: 35, value: '$6.11' },
              { x: 260, y: 30, value: '$6.16' },
            ].map((point, i) => (
              <circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="3"
                fill="#10b981"
                className="hover:r-4 transition-all"
              />
            ))}
          </svg>
          
          {/* 年份標籤 */}
          <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-500 px-4">
            <span>2017</span>
            <span>2018</span>
            <span>2019</span>
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
          </div>
        </div>
      </div>
      
      {/* 財務指標表 */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <div className="text-sm font-medium mb-3 text-gray-800">關鍵財務指標</div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between p-2 bg-white rounded border">
            <span className="text-gray-600">本益比 (P/E)</span>
            <span className="font-semibold text-blue-600">28.5</span>
          </div>
          <div className="flex justify-between p-2 bg-white rounded border">
            <span className="text-gray-600">股價淨值比 (P/B)</span>
            <span className="font-semibold text-blue-600">5.2</span>
          </div>
          <div className="flex justify-between p-2 bg-white rounded border">
            <span className="text-gray-600">股息殖利率</span>
            <span className="font-semibold text-green-600">0.52%</span>
          </div>
          <div className="flex justify-between p-2 bg-white rounded border">
            <span className="text-gray-600">毛利率</span>
            <span className="font-semibold text-green-600">44.1%</span>
          </div>
          <div className="flex justify-between p-2 bg-white rounded border">
            <span className="text-gray-600">淨利率</span>
            <span className="font-semibold text-green-600">25.3%</span>
          </div>
          <div className="flex justify-between p-2 bg-white rounded border">
            <span className="text-gray-600">ROE</span>
            <span className="font-semibold text-purple-600">148.0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};