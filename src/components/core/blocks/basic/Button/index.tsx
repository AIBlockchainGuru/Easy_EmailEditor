import { Panel } from './Panel';
import { Editor } from './Editor';
import { createInstance } from './createInstance';
import { IBlockData } from '@/typings';
import { BasicType } from '@/constants';
import { CSSProperties } from 'react';
export type IButton = IBlockData<{
  'align'?: string;
  'color'?: string;
  'background-color'?: string;
  'container-background-color'?: string;
  'border'?: string;
  'border-radius'?: string;
  'href'?: string;
  'rel'?: string;
  'target'?: string;
  'title'?: string;
  'padding'?: string;
  'inner-padding'?: string;
  'text-align'?: CSSProperties['textAlign'];
  'vertical-align'?: 'middle' | 'top' | 'bottom';
  'width'?: string;
  'font-family'?: string;
  'font-size'?: string;
  'font-style'?: string;
  'font-weight'?: CSSProperties['fontWeight'];
  'line-height'?: string | number;
  'letter-spacing'?: string;
  'height'?: string;
  'text-decoration'?: string;
  'text-transform'?: CSSProperties['textTransform'];
}, { content: string; }>;

export const Button = {
  name: 'button',
  type: BasicType.BUTTON,
  Editor,
  Panel,
  createInstance,
  validChildrenType: [
    BasicType.TEXT,
  ],
};
