import { Text as TextImpl } from '@react-three/drei';
import { useReflow } from '@react-three/flex';
import React from 'react';
import arcadeWoff from "/ARCADE.woff";

export default function TextCustom({ bold = false, anchorX = 'left', anchorY = 'top', textAlign = 'left', ...props }) {
  const reflow = useReflow();
  const font = bold ? arcadeWoff : arcadeWoff;


  return (
    <TextImpl
      anchorX={anchorX}
      anchorY={anchorY}
      textAlign={textAlign}
      font={font}
      onSync={reflow}

      {...props}
    />
  );
}
