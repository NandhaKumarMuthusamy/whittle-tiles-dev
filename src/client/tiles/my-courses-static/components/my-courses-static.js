import React from "react";
import PropTypes from "prop-types";

import {
  Tile,
  TileBoard,
  TileFace,
  HBlock,
  Box,
  VBlock,
  TextBox,
  SvgBox,  
  useTileProps,
  useServerAction,
  CACHE_STRATEGY,
} from "@ombiel/cm-tile-sdk";

function CourseBlock({course, fontSize, url, ...otherProps}) {
  
  return ( 
    <VBlock {...otherProps}>  
      <Box>    
        <SvgBox>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#9ec597" />
            <circle cx="90" cy="67" r="20" fill="#cf542a" />
            <text x="75" y="75" fill="white" fontSize="25" fontWeight="bold" verticalAlign="center">{course.announcementcount}</text>
          </svg>
        </SvgBox>
      </Box>    
      <TextBox minFontSize={fontSize} maxFontSize={fontSize}>{course.title.substring(0,12)}</TextBox>
    </VBlock>  
  );
}

CourseBlock.propTypes = {
  course: PropTypes.object,
  fontSize: PropTypes.number,
  url: PropTypes.string,
};

export default function Payroll() {

  const tileProps = useTileProps();
  const {content: {text,image,icon}} = tileProps;

  const [{ responseBody }] = useServerAction(
    "mycourses",
    { cache: CACHE_STRATEGY.NETWORK_FIRST }
  );

  const courses = responseBody || [];

  console.log("My Courses Static", responseBody);

  const fontSize = 12;

  if (courses.length === 0) {
    return (
      <Tile>
        <TileBoard>
          <TileFace 
            key={`${text}_${image}`} 
            image={image} 
            icon={icon}
            text={text}
            backgroundColor="#FFFFFF"
            borderColor="#FFFFFF"
            onClick={null}
          />
        </TileBoard>
      </Tile>
    );
  }

  return (
    <Tile>
      <TileBoard>
        <TileFace 
          key={`${text}_${image}`} 
          image={image} 
          icon={icon}          
          backgroundColor="#FFFFFF"
          borderColor="#FFFFFF"          
          onClick={null}
        >  
          {courses[0] ? (            
            <VBlock divider={[1]} backgroundColor="#FFFFFF">
              <HBlock divider={[1]} backgroundColor="#FFFFFF">                 
                <CourseBlock course={courses[0]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[0].id}`} />           
                
                {courses[1] ? (
                  <CourseBlock course={courses[1]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[1].id}`} />
                ) : (
                  <VBlock />
                )}
                {courses[2] ? (
                  <CourseBlock course={courses[2]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[2].id}`} />
                ) : (
                  <VBlock />
                )}
                {courses[3] ? (
                  <CourseBlock course={courses[3]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[3].id}`} />
                ) : (
                  <VBlock />
                )}
              </HBlock>
              {courses[4] ? (
                <HBlock divider={[1]} backgroundColor="#FFFFFF">
                  <CourseBlock padding={[0, 0, 5]} borderColor="#8babb7" course={courses[4]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[4].id}`} />
                  
                  {courses[5] ? (
                    <CourseBlock padding={[0, 0, 5]} borderColor="#8babb7" course={courses[5]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[5].id}`} />
                  ) : (
                    <VBlock />
                  )}
                  {courses[6] ? (
                    <CourseBlock padding={[0, 0, 5]} borderColor="#8babb7" course={courses[6]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[6].id}`} />
                  ) : (
                    <VBlock />
                  )}
                  {courses[7] ? (
                    <CourseBlock padding={[0, 0, 5]} borderColor="#8babb7" course={courses[7]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[7].id}`} />
                  ) : (
                    <VBlock />
                  )}
                </HBlock>
              ) : (
                <HBlock />
              )}
            </VBlock>
          ) : ( 
            <VBlock>
              <TextBox color="#cf542a">My Courses</TextBox> 
            </VBlock>
          )}
        </TileFace>
      </TileBoard>
    </Tile>
  );
}
