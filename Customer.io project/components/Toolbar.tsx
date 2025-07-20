"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Bold, 
  Italic, 
  Underline, 
  Link, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Code,
  Image,
  Palette,
  Type,
  Undo,
  Redo
} from 'lucide-react';

interface ToolbarProps {
  onFormatting: (format: string) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onFormatting }) => {
  const toolbarSections = [
    {
      name: 'History',
      items: [
        { icon: Undo, action: 'undo', tooltip: 'Undo' },
        { icon: Redo, action: 'redo', tooltip: 'Redo' },
      ]
    },
    {
      name: 'Formatting',
      items: [
        { icon: Bold, action: 'bold', tooltip: 'Bold' },
        { icon: Italic, action: 'italic', tooltip: 'Italic' },
        { icon: Underline, action: 'underline', tooltip: 'Underline' },
        { icon: Type, action: 'fontSize', tooltip: 'Font Size' },
        { icon: Palette, action: 'color', tooltip: 'Text Color' },
      ]
    },
    {
      name: 'Alignment',
      items: [
        { icon: AlignLeft, action: 'alignLeft', tooltip: 'Align Left' },
        { icon: AlignCenter, action: 'alignCenter', tooltip: 'Align Center' },
        { icon: AlignRight, action: 'alignRight', tooltip: 'Align Right' },
      ]
    },
    {
      name: 'Lists',
      items: [
        { icon: List, action: 'bulletList', tooltip: 'Bullet List' },
        { icon: ListOrdered, action: 'numberList', tooltip: 'Numbered List' },
      ]
    },
    {
      name: 'Insert',
      items: [
        { icon: Link, action: 'link', tooltip: 'Insert Link' },
        { icon: Image, action: 'image', tooltip: 'Insert Image' },
        { icon: Quote, action: 'quote', tooltip: 'Quote' },
        { icon: Code, action: 'code', tooltip: 'Code Block' },
      ]
    }
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex flex-wrap items-center space-x-1">
        {toolbarSections.map((section, sectionIndex) => (
          <React.Fragment key={section.name}>
            <div className="flex items-center space-x-1">
              {section.items.map((item) => (
                <Button
                  key={item.action}
                  variant="ghost"
                  size="sm"
                  onClick={() => onFormatting(item.action)}
                  className="h-8 w-8 p-0 hover:bg-gray-100"
                  title={item.tooltip}
                >
                  <item.icon size={16} />
                </Button>
              ))}
            </div>
            {sectionIndex < toolbarSections.length - 1 && (
              <Separator orientation="vertical" className="h-6 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};