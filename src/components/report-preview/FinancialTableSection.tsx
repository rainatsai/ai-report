
import React from "react";
import { GripVertical, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinancialTableSectionProps {
  onEdit?: () => void;
}

export const FinancialTableSection: React.FC<FinancialTableSectionProps> = ({ onEdit }) => (
  <div className="relative p-4 border border-gray-200 rounded-lg group">
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold flex items-center space-x-2 text-gray-800">
        <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
        <span>財務數據表格</span>
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
    <div className="bg-white border rounded overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left">項目</th>
            <th className="px-3 py-2 text-right">2023</th>
            <th className="px-3 py-2 text-right">2022</th>
            <th className="px-3 py-2 text-right">2021</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-3 py-2">營收 (億美元)</td>
            <td className="px-3 py-2 text-right">3,832</td>
            <td className="px-3 py-2 text-right">3,943</td>
            <td className="px-3 py-2 text-right">3,658</td>
          </tr>
          <tr className="border-t">
            <td className="px-3 py-2">淨利 (億美元)</td>
            <td className="px-3 py-2 text-right">970</td>
            <td className="px-3 py-2 text-right">998</td>
            <td className="px-3 py-2 text-right">946</td>
          </tr>
          <tr className="border-t">
            <td className="px-3 py-2">EPS (美元)</td>
            <td className="px-3 py-2 text-right">6.16</td>
            <td className="px-3 py-2 text-right">6.11</td>
            <td className="px-3 py-2 text-right">5.67</td>
          </tr>
          <tr className="border-t">
            <td className="px-3 py-2">毛利率 (%)</td>
            <td className="px-3 py-2 text-right">44.1</td>
            <td className="px-3 py-2 text-right">43.3</td>
            <td className="px-3 py-2 text-right">41.8</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

