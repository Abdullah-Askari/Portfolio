import { Timeline } from "../components/Timeline";
import { experiences } from "../constants"

const Experiences = () => {
    return (
        <section id="experiences" className="c-space section-spacing">
            <h2 className="text-heading">My Experience</h2>
            <Timeline data={experiences}/>
        </section>
    ) 
}

export default Experiences;