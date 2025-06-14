
import React from "react";
import { GripVertical, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RiskWarningSectionProps {
  onEdit?: () => void;
}

export const RiskWarningSection: React.FC<RiskWarningSectionProps> = ({ onEdit }) => (
  <div className="relative p-4 border border-orange-200 bg-orange-50 rounded-lg group">
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-semibold flex items-center space-x-2 text-orange-800">
        <GripVertical className="h-4 w-4 text-orange-400 cursor-move" />
        <span>風險提示</span>
      </h4>
      <Button
        variant="outline"
        size="sm"
        onClick={onEdit}
        className="text-xs opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 bg-white/80 border-orange-200 text-orange-800 hover:bg-white"
        style={{ fontSize: "12px", height: "1.5rem", minWidth: 0 }}
      >
        <Edit3 className="h-3 w-3 mr-1" />
        編輯
      </Button>
    </div>
    <p className="text-orange-700 text-sm">
      本報告僅供參考，不構成投資建議。投資有風險，過去績效不代表未来表現。
      投資人應審慎評估投資標的與本身風險承受能力。本分析基於公開資訊，
      東聯未來證券不保證資訊之正確性與完整性。
    </p>
  </div>
);

