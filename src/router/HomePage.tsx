import ProjectSection from "../sections/ProjectSection";
import { HomeSection } from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";

const HomePage = () => {
  return (
    <>
      {/* Home Section */}
      <HomeSection />

      {/* About Section */}
      <AboutSection />

      {/* ProjectSection */}
      <ProjectSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      {/* <ContactSection /> */}
    </>
  );
};

export default HomePage;
