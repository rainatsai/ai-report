
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, FileText, Share2, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ReportPreviewProps {
  stockCode: string;
  reportStyle: string;
  language: string;
  isGenerating: boolean;
  showPreview: boolean;
}

export const ReportPreview: React.FC<ReportPreviewProps> = ({
  stockCode,
  reportStyle,
  language,
  isGenerating,
  showPreview
}) => {
  const { toast } = useToast();

  const texts = {
    'zh-CN': {
      title: '报告预览',
      noStock: '请先输入股票代码',
      generating: '正在生成报告...',
      downloadPDF: '下载PDF',
      downloadWord: '下载Word',
      share: '分享报告',
      success: '报告生成成功！',
      companyIntro: '公司介绍',
      financialSummary: '财务摘要',
      industryAnalysis: '产业分析',
      investmentHighlights: '投资亮点',
      riskWarning: '风险提示'
    },
    'zh-TW': {
      title: '報告預覽',
      noStock: '請先輸入股票代碼',
      generating: '正在生成報告...',
      downloadPDF: '下載PDF',
      downloadWord: '下載Word',
      share: '分享報告',
      success: '報告生成成功！',
      companyIntro: '公司介紹',
      financialSummary: '財務摘要',
      industryAnalysis: '產業分析',
      investmentHighlights: '投資亮點',
      riskWarning: '風險提示'
    },
    'en': {
      title: 'Report Preview',
      noStock: 'Please enter a stock symbol first',
      generating: 'Generating report...',
      downloadPDF: 'Download PDF',
      downloadWord: 'Download Word',
      share: 'Share Report',
      success: 'Report generated successfully!',
      companyIntro: 'Company Overview',
      financialSummary: 'Financial Summary',
      industryAnalysis: 'Industry Analysis',
      investmentHighlights: 'Investment Highlights',
      riskWarning: 'Risk Warning'
    }
  };

  const text = texts[language] || texts['zh-CN'];

  const handleDownload = (format: string) => {
    toast({
      title: text.success,
      description: `${format} ${text.downloadPDF.includes('PDF') ? 'PDF' : 'Word'} 文件已开始下载`,
      duration: 3000,
    });
  };

  if (!stockCode && !isGenerating && !showPreview) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 h-[400px] flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-16 w-16 text-blue-400 mx-auto mb-4 opacity-50" />
          <p className="text-blue-200 text-lg">{text.noStock}</p>
        </div>
      </div>
    );
  }

  if (isGenerating) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 h-[400px] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-16 w-16 text-blue-400 mx-auto mb-4 animate-spin" />
          <p className="text-blue-200 text-lg">{text.generating}</p>
          <div className="mt-4 w-64 bg-white/20 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Success Notification */}
      {showPreview && (
        <Card className="bg-green-500/20 border-green-400/50 p-4">
          <div className="flex items-center space-x-2 text-green-300">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">{text.success}</span>
          </div>
        </Card>
      )}

      {/* Report Preview */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
        <div className="p-6 border-b border-white/20">
          <h3 className="text-white font-semibold text-lg">{text.title}</h3>
          <p className="text-blue-200 mt-1">股票代码: {stockCode}</p>
        </div>

        <div className="p-6 space-y-4">
          {/* Report Sections */}
          <div className="space-y-3">
            {[
              text.companyIntro,
              text.financialSummary,
              text.industryAnalysis,
              text.investmentHighlights,
              text.riskWarning
            ].map((section, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3">
                <h4 className="text-white font-medium mb-2">{section}</h4>
                <div className="bg-white/10 rounded h-16 flex items-center justify-center">
                  <span className="text-blue-200 text-sm">内容生成中...</span>
                </div>
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              onClick={() => handleDownload('PDF')}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              {text.downloadPDF}
            </Button>
            <Button
              onClick={() => handleDownload('Word')}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              {text.downloadWord}
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
