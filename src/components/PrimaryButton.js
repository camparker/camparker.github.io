import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const PrimaryButton = styled(Button)({
  backgroundColor: '#adffe1',
  '&:hover': {
    backgroundColor: '#136c54',
    color: 'white',
  },
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'black',
  height: 48,
  padding: '0 30px',
});

export default props => (
    <PrimaryButton>{props.text}</PrimaryButton>
)
