import { cn } from '@/utils/shadcn';
import React from 'react';

export default function DashBoardLayout({ children, className, ...props }) {
  const childrenArray = (Array.isArray(children) ? children : [children]).map((child, index) =>
    React.cloneElement(child, { style: { marginBottom: 12 } })
  );

  return (
    <div className={cn('gbif-dashboardLayout g-grid lg:g-grid-cols-2 g-gap-2', className)}>
      <div>
        {childrenArray
          .filter((x, i) => i % 2 === 0)
          .map((x, i) => (
            <React.Fragment key={i}>{x}</React.Fragment>
          ))}
      </div>
      <div>
        {childrenArray
          .filter((x, i) => i % 2 !== 0)
          .map((x, i) => (
            <React.Fragment key={i}>{x}</React.Fragment>
          ))}
      </div>
    </div>
  );
}
