import React from 'react';
import { useOutlet } from 'react-router-dom';

export interface DoctorLayoutProps {}

export const DoctorLayout: React.FC<DoctorLayoutProps> = props => {
  const element = useOutlet();
  // TODO
  return (
    <div>
      <div>DoctorLayout</div>
      {element}
    </div>
  );
};
