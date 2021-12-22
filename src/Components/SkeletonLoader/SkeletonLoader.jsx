import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SkeletonLoader = function ({
  loading, variant, width, height, animation, bgcolor, children,
}) {
  return (
    <div>
      {loading
        ? (
          <Skeleton
            sx={{ bgcolor }}
            variant={variant}
            width={width}
            height={height}
            animation={animation}
          >
            {children}
          </Skeleton>
        )
        : children }
    </div>
  );
};

export default SkeletonLoader;
