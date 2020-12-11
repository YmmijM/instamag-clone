import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import appContext from '../AppContext';
import option2x2 from '../assets/img/2x2.jpg';
import option2x1 from '../assets/img/2x1.jpg';
import clsx from 'clsx';
import { GridOption } from '../types';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 120,
    background: '#59647b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  optionList: {
    padding: theme.spacing(2),
    '&>*:not(:last-child)': {
      marginRight: theme.spacing(4),
    },
  },
  option: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    '&.active': {
      '& img': {
        border: '4px solid #133277',
      },
    },
    '& img': {
      height: 50,
      borderRadius: 6,
      border: '4px solid transparent',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { gridOption, setGridOption } = useContext(appContext);

  return (
    <Paper className={classes.root} elevation={6}>
      <Grid container justify="center" className={classes.optionList}>
        <Grid
          item
          className={clsx(classes.option, {
            active: gridOption === GridOption.OPTION_2_2,
          })}
          onClick={() => setGridOption(GridOption.OPTION_2_2)}
        >
          <img src={option2x2} alt="2x2" />
          <span>4 x 4</span>
        </Grid>
        <Grid
          item
          className={clsx(classes.option, {
            active: gridOption === GridOption.OPTION_2_1,
          })}
          onClick={() => setGridOption(GridOption.OPTION_2_1)}
        >
          <img src={option2x1} alt="2x2" />
          <span>2 x 1</span>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
