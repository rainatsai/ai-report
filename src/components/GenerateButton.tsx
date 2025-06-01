
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Loader2 } from 'lucide-react';

interface GenerateButtonProps {
  onClick: () => void;
  isGenerating: boolean;
  disabled: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ 
  onClick, 
  isGenerating, 
  disabled 
}) => {
  return (
    <div className="flex justify-center pt-4">
      <Button
        onClick={onClick}
        disabled={disabled || isGenerating}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-12 text-lg rounded-xl shadow-lg"
        size="lg"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            正在產生報告...
          </>
        ) : (
          <>
            <Play className="mr-2 h-5 w-5" />
            產生報告 ▶️
          </>
        )}
      </Button>
    </div>
  );
};
