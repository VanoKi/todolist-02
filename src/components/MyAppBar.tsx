import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {MenuBtn} from "./MenuBtn.tsx";
import {Switch, useTheme} from "@mui/material";

export const MyAppBar = () => {
  const theme = useTheme()
  return (
    <AppBar position="static" style={{marginBottom: '40px'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <MenuBtn color="inherit" background={theme.palette.primary.light}>Login</MenuBtn>
        <MenuBtn color="inherit">LogOut</MenuBtn>
        <MenuBtn color="inherit">FAQ</MenuBtn>
        <Switch color={'default'}/>
      </Toolbar>
    </AppBar>
  );
};