import GreetingSection from "../components/greeting-section/greeting-section.component";
import SkillsSection from "../components/skills-section/skills-section.component";
import ProjectsSection from "../components/projects-section/projects-section.component";

const HomePage = () => {
  return (
    <div>
      <GreetingSection />
      <SkillsSection />
      <ProjectsSection />
      <div>About me</div>
    </div>
  );
};

export default HomePage;
