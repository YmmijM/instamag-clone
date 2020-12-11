import Footer from './Footer';
import MainCanvas from './MainCanvas';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
}));

const MainSection: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainCanvas />
      <Footer />
    </div>
  );
};

export default MainSection;
