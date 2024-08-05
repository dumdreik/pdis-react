import {Route, Routes} from "react-router-dom";
import {Main} from "../../pages/main";
import {About} from "../../pages/about";
import {Contacts} from "../../pages/contacts";
import {Projects} from "../../pages/projects";
import {Project} from "../../pages/project";
import {LayoutMain} from "../layouts/main";
import {LayoutPage} from "../layouts/page";

export const AppRouter = () => {

    return (
        <Routes>
            <Route
                path='/'
                element={<LayoutMain />}
            >
                <Route index element={<Main />} />
            </Route>
            <Route path='*' element={<LayoutPage />}>
                <Route path='projects'>
                    <Route index element={<Projects />} />
                    <Route
                        path=':projectId'
                        element={<Project />}
                    />
                </Route>
                <Route
                    path='about'
                    element={<About />}
                />
                <Route
                    path='contacts'
                    element={<Contacts />}
                />
            </Route>
        </Routes>
    )
}