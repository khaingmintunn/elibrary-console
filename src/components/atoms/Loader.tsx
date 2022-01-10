import { Box, Theme, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3),
    width: '100%'
  },
  progress: {
    textAlign: 'center'
  }
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.box}
      >
        <CircularProgress
          className={classes.progress}
          size={40}
        />
      </Box>
    </>
  );
};

export default Loader;
