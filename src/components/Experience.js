import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Promotion = () => {
  const jobs = data.jobs.map((val)=>
    (<TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <b>{val.title + ' @ ' + val.organization}</b>
        <br/>
        {val.start} <b>-</b> {val.end}
        <br/>
        {val.description.map((val)=>(<p>{val}</p>))}
      </TimelineContent>
    </TimelineItem>)
  );
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.experienceHeading}</h1>
          </Fade>
          
          <Timeline position="alternate">
            {jobs}
          </Timeline>
        
        </div>
      </div>
    </div>
  )
}

export default Promotion
