import * as React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & Omit<MuiButtonProps, 'variant'> & {
  variant: 'primary' | 'secondary',
}

const Button = (props: ButtonProps) => {
  const muiVariant = props.variant === 'primary' ? 'contained' : 'outlined';

  const { variant, color, children, disableRipple = true, ...baseProps} = props;

  return (
    <MuiButton 
      disableRipple={disableRipple} 
      variant={muiVariant} 
      color={props.color || 'primary'} 
      {...baseProps}
    >
      {props.children}
    </MuiButton>)
}

export { Button }