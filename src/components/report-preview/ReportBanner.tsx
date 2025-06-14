
import React from "react";
import { Button } from "@/components/ui/button";
import { Edit3, GripVertical } from "lucide-react";

interface ReportBannerProps {
  stockCode: string;
  onEdit?: () => void;
}
/**
 * Banner 區塊支援拖曳與編輯
 */
export const ReportBanner: React.FC<ReportBannerProps> = ({
  stockCode, onEdit
}) => (
  <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-md px-3 py-2 shadow group mb-3 text-[0.89rem] flex items-start gap-2">
    {/* 拖曳 icon */}
    <div className="flex items-center pt-1 pr-2 cursor-move select-none">
      <GripVertical className="h-4 w-4 text-blue-400" />
    </div>
    {/* Banner內容 */}
    <div className="flex-1">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=80&h=80&fit=crop&crop=face" 
            alt="東聯未來證券"
            className="w-9 h-9 rounded-lg bg-white p-0.5"
          />
          <div>
            <h2 className="text-base font-bold leading-tight">東聯未來證券</h2>
            <p className="text-blue-200 text-xs leading-tight">個股分析報告</p>
          </div>
        </div>
        <div className="text-right min-w-[90px]">
          <div className="text-base font-bold">{stockCode}</div>
          <div className="text-xs">Apple Inc.</div>
          <div className="text-green-300 text-xs">$175.85 (+2.45%)</div>
        </div>
      </div>
    </div>
    {/* 編輯按鈕：hover 時才顯示 */}
    <Button 
      variant="outline" 
      size="sm"
      onClick={onEdit}
      className="absolute top-1.5 right-2 bg-white/10 border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 px-2 py-1 text-xs"
      style={{ fontSize: "12px", height: "1.5rem", minWidth: 0 }}
    >
      <Edit3 className="h-3 w-3 mr-1" />
      編輯
    </Button>
  </div>
);
