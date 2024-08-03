import {Outlet} from "react-router-dom";
import "./main.scss"
import {HeaderMobileContent} from "../../../../widgets/HeaderMobileContent";
import {HeaderBanner} from "../../../../widgets/HeaderBanner";
import {Footer} from "../../../../widgets/Footer";
export const LayoutMain = () => {
    return (
        <>
            <HeaderMobileContent/>
            <HeaderBanner/>
            <div className="content">
                <Outlet/>
            </div>
            <Footer/>
        </>
)
}