import { Box, Button, InputAdornment, Link, TextField, Typography, styled } from "@mui/material";
import {AccountCircle, Email, Facebook, Home, Instagram, LinkedIn, Twitter} from '@mui/icons-material';
import { useTheme } from "@emotion/react";
import footer_logo from '/images/on black 1.svg'

const Footer = () => {
const theme = useTheme()

const FooterHeaders = styled(Typography)(
    ({theme})=>(
        {
            color : theme.palette.secondary.main,
            weight : 900,
            fontSize: '32px',
            lineHeight:'15px',
            marginBottom:'20px',
            marginTop:'20px'

        }
    )
)

    return ( 
        <footer className="Footer">
            <Box sx={{display:'flex',flexDirection:'column',gap:'50px',borderRadius: '50px 50px 0px 0px',paddingTop:'90px',paddingBottom:'50px',bgcolor:'#000000',color:'#ffffff'}}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:{xs:'flex-start',md:'space-around'},gap:'50px',flexWrap:'wrap',width:'80%',margin:'0 auto'}}>
                    <img src={footer_logo}/>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'20px',maxWidth:'417px'}}>
                        <Typography sx={{color:`${theme.palette.secondary.main}`}}>NEW TO BUILDMNO?</Typography>
                        <Typography>Subscribe to our newsletter to get update on how to become a
                                    building/real estate expert. 
                        </Typography>
                        <Box >
                        <TextField sx={{bgcolor:'#ffffff',borderRadius:'8px',marginRight:'10px'}} id="input-with-icon-textfield"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Email/>
                            </InputAdornment>
                        ),
                        }}
                        placeholder="Enter E-mail address"
                    />
                    <Button variant="outlined" sx={{height:{xs:'70%',md:'100%'},'&:hover':{color:`${theme.palette.secondary.main}`,
                                                borderColor:`${theme.palette.secondary.main}`} }}>Submit</Button>
                    </Box>
                    
                    </Box>

                    <Box sx={{display:'flex',gap:'13px',height:'max-content'}} >
                        <Box sx={{width:'67px',height:'67px',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',
                        bgcolor:`${theme.palette.secondary.main}`}}>
                            <Home sx={{fontSize:'60px'}}/>
                        </Box>
                        <Box sx={{display:'flex',flexDirection:'column',alignSelf:'center'}}>
                            <Typography sx={{fontWeight:900,fontSize:{sx:'15px',md:'18px'},lineHeight:'15px'}}>Build | Sell | & Own Real Estate</Typography>
                            <Typography sx={{fontWeight:500,fontSize:'14px',lineHeight:'14px'}}>In The Simplest Way Possible.</Typography>
                        </Box>
                    </Box>

                </Box>


                <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},gap:'50px',width:'80%',margin:'0 auto'}}>
                <Box sx={{flex:1,minWidth:'300px',maxWidth:'600px'}}>
                        <FooterHeaders> Quick Links </FooterHeaders>
                        <ul className="footer_ul">
                            <li>Blog</li>
                            <li> Terms of service</li>
                            <li>Ask a question</li>
                            <li>Expert Registration</li>
                            <li>Find a property</li>
                            <li> join the beta test list</li>
                        </ul>
                    </Box>


            <Box sx={{display:'flex',flex:1,justifyContent:'space-between',gap:'20px',flexDirection:{xs:'column',md:'row'}}}>
                <Box sx={{display:'flex',flexDirection:'column'}} >
                    <FooterHeaders>Contact Us</FooterHeaders>
                    <Link type="email" href="mailto:Askbuildmno@gmail.com">Askbuildmno@gmail.com</Link>
                    <Link type="tel" href="tel:+234 81 2884 2622">+234 81 2884 2622</Link>
                </Box>
                <Box>
                    <FooterHeaders>Follow</FooterHeaders>
                    <Box >
                        <Box sx={{display:'flex',gap:'10px'}}><LinkedIn/><Typography>Linkedin</Typography></Box>
                        <Box sx={{display:'flex',gap:'10px'}}><Facebook/><Typography>facebook</Typography></Box>
                        <Box sx={{display:'flex',gap:'10px'}}><Twitter/><Typography>Twitter</Typography></Box>
                        <Box sx={{display:'flex',gap:'10px'}}><Instagram/><Typography>Instagram</Typography></Box>
                    </Box>
                </Box>

                </Box>
                       
                </Box>

     
            </Box>

        </footer>
     );
}
 
export default Footer;