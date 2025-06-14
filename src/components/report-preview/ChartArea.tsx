
import React from "react";
import { Card } from "@/components/ui/card";
import { BarChart3, Edit3, TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChartAreaProps {
  stockCode: string;
}

export const ChartArea: React.FC<ChartAreaProps> = ({ stockCode }) => (
  <Card className="p-8 h-full ml-2">
    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-gray-800">
      <BarChart3 className="h-5 w-5" />
      <span>🖼️ 圖表區</span>
    </h3>
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg p-4 bg-white">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-gray-700">{stockCode} 技術線圖</h4>
          <Button variant="outline" size="sm" className="text-xs">
            <Edit3 className="h-3 w-3 mr-1" />
            編輯
          </Button>
        </div>
        <div className="bg-gray-50 rounded p-6 text-center min-h-[150px] flex items-center justify-center">
          <div>
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm text-gray-600">RSI: 65.4</p>
            <p className="text-sm text-gray-600">MACD: 買進訊號</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-4 bg-white">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-gray-700">營收年增率圖</h4>
          <Button variant="outline" size="sm" className="text-xs">
            <Edit3 className="h-3 w-3 mr-1" />
            編輯
          </Button>
        </div>
        <div className="bg-gray-50 rounded p-6 text-center min-h-[150px] flex items-center justify-center">
          <div>
            <BarChart3 className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <p className="text-sm text-gray-600">Q4 2023: -2.8%</p>
            <p className="text-sm text-gray-600">Q1 2024: +4.9%</p>
          </div>
        </div>
      </div>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
        <Plus className="h-8 w-8 mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-500 mb-3">新增更多圖表</p>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
          <Plus className="h-4 w-4 mr-2" />
          新增圖表
        </Button>
      </div>
    </div>
  </Card>
);

