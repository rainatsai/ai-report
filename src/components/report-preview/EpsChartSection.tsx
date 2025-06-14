
import React from "react";
import { GripVertical, BarChart3 } from "lucide-react";

export const EpsChartSection: React.FC<{ stockCode: string }> = ({ stockCode }) => (
  <div className="p-4 border border-gray-200 rounded-lg">
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold flex items-center space-x-2 text-gray-800">
        <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
        <span>EPS 趨勢圖</span>
      </h4>
    </div>
    <div className="bg-gray-50 p-4 rounded text-center">
      <BarChart3 className="h-16 w-16 mx-auto mb-3 text-gray-400" />
      <p className="text-sm text-gray-600 mb-2">{stockCode} 每股盈餘趨勢</p>
      <div className="flex justify-center space-x-8 text-xs">
        <div>2021: $5.67</div>
        <div>2022: $6.11</div>
        <div>2023: $6.16</div>
        <div className="text-green-600">2024E: $6.45</div>
      </div>
    </div>
  </div>
);

