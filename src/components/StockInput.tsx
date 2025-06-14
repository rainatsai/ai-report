
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StockInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const StockInput: React.FC<StockInputProps> = ({ value, onChange }) => {
  const [selectedMarket, setSelectedMarket] = useState('us');

  return (
    <div>
      <Label className="text-gray-700 font-medium mb-3 block">
        🔍 請輸入股票代碼 / 公司名稱
      </Label>
      <Tabs
        value={selectedMarket}
        onValueChange={setSelectedMarket}
        className="w-full mb-4"
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="tw">台</TabsTrigger>
          <TabsTrigger value="us">美</TabsTrigger>
          <TabsTrigger value="cn">陸</TabsTrigger>
          <TabsTrigger value="hk">港</TabsTrigger>
          <TabsTrigger value="jp">日</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="relative">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value.toUpperCase())}
          placeholder="例如：AAPL, TSLA, 2330.TW"
          className="pl-10 h-12 text-lg"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};
