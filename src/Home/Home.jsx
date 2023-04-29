import { Box } from '@mui/material';
import'../styles/home.css'
import { HomeSection6 } from './HomeSection6';
import { HomeSection7 } from './HomeSection7';
import { useTheme } from '@emotion/react';
import { HomeSection8 } from './HomeSection8';
import HomeSection1 from './HomeSection1';
const Home = () => {
    const theme =useTheme()

    return ( 
        <main className="Home ">
                <HomeSection6/>
                <Box sx={{bgcolor:theme.palette.main}}>
                    <HomeSection7/>
                    <HomeSection8/>
                </Box>
                

                <HomeSection1/>
        </main>
     );
}
 
export default Home;