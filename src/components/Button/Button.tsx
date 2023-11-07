import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface BtnProps {
  children: ReactNode;
  onClick: () => void;
}

function Btn(props: BtnProps) {
  const { children, ...rest } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      className="h-4-0 !text-1-4 !leading-2-0"
      fullWidth
      {...rest}
    >
      {children}
    </Button>
  );
}

export default Btn;
