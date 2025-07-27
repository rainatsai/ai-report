
import React from "react";
import { Button } from "@/components/ui/button";
import { GripVertical, Edit3 } from "lucide-react";

interface InvestmentSectionProps {
  stockCode: string;
  investmentView: string;
  onEdit?: () => void;
}

function getInvestmentViewText(view: string) {
  switch (view) {
    case "bullish":
      return "看多";
    case "bearish":
      return "看空";
    case "neutral":
      return "持平";
    default:
      return "持平";
  }
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({
  stockCode,
  investmentView,
  onEdit,
}) => (
  <div className="relative p-4 border border-gray-200 rounded-lg group">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold flex items-center space-x-2 text-gray-800">
        <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
        <span>{stockCode} 投資分析報告</span>
      </h3>
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
    <div className="mb-3">
      <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 mr-2">
        投資觀點：{getInvestmentViewText(investmentView)}
      </span>
      <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
        目標價：$190
      </span>
    </div>
    <div className="text-gray-600 leading-relaxed space-y-3">
      <p className="text-gray-700 leading-relaxed">
        近期 Apple (AAPL) 股價表現穩健，受惠於 iPhone 15 Pro 系列的熱銷與高階產品組合優化，市場需求強勁帶動整體營收提升。App Store 及雲端服務收入持續成長，也為其穩定的現金流帶來支撐。此外，Vision Pro 雖仍處於早期階段，但象徵 Apple 在空間運算領域的技術佈局，有望成為中長期的新成長動能。儘管中國市場銷售略受壓抑，但整體基本面依然穩健，短期內仍具吸引力。
      </p>
    </div>
  </div>
);

