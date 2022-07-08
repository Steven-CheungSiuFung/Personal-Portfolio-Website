import SkillCard from "../skill-card/skill-card.component";
import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";

import {
  SkillsSectionContainer,
  SkillsSectionTitle,
  SkillsListContainer,
} from "./skills-section.styles";

const SkillsSection = () => {
  const skills = [
    { title: "HTML", description: "HTML 5" },
    { title: "CSS", description: "CSS 3" },
    { title: "javascript", description: "ES12" },
    { title: "react.js", description: "Front-end Library" },
    { title: "next.js", description: "Full-stack Framework" },
    { title: "node.js", description: "Back-end Runtime" },
    { title: "express.js", description: "Sever Framework" },
    { title: "mongoDB", description: "Database" },
  ];

  return (
    <SkillsSectionContainer>
      <SkillsSectionTitle>
        <MyText size={"2rem"} weight={"500"}>
          Main Skills /
        </MyText>
        <Spacer position={"right"} size={"0.5rem"}></Spacer>
        <Spacer position={"top"} size={"0.3rem"}>
          <MyText size={"1.5rem"} weight={"500"} color={"gray"}>
            MERN Stack / Next.js
          </MyText>
        </Spacer>
      </SkillsSectionTitle>
      <Spacer position={"top"} size={"5rem"}></Spacer>
      <SkillsListContainer>
        {skills.map((skill, index) => (
          <SkillCard key={index} item={skill} />
        ))}
      </SkillsListContainer>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
