import React from "react";
import {Link} from "react-router-dom";

interface Item {
    id:number,
    link:string,
    name:string,
}

export const Menu:React.FC<{Items:Item[]}> = ({Items}) => {
    return (
        <ul>
            {Items.map((item:Item)=>{
                return <li key={item.id}>
                    <Link to={item.link}>
                        {item.name}
                    </Link>
                </li>
            })}
        </ul>
    )
}