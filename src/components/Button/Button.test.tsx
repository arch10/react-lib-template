import React from 'react';
import {create} from 'react-test-renderer';
import Button from './index';

describe('Button', () => {
  it('should render properly', () => {
    const click = jest.fn();
    const renderer = create(
      <Button text='Button' type='primary' onClick={click} />
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
