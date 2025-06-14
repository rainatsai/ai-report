
import React from "react";
import { GripVertical } from "lucide-react";

export const RiskWarningSection: React.FC = () => (
  <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-semibold flex items-center space-x-2 text-orange-800">
        <GripVertical className="h-4 w-4 text-orange-400 cursor-move" />
        <span>風險提示</span>
      </h4>
    </div>
    <p className="text-orange-700 text-sm">
      本報告僅供參考，不構成投資建議。投資有風險，過去績效不代表未来表現。
      投資人應審慎評估投資標的與本身風險承受能力。本分析基於公開資訊，
      東聯未來證券不保證資訊之正確性與完整性。
    </p>
  </div>
);

