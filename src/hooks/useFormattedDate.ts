import { useMemo } from 'react';

const formatDate = (lastUpdatedAt: string | undefined) => {
  if (!lastUpdatedAt) return '';

  const date = new Date(lastUpdatedAt);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const useFormattedDate = (lastUpdatedAt: string | undefined) =>
  useMemo(() => formatDate(lastUpdatedAt), [lastUpdatedAt]);
