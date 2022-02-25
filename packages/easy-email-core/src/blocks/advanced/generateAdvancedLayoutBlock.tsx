import { BasicType } from '@core/constants';
import React from 'react';
import { Template } from '@core/components';
import MjmlBlock from '@core/components/MjmlBlock';

import { AdvancedBlock, generateAdvancedBlock } from './generateAdvancedBlock';
import { getPreviewClassName } from '@core/utils/getPreviewClassName';
import { classnames } from '@core/utils/classnames';
import { AdvancedType } from '@core';

export function generateAdvancedLayoutBlock<T extends AdvancedBlock>(option: {
  type: string;
  baseType: BasicType;
  validParentType: string[];
}) {
  return generateAdvancedBlock<T>({
    ...option,
    getContent: (params) => {
      const { data, idx, mode, context, dataSource, index } = params;
      const blockData = {
        ...data,
        type: option.baseType,
      };

      // Column 必须设置宽度
      if (data.type === AdvancedType.COLUMN) {
        data.attributes.width = data.attributes.width || '100%';
      }

      const previewClassName =
        mode === 'testing'
          ? classnames(index === 0 && getPreviewClassName(idx, data.type))
          : '';

      return (
        <MjmlBlock
          type={blockData.type}
          attributes={{
            ...blockData.attributes,
            'css-class': classnames(
              data.attributes['css-class'],
              previewClassName
            ),
          }}
          value={blockData.data.value}
        >
          <Template idx={idx}>{data.children}</Template>
        </MjmlBlock>
      );
    },
  });
}
