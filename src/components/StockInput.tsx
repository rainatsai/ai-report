
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, TrendingUp } from 'lucide-react';

interface StockInputProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
}

export const StockInput: React.FC<StockInputProps> = ({ value, onChange, language }) => {
  const texts = {
    'zh-CN': {
      title: '股票代码输入',
      placeholder: '请输入股票代码（如：AAPL, TSLA, 0700.HK）',
      examples: '热门股票: AAPL, MSFT, GOOGL, TSLA, NVDA'
    },
    'zh-TW': {
      title: '股票代碼輸入',
      placeholder: '請輸入股票代碼（如：AAPL, TSLA, 0700.HK）',
      examples: '熱門股票: AAPL, MSFT, GOOGL, TSLA, NVDA'
    },
    'en': {
      title: 'Stock Code Input',
      placeholder: 'Enter stock symbol (e.g., AAPL, TSLA, 0700.HK)',
      examples: 'Popular stocks: AAPL, MSFT, GOOGL, TSLA, NVDA'
    }
  };

  const text = texts[language] || texts['zh-CN'];

  const popularStocks = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'NVDA', 'META'];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <div className="flex items-center space-x-2 mb-4">
        <Search className="h-5 w-5 text-blue-400" />
        <Label className="text-white font-semibold text-lg">{text.title}</Label>
      </div>
      
      <div className="relative">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value.toUpperCase())}
          placeholder={text.placeholder}
          className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 text-lg py-3 pr-12"
        />
        <TrendingUp className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
      </div>

      <div className="mt-4">
        <p className="text-blue-200 text-sm mb-2">{text.examples}</p>
        <div className="flex flex-wrap gap-2">
          {popularStocks.map((stock) => (
            <button
              key={stock}
              onClick={() => onChange(stock)}
              className="px-3 py-1 bg-blue-500/30 hover:bg-blue-500/50 text-blue-100 rounded-full text-sm transition-colors"
            >
              {stock}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
