import './about.scss'
import {AboutTop} from "../../../widgets/AboutTop";
import {AboutUniq} from "../../../widgets/AboutUniq";
import {AboutProcess} from "../../../widgets/AboutProcess";
import {AboutTeam} from "../../../widgets/AboutTeam";

export const About = () => {
    return (
        <>
                <AboutTop/>
                <AboutUniq/>
                <AboutProcess/>
                <AboutTeam/>
        </>
    )
}