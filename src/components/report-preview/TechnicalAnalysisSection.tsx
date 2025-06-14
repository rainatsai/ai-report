
import React from "react";
import { Button } from "@/components/ui/button";
import { Edit3, GripVertical, TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

interface TechnicalAnalysisSectionProps {
  stockCode: string;
}

export const TechnicalAnalysisSection: React.FC<TechnicalAnalysisSectionProps> = ({ stockCode }) => (
  <div className="p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-red-50 to-green-50">
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
        <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
        <span>天地圖 - {stockCode} 技術分析</span>
      </h4>
      <Button variant="outline" size="sm" className="text-xs">
        <Edit3 className="h-3 w-3 mr-1" />
        編輯圖表
      </Button>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-3">
      <div className="flex items-center space-x-2">
        <TrendingUp className="h-4 w-4 text-red-600" />
        <span className="text-sm">天線：支撐位 $170.25</span>
      </div>
      <div className="flex items-center space-x-2">
        <TrendingDown className="h-4 w-4 text-green-600" />
        <span className="text-sm">地線：阻力位 $180.50</span>
      </div>
    </div>
    <div className="bg-white border rounded p-4 min-h-[200px] flex items-center justify-center">
      <div className="text-center text-gray-500">
        <BarChart3 className="h-12 w-12 mx-auto mb-2 text-gray-400" />
        <p className="text-sm">{stockCode} K線圖與天地線</p>
        <p className="text-xs text-gray-400 mt-1">當前價位：$175.85</p>
      </div>
    </div>
    <div className="mt-3 text-xs text-gray-600 bg-yellow-50 p-2 rounded">
      <strong>技術解讀：</strong>{stockCode} 目前股價位於天地線中間偏上區域，突破 $180.50 阻力位後有望挑戰新高，若跌破 $170.25 支撐位則需觀察回檔幅度。
    </div>
  </div>
);

