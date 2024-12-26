import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Tushar's Portfolio
        </Typography>
        {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map(
          (item) => (
            <Button key={item} color="inherit" href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          )
        )}
      </Toolbar>
    </AppBar>
  );
}
