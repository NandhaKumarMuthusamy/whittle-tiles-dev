import React from "react";
import PropTypes from "prop-types";
import {range} from "lodash";

import {
  TileFace,
  HBlock,
  VBlock,
  TextBox,
  Badge,
  SvgBox,
  CACHE_STRATEGY,
  useServerAction,
  Box,
} from "@ombiel/cm-tile-sdk";

function CourseBlock({course, ...otherProps}) {
  return (
    <VBlock {...otherProps}>   
      <Box>
        <Badge number={course.days} />
        <SvgBox>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="white" />
          </svg>
        </SvgBox> 
      </Box>              
      <TextBox>{course.title.substring(0,12)}</TextBox>
    </VBlock>
  );
}

CourseBlock.propTypes = {
  course: PropTypes.object,
  courseId: PropTypes.string,
};

function CoursesRow({courses, cols, row, ...otherProps}) {  
  return (
    <HBlock {...otherProps}>
      {        
        range(row * cols,(row + 1) * cols).map((i)=>{
          const course = courses[i];
          if (course) {
            return <CourseBlock course={course} courseId={course.id} key={course.id} />;
          }
          return <VBlock key={row} />;
        })
      }
    </HBlock>
  );
}

CoursesRow.propTypes = {
  courses: PropTypes.array,
  cols: PropTypes.number,
  row: PropTypes.number,
};

export default function Payroll() {

  const [{ responseBody }] = useServerAction(
    "mycourses",
    { cache: CACHE_STRATEGY.NETWORK_FIRST }
  );

  const courses = responseBody || []; 

  console.log("My Courses Dynamic", courses);

  const rows = 2;
  const cols = Math.ceil(courses.length / rows);
 
  return (
    <TileFace             
      backgroundColor="#FFFFFF"
      borderColor="#FFFFFF"
      onClick={null}
    >
      <VBlock>
        <TextBox>Dynamic</TextBox>
        {
          range(0,rows).map((i)=>(
            <CoursesRow row={i} cols={cols} courses={courses} key={i} />
          ))
        }
      </VBlock>
    </TileFace>
  );
}
