import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { LuSquareArrowUp } from "react-icons/lu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        elevation={0}
        position="sticky"
        className={`px-[9%] font-ubuntu ${scrolled ? 'sticky' : 'absolute pt-[26px]'}`}
        sx={{
          backgroundColor: scrolled ? '#DC143C' : 'transparent',
          transition: 'background-color 1s ease',
        }}
      >
        <Toolbar>
          <Typography className='text-[24px] md:text-[38px] font-[700]' variant="h6" sx={{ flexGrow: 1 }}>
            Tushar&apos;s Portfolio
          </Typography>
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Button className='hidden font-bold lg:block' key={item} color="inherit" href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* Scroll-Up Button (optional, if needed) */}
      {showScrollBtn && (
        <Box
          className="bg-crimson rounded-xl text-center my-auto "
          onClick={() => window.scrollTo(0, 0)}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          <LuSquareArrowUp size={32} />
        </Box>
      )}
    </>
  );
}
