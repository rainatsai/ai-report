import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { GripVertical, X, Edit3 } from 'lucide-react';

interface DraggableModuleProps {
  id: string;
  children: React.ReactNode;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  title: string;
}

export const DraggableModule: React.FC<DraggableModuleProps> = ({
  id,
  children,
  onDelete,
  onEdit,
  title
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group bg-white border border-gray-200 rounded-lg p-4 mb-4"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing"
          >
            <GripVertical className="h-4 w-4 text-gray-400" />
          </div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
        </div>
        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(id)}
            className="text-xs h-6 px-2"
          >
            <Edit3 className="h-3 w-3 mr-1" />
            編輯
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(id)}
            className="text-xs h-6 px-2 text-red-600 hover:text-red-700"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};