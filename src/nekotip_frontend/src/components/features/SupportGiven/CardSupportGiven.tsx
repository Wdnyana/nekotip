import React from 'react';

import { CardProps } from '@/types';

const CardSupportGiven = ({ title, subtitle, value }: CardProps) => {
  return (
    <div className="rounded-lg bg-mainAccent p-4 text-white shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-base">{subtitle}</p>
    </div>
  );
};

export default CardSupportGiven;
