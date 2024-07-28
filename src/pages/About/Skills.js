import React from 'react';
import { SKillHR, SKillSp, SkillContainerUl, SkillContainerli, SkillP } from './AboutElements2D';


  
const SkillBars = ({hue, saturation, skills}) => {
   
      
  
      return(  
          <>
            <SKillHR/>
            <SkillContainerUl>
                {skills.map((skill, index) => 
                <SkillContainerli key={skill.type}
                                  style={{   border: `${skill.b}%`, radius: `${skill.br}%`, width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${250 / (index + 3) }%)` }}>
                    <SkillP>
                        {skill.type}
                        <SKillSp class>
                            {skill.level}
                        </SKillSp>
                    </SkillP>
                </SkillContainerli>
            )}
            </SkillContainerUl>
        </>
  
      );
    }


export default SkillBars;