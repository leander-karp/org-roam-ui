import React from 'react';
import { styled } from '@linaria/react';

const SwitchContainer = styled.label`
  display: inline-block;
  height: 20px;
  position: relative;
  width: 34px;

  & input {
    visibility: hidden;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 2px;
    content: '';
    height: 16px;
    left: 2px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(14px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default function Switch({
  id,
  description,
  checked,
  onChange,
}: {
  id: string;
  description: string;
  checked: boolean;
  onChange: any;
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label htmlFor={id}>{description}</label>
      <SwitchContainer htmlFor={id}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <span className="slider round"></span>
      </SwitchContainer>
    </div>
  );
}
