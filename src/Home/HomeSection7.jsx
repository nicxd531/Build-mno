import { useTheme } from '@emotion/react'
import { Box, Divider, Typography, styled } from '@mui/material'
import idowu from '/images/idowu.jpg'
import abiola from '/images/abiola.jpg'
import opeyemi from '/images/opeyemi.jpg'
import React from 'react'

export const HomeSection7 = () => {
    const theme =useTheme()

    const VerticalLine = styled('hr')({
        height:'100%',
        width: '12px',
        marginTop:0,
        // borderWidth:0,
        backgroundColor: '#3C0C61',
        border : '1px solid #3C0C61',
        // borderColor: '#3C0C61',
        borderRadius: '20px',
    })
  return (
    <Box sx={{bgcolor:' #ECECEC',borderRadius:'0 0 50px 50px',paddingBottom:'50px'}}>
        <Box sx={{width:'80%',margin:'0 auto'}}>
            <Box sx={{top:'0',borderRadius:'0 0 12px 12px',bgcolor:theme.palette.main,width:'356px',height:'66px'}}>
                <Typography sx={{fontWeight:900,fontSize:'21px',lineHeight:'25.2px',pt:'21px',pl:'29px',
                                color:' #FFFEFE'
                }}>
                Testimonials
                </Typography>
            </Box>

            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',}} >
                <Box sx={{display:'flex',flexDirection:'column',width:'fit-content',gap:'30px',}}>
                    <Box sx={{display:'flex',gap:'27px',height:'max-content',mt:'47px',}}>
                        {/* <Divider orientation='vertical' flexItem sx={{height:'100%',width:'12px',
                        border:`12px solid ${theme.palette.main}`,borderRadius:'12px', }}/> */}
                        <VerticalLine/>
                        <Typography component='p' color={theme.palette.main} sx={{width:'247px',fontWeight:500,fontSize:'16px',
                            textAlign:'justify',lineHeight:'14px'}}>
                        "You simplify real estate and construction so much that even someone that's not in the 
                        field will understand"

                        </Typography>
                    </Box>
                    <Box sx={{display:'flex',gap:'10px'}}>
                        {/* coming soon */}
                        {/* <Box sx={{width:'67',height:'67'}}> */}
                            <img className='avatar' src={idowu} />
                        {/* </Box> */}
                        <Box sx={{alignSelf:'center'}} >
                            <Typography sx={{fontSize:'18px',fontWeight: 900,
                                lineHeight:'15px',letterSpacing:'0em',textAlign:'left',color:theme.palette.main}}>Idowu</Typography>
                            <Typography sx={{fontSize:'14px',fontWeight: 500,
                                lineHeight:'14px',letterSpacing:'0em',textAlign:'left',color:theme.palette.main}}>
                                    - Builder | Entrepreneur </Typography>
                        </Box>
                    </Box>
                </Box>
                  {/* second testimonial */}

                  <Box sx={{display:'flex',flexDirection:'column',width:'fit-content',gap:'30px',}}>
                    <Box sx={{display:'flex',gap:'27px',height:'max-content',mt:'47px',}}>
                       <VerticalLine/>
                        <Typography component='p' color={theme.palette.main} sx={{width:'247px',fontWeight:500,fontSize:'16px',
                            textAlign:'justify',lineHeight:'14px'}}>
                        "The real estate and construction space has few well-informed content professionals 
                        like you"


                        </Typography>
                    </Box>
                    <Box sx={{display:'flex',gap:'10px'}}>
                        {/* coming soon */}
                        {/* <Box sx={{width:'67',height:'67'}}> */}
                            <img className='avatar' src={opeyemi} />
                        {/* </Box> */}
                        <Box sx={{alignSelf:'center'}} >
                            <Typography sx={{fontSize:'18px',fontWeight: 900,
                                lineHeight:'15px',letterSpacing:'0em',textAlign:'left',color:theme.palette.main}}>Opeyemi</Typography>
                            <Typography sx={{fontSize:'14px',fontWeight: 500,
                                lineHeight:'14px',letterSpacing:'0em',textAlign:'left',color:theme.palette.main}}>
                                    - Web developer | CEO, Nextphase </Typography>
                        </Box>
                    </Box>
                </Box>
                {/* third testimonial */}
                <Box sx={{display:'flex',flexDirection:'column',width:'fit-content',gap:'30px',}}>
                    <Box sx={{display:'flex',gap:'27px',height:'max-content',mt:'47px',}}>
                        <VerticalLine/>
                        <Typography component='p' color={theme.palette.main} sx={{width:'247px',fontWeight:500,fontSize:'16px',
                            textAlign:'justify',lineHeight:'14px'}}>
                        "I appreciate when someone is sound in his profession. You are experienced and 
                        knowledgeable enough for me"

                        </Typography>
                    </Box>
                    <Box sx={{display:'flex',gap:'10px'}}>
                        {/* coming soon */}
                        {/* <Box sx={{width:'67',height:'67'}}> */}
                            <img className='avatar' src={abiola} />
                        {/* </Box> */}
                        <Box sx={{alignSelf:'center'}} >
                            <Typography sx={{fontSize:'18px',fontWeight: 900,
                                lineHeight:'15px',letterSpacing:'0em',textAlign:'left',color:theme.palette.main}}>Abiola Nuga</Typography>
                            <Typography sx={{fontSize:'14px',fontWeight: 500,
                                lineHeight:'14px',letterSpacing:'0em',textAlign:'left',color:theme.palette.main}}>
                                    - Chartered Accountant |  Stockbroker | Realtor </Typography>
                        </Box>
                    </Box>
                </Box>
                   
            </Box> 


        </Box>
    </Box>
  )
}
