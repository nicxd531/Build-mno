import { Box, Typography } from '@mui/material'
import React from 'react'
import SimpleAccordion from '../Components/Accordion'
import { useTheme } from '@emotion/react'
import home_img_8 from '/images/home_img_8.svg'

export const HomeSection8 = () => {
  const theme = useTheme()
  return (
    <Box sx={{width:'80%',margin:'0 auto',padding:'45px 0',justifyContent:'space-between',display:'flex',gap:'50px',flexDirection:{xs:'column',md:'row'}}}>
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px',justifyContent:'center',width:{xs:'100%',md:'471.02px'}}}>
            <Typography sx={{fontWeight:700,fontSize:'76.88px',lineHeight:'80px',color:theme.palette.secondary.main}}>FAQ</Typography>
            <SimpleAccordion/>
            
        </Box>
        <Box >
        <img className='illustrated_img' src={home_img_8}/>
        </Box>
    </Box>
  )
}
