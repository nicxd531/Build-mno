import '../styles/home.css'
import React from 'react'
// import {Typogra}
import home_img_6 from '/images/home_img_6.png'
import {Box, Button, Typography} from '@mui/material'
// import { theme } from '../styles/muiTheme'
import { useTheme } from '@emotion/react'

export const HomeSection6 = () => {
  const theme = useTheme()
  return (
    <Box sx={{width:'80%',display:'flex',paddingBottom:'100px',flexDirection:{xs : 'column',md:'row'},margin:'0 auto',gap:'20px'}}>
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'20px',flex:'2'}}>
        <Typography component='h2' color={theme.palette.main} 
        sx={{fontFamily:'lato',fontWeight:700,maxWidth:'294px',fontSize:'52px',lineHeight:'65px'}}>
        Buying a home soon?
        </Typography>
        <Typography  sx={{fontFamily:'lato',fontWeight:400,
        maxWidth:'556px',fontSize:'22px',lineHeight:'35px',textAlign:'justify'}}>
        Make sure all the questions asked in this CHECKLIST are answered before you proceed to buy. 
        It saves you money, time, and effort.
        </Typography>
        <Button variant='contained' sx={{backgroundColor:theme.palette.main,borderRadius:'12.16px'
      ,padding:'12px 12px 12px 12px',width:'170px','&:hover' : {bgcolor:`${theme.palette.secondary.main}`}}}>
          Get checklist
        </Button>
        <Typography>
        It is free, short but extremely important
        </Typography>

      </Box>
      <Box sx={{display:'-ms-flexbox',flex:'1'}}>
        <img className='illustrated_img' src={home_img_6} />
      </Box>

    </Box>
  )
}
