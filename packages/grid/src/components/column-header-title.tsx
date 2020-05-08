import React, { useEffect, useRef, useState } from 'react';
import { isOverflown } from '../utils';
import { Tooltip } from '@material-ui/core';

// eslint-disable-next-line react/display-name
const ColumnHeaderInnerTitle = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const { label, className, ...rest } = props;

  return (
    <div ref={ref} className={'title ' + className} {...rest} role={'column-header-title'}>
      {label}
    </div>
  );
});

export interface ColumnHeaderTitleProps {
  label: string;
  columnWidth: number;
  description?: string;
}
//No React.memo here as if we display the sort icon, we need to recalculate the isOver
export const ColumnHeaderTitle: React.FC<ColumnHeaderTitleProps> = ({ label, description, columnWidth }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [tooltipText, setTooltip] = useState('');

  useEffect(() => {
    if (!description && titleRef && titleRef.current) {
      const isOver = isOverflown(titleRef.current);
      if (isOver) {
        setTooltip(label);
      } else {
        setTooltip('');
      }
    }
  }, [titleRef, columnWidth]);

  return (
    <Tooltip title={description || tooltipText} innerRef={titleRef}>
      <ColumnHeaderInnerTitle label={label} />
    </Tooltip>
  );
};
ColumnHeaderTitle.displayName = 'ColumnHeaderTitle';
