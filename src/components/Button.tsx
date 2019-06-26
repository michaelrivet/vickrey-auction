import * as React from 'react';
import MuiButton from '@material-ui/core/Button';

type ButtonProps = {
  variant: 'primary' | 'secondary',
  children: React.ReactElement | string | number,
  className?: string | undefined,
  disabled?: boolean,
}

const Button = (props: ButtonProps) => {
  const muiVariant = props.variant === 'primary' ? 'contained' : 'outlined';

  return <MuiButton disableRipple variant={muiVariant} color="primary" className={props.className} disabled={props.disabled}>{props.children}</MuiButton>
}

export { Button }