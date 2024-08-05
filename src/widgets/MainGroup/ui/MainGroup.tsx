import {groupItems} from "../model/db.tsx";
import {GroupCart} from "../../../features/GroupCart";

export const MainGroup = () => {
    return (
        <section className="group dark_text">
            <div className="section_wrap">
                <div className="block_title">
                    Группа компаний
                </div>
                <div className="group_items">
                    {groupItems().map((item,index) => {
                        return(
                            <GroupCart key={`item_${index}`} name={item.name} description={item.description} id={item.id} image={item.image}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}