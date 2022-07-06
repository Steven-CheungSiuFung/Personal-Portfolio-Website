import Image from "next/image";

import MyText from "../utils/my-text/my-text.component";
import {
  SkillCardContainer,
  SkillCardImageContainer,
  TiltContainer,
} from "./skill-card.styles";
import Spacer from "../utils/spacer/spacer.component";

const SkillCard = ({ item }) => {
  const skillTitle = item[0].toUpperCase() + item.slice(1);
  const skillImageName = item.toLowerCase();
  return (
    <TiltContainer className="Tilt" options={{ max: 25 }}>
      <div className="Tilt-inner">
        <SkillCardContainer>
          <SkillCardImageContainer>
            <Image
              src={`/images/${skillImageName}.png`}
              alt={`${item}-logo`}
              layout="fill"
              objectFit="contain"
            />
          </SkillCardImageContainer>

          <Spacer position={"top"} size={"1.5rem"} />
          <MyText size={"1.5rem"} weight={"500"}>
            {skillTitle}
          </MyText>
        </SkillCardContainer>
      </div>
    </TiltContainer>
  );
};

export default SkillCard;
