import {Images} from "../../../shared/Image";

export const MainGroup = () => {
    return (
        <section className="group dark_text">
            <div className="section_wrap">
                <div className="block_title">
                    Группа компаний
                </div>
                <div className="group_items">
                    <a className="group_item" href="">
                        <div className="group_item_pic">
                            <img src={Images.Group1} alt=""/>
                        </div>
                        <div className="group_item_name">
                            Point Estate
                        </div>
                        <div className="group_item_desc">
                            Покупка и продажа элитной недвижимости
                        </div>
                    </a>
                    <a className="group_item" href="">
                        <div className="group_item_pic">
                            <img src={Images.Group2} alt=""/>
                        </div>
                        <div className="group_item_name">
                            Point Woodcraft
                        </div>
                        <div className="group_item_desc">
                            Производство эксклюзивной мебели из дерева
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}