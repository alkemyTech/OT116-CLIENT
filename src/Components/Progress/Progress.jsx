import React from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';

const Progress = ({
  isLoading = true,
  circular = false,
  color = 'primary',
  variant = 'indeterminate',
  value = 100,
  size = 50,
}) => {
  if (!isLoading) return null;

  return (
    circular ? (
      <CircularProgress
        color={color}
        variant={variant}
        value={value}
        size={size}
      />
    ) : (
      <LinearProgress
        color={color}
        variant={variant}
        value={value}
        size={size}
      />
    )
  );
};

export default Progress;
