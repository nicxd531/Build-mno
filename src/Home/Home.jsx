import { Box } from '@mui/material';
import'../styles/home.css'
import { HomeSection6 } from './HomeSection6';
import { HomeSection7 } from './HomeSection7';
import { useTheme } from '@emotion/react';
import { HomeSection8 } from './HomeSection8';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';
import HomeSection3 from './HomeSection3';
import HomeSection4 from './HomeSection4';
import HomeSection5 from './HomeSection5';
const Home = () => {

    // this section  coantains the combination of all the sections that makes up home
    const theme =useTheme()

    return ( 
        <main className="Home ">
            <HomeSection1/>
            <HomeSection2/>
            <HomeSection3/>
            <HomeSection4/>
            <HomeSection5/>
            <HomeSection6/>
            <Box sx={{bgcolor:theme.palette.main}}>
                <HomeSection7/>
                <HomeSection8/>
            </Box>
        </main>
     );
}
 
export default Home;