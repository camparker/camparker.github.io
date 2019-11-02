import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const PrimaryButton = styled(Button)({
  backgroundColor: '#f9ad55',
  '&:hover': {
    backgroundColor: '#55a2f9',
  },
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  width: '100vw',
  padding: '0 30px',
});

export default props => (
    <PrimaryButton>{props.text}</PrimaryButton>
)