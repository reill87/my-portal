import Link, { LinkProps } from 'next/link';
import Button, { buttonProps } from './Button';
import { ReactNode } from 'react';

function LinkButton({ href, ...restProps }: LinkProps & buttonProps) {
  return (
    <>
      <Link href={href}>
        <Button {...restProps}></Button>
      </Link>
    </>
  );
}

export default LinkButton;
