import { FC } from 'react';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};
