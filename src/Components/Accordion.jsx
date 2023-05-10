import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';

export default function SimpleAccordion() {
  const theme =useTheme();
  return (
    <div>
      <Accordion sx={{bgcolor:theme.palette.main,color:'#ffffff',borderBottom:'0.75px solid #ffffff',}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#ffffff'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is BuildMNO?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Typography>
          It is an all-in-one platform where Nigerians can find verified properties, 
          hire real estate professionals, and learn how to not fall victim to property scams 
          rampant in Nigeria..
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* second accordion */}
      <Accordion sx={{bgcolor:theme.palette.main,color:'#ffffff',borderBottom:'0.75px solid #ffffff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#ffffff'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Who is BuildMNO for? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Buildmno is for people who know little or nothing about real estate & Construction so that 
          they don't fall into the wrong hands and make it easier to do anything to real estate. 
          It is also for professionals to get multiple potential clients and market trends.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* thid accordion */}
      <Accordion sx={{bgcolor:theme.palette.main,color:'#ffffff',borderBottom:'0.75px solid #ffffff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#ffffff'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Why should I trust you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The team behind BuildMNO is certified and experienced real estate agents,  
          construction professionals, and evangelists of the "Build Right" initiative. 
          Recognized across professional bodies and forums like MNIOB, UVRG, BRG, ACE, FDR, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}