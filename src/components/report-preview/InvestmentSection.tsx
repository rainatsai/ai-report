
import React from "react";
import { GripVertical } from "lucide-react";

interface InvestmentSectionProps {
  stockCode: string;
  investmentView: string;
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
}) => (
  <div className="p-4 border border-gray-200 rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold flex items-center space-x-2 text-gray-800">
        <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
        <span>{stockCode} 投資分析報告</span>
      </h3>
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
      <p>
        <strong>投資亮點：</strong>
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>iPhone 15 系列銷售表現強勁，特別是 Pro 系列需求旺盛</li>
        <li>服務業務持續成長，App Store 與 iCloud 收入穩定增長</li>
        <li>Vision Pro 產品線為未來成長帶來新動能</li>
        <li>股票回購計畫持續進行，每股盈餘獲得提升</li>
      </ul>
      <p>
        <strong>風險因素：</strong>
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>中國市場競爭加劇，華為回歸影響市占率</li>
        <li>全球經濟不確定性可能影響消費性電子需求</li>
        <li>供應鏈成本上升壓縮毛利率</li>
      </ul>
    </div>
  </div>
);

