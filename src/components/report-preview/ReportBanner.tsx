
import React from "react";
import { Button } from "@/components/ui/button";
import { Edit3 } from "lucide-react";

interface ReportBannerProps {
  stockCode: string;
}

export const ReportBanner: React.FC<ReportBannerProps> = ({ stockCode }) => (
  <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-md p-3 shadow group mb-4 text-[0.93rem] relative">
    <Button 
      variant="outline" 
      size="sm" 
      className="absolute top-2 right-2 bg-white/10 border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 px-2 py-1 text-xs"
      style={{ fontSize: "12px", height: "1.6rem", minWidth: 0 }}
    >
      <Edit3 className="h-3 w-3 mr-1" />
      編輯
    </Button>
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center space-x-2">
        <img 
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=80&h=80&fit=crop&crop=face" 
          alt="東聯未來證券" 
          className="w-10 h-10 rounded-lg bg-white p-1"
        />
        <div>
          <h2 className="text-base font-bold leading-tight">東聯未來證券</h2>
          <p className="text-blue-200 text-sm leading-tight">個股分析報告</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold">{stockCode}</div>
        <div className="text-xs">Apple Inc.</div>
        <div className="text-green-300 text-xs">$175.85 (+2.45%)</div>
      </div>
    </div>
  </div>
);

