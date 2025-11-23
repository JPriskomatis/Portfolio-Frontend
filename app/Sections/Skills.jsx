"use client";

import OrbitingCircles from "../components/OrbitingCircles"
import { skillsItem } from "../Data/SkillsItemsData";
import { TextAnimate } from '@/components/ui/text-animate';


const Skills = () => {
    return(
        <OrbitingCircles
        circleImages={skillsItem.map(item => item.src)}
        centerComponent={
          <TextAnimate animation="blurIn"
            as="h1" className="text-white text-4xl">
            Let's Work!
          </TextAnimate>
        }
      />
        
    )
}

export default Skills;