import {Outlet} from "react-router-dom";
import "./page.scss"
import {Footer} from "../../../../widgets/Footer";
import {HeaderMobileContent} from "../../../../widgets/HeaderMobileContent";
import {HeaderPage} from "../../../../widgets/HeaderPage";

export const LayoutPage = () => {

    return (
        <>
            <HeaderMobileContent/>
            <HeaderPage/>
            <div className="content">
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}