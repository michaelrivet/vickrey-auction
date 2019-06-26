import * as React from 'react';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

type LinkProps = {
  href?: string,
  children: React.ReactNode,
  className?: string | undefined,
}

const Link = (props: LinkProps) => {
  return <Typography><MuiLink href={props.href} underline="none" className={props.className}>{props.children}</MuiLink></Typography>
}

export { Link }