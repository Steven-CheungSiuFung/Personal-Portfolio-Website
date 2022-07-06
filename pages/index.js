import GreetingSection from "../components/greeting-section/greeting-section.component";
import SkillsSection from "../components/skills-section/skills-section.component";

const HomePage = () => {
  return (
    <div>
      <GreetingSection />
      <SkillsSection />
      <div>Projects</div>
      <div>About me</div>
    </div>
  );
};

export default HomePage;
