import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { MainSection } from './components';
import { AppContextProvider } from './AppContext';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Instamag
            </Typography>
          </Toolbar>
        </AppBar>
        <MainSection />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
