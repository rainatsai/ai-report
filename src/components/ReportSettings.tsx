
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FileText, Briefcase, BarChart, Loader2 } from 'lucide-react';

interface ReportSettingsProps {
  reportStyle: string;
  onReportStyleChange: (style: string) => void;
  language: string;
  onGenerateReport: () => void;
  isGenerating: boolean;
  disabled: boolean;
}

export const ReportSettings: React.FC<ReportSettingsProps> = ({
  reportStyle,
  onReportStyleChange,
  language,
  onGenerateReport,
  isGenerating,
  disabled
}) => {
  const texts = {
    'zh-CN': {
      title: '报告设置',
      styleTitle: '报告风格',
      summary: '摘要型',
      summaryDesc: '简洁明了，重点突出',
      detailed: '详细型',
      detailedDesc: '全面分析，深度解读',
      institutional: '机构风格',
      institutionalDesc: '专业格式，投资建议',
      generateBtn: '生成分析报告',
      generating: '正在生成报告...'
    },
    'zh-TW': {
      title: '報告設置',
      styleTitle: '報告風格',
      summary: '摘要型',
      summaryDesc: '簡潔明了，重點突出',
      detailed: '詳細型',
      detailedDesc: '全面分析，深度解讀',
      institutional: '機構風格',
      institutionalDesc: '專業格式，投資建議',
      generateBtn: '生成分析報告',
      generating: '正在生成報告...'
    },
    'en': {
      title: 'Report Settings',
      styleTitle: 'Report Style',
      summary: 'Summary',
      summaryDesc: 'Concise and focused',
      detailed: 'Detailed',
      detailedDesc: 'Comprehensive analysis',
      institutional: 'Institutional',
      institutionalDesc: 'Professional format',
      generateBtn: 'Generate Report',
      generating: 'Generating Report...'
    }
  };

  const text = texts[language] || texts['zh-CN'];

  const reportStyles = [
    {
      id: 'summary',
      label: text.summary,
      description: text.summaryDesc,
      icon: FileText
    },
    {
      id: 'detailed',
      label: text.detailed,
      description: text.detailedDesc,
      icon: BarChart
    },
    {
      id: 'institutional',
      label: text.institutional,
      description: text.institutionalDesc,
      icon: Briefcase
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <Label className="text-white font-semibold text-lg mb-4 block">{text.title}</Label>
      
      <div className="space-y-4 mb-6">
        <Label className="text-blue-200 font-medium">{text.styleTitle}</Label>
        <RadioGroup value={reportStyle} onValueChange={onReportStyleChange}>
          {reportStyles.map((style) => {
            const IconComponent = style.icon;
            return (
              <div key={style.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <RadioGroupItem 
                  value={style.id} 
                  id={style.id}
                  className="border-blue-300 text-blue-500 mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4 text-blue-400" />
                    <Label htmlFor={style.id} className="text-white font-medium cursor-pointer">
                      {style.label}
                    </Label>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">{style.description}</p>
                </div>
              </div>
            );
          })}
        </RadioGroup>
      </div>

      <Button
        onClick={onGenerateReport}
        disabled={disabled || isGenerating}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {text.generating}
          </>
        ) : (
          text.generateBtn
        )}
      </Button>
    </div>
  );
};
