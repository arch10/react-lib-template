import React, {FC} from 'react';

import './Button.css';
import type {ButtonProps} from './Button.types';

const Button: FC<ButtonProps> = ({onClick, text, type}) => {
  return (
    <button type='button' className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
