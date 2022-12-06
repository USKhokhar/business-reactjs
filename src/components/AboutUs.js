import React, {useState} from 'react'
import Sidebar from './Sidebar'
import { Accordion, AccordionSummary, AccordionDetails , Typography, Stack } from '@mui/material'

function AboutUs() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <section>
        <Sidebar />
        <main>
            <h1>About Us</h1>
            <Stack spacing={2} style={{
              width: '80%',
              maxWidth: '600px',
              margin: 'auto',
              marginTop: '10%'
            }}> 
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon='↓'
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            FAQ
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>click here to know more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptatem quia fuga modi alias similique tempore suscipit fugiat placeat repudiandae, inventore earum repellat beatae saepe omnis sunt nisi, cumque asperiores minima consequatur mollitia voluptate, dolores nam! Quasi quas cum deleniti.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </Stack>
        </main>
    </section>
  )
}

export default AboutUs