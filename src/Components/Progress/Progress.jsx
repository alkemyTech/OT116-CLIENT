import React from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';

const Progress = ({
  isLoading = true,
  circular = false,
  color = 'primary',
  variant = 'indeterminate',
  value = 0,
  size = 50,
  maxWidth = 'auto',
}) => {
  const validValue = value > 100 ? 100 : value;

  if (!isLoading) return null;

  return (
    <div id="progress" style={{ maxWidth }}>
      {circular ? (
        <CircularProgress
          color={color}
          variant={variant}
          value={validValue}
          size={size}
        />
      ) : (
        <LinearProgress
          color={color}
          variant={variant}
          value={validValue}
          size={size}
        />
      )}
    </div>
  );
};

export default Progress;
