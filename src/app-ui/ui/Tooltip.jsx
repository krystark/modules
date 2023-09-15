import React from 'react';

export default function Tooltip({ children, content }) {
  return (
    <div className="tooltip">
      {children}

      <div className="tooltip--content">
        {content}
      </div>
    </div>
  );
}
