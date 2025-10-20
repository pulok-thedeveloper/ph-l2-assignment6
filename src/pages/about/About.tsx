import Cta from "./Cta";
import Hero from "./Hero";
import MissionVision from "./MissionVision";
import Story from "./Story";
import Team from "./Team";
import Values from "./Values";

const About = () => {
    return (
        <div className="flex flex-col">
            <Hero/>
            <Story/>
            <MissionVision/>
            <Values/>
            <Team/>
            <Cta/>
        </div>
    );
};

export default About;