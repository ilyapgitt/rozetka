import './App.css'
import { Box, Grid, Separator } from '@radix-ui/themes'
import { Description } from './components/Description'
import { Carousel } from './components/Carousel'
import { Features } from './components/Features'
import { Reviews } from './components/Reviews'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    const handleScroll = () => {
      const column1 = document.getElementById('column1');
      const column2 = document.querySelector('.column2');
      if (!column1 || !column2) return;

      const column1Height = column1.getBoundingClientRect().height;
      const column2Height = column2.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const maxScroll = column2Height - windowHeight;

      if (window.scrollY < maxScroll) {
        const translateY = Math.min(window.scrollY, column1Height - windowHeight);
        column1.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='text-left'>
      <Separator size='4' orientation='horizontal' />
      <Grid columns="2" gap="5" width="50% 50%">
        <Box id='column1'>
          <Carousel />
        </Box>
        <Box className='column2'>
          <Description />
        </Box>
      </Grid>
      <Grid columns='2' gap='9' width='50% 50%' className='my-16'>
        <Features />
        <Reviews />
      </Grid>
    </div>
  )
}

export default App
