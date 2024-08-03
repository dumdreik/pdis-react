import React from "react";
interface Item {
    id:number,
    title:string,
    text:string,
}

export const AboutAdvantage:React.FC<{Items:Item[]}> = ({Items}) => {
    return (
        <div className="about_us_right_bottom">
            {Items.map((item: Item) => {
                return <div className="about_us_right_bottom_sect" key={item.id}>
                    <span>{item.title}</span><br/>{item.text}
                    </div>
            })}
        </div>
    )
}