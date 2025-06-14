
import React from "react";
import { GripVertical, BarChart3, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EpsChartSectionProps {
  stockCode: string;
  onEdit?: () => void;
}

export const EpsChartSection: React.FC<EpsChartSectionProps> = ({ stockCode, onEdit }) => (
  <div className="relative p-4 border border-gray-200 rounded-lg group">
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold flex items-center space-x-2 text-gray-800">
        <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
        <span>EPS 趨勢圖</span>
      </h4>
      <Button
        variant="outline"
        size="sm"
        onClick={onEdit}
        className="text-xs opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 bg-white/80 border-gray-200 text-gray-700 hover:bg-white"
        style={{ fontSize: "12px", height: "1.5rem", minWidth: 0 }}
      >
        <Edit3 className="h-3 w-3 mr-1" />
        編輯
      </Button>
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

