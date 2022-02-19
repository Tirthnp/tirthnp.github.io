import Fade from "react-reveal/Fade"
import data from "../yourdata"
import React from "react"

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Education = () => {
    const education = data.education.map((val)=>
    (<TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <b>{val.organization}</b>
        <br/>
        {val.start} <b>-</b> {val.end}
        <br/>
        {val.credentials}
      </TimelineContent>
    </TimelineItem>)
  );
    return(
        <div className="section" id="education">
            <div className="container">
                <div className="promotion-container">
                    <Fade bottom cascade>
                        <h1>{data.educationHeading}</h1>
                    </Fade>
                    <Timeline position="alternate">
                        {education}
                    </Timeline>
                </div>
            </div>
        </div>
    ) 
}

export default Education;