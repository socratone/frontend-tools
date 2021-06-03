import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

type SnackBarProps = {
  children: string;
  open: boolean;
};

export default function CustomizedSnackbars({ children, open }: SnackBarProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={open}>
        <StyledAlert severity="success">{children}</StyledAlert>
      </Snackbar>
    </div>
  );
}

const StyledAlert = styled(Alert)`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
