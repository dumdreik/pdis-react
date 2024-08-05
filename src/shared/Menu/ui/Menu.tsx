import React from "react";
import {Link} from "react-router-dom";
import {menuItems} from "../model/db.tsx";

interface ITypeMenu {
    typeMenu:"header"|"footer"|"soc"
}
export const Menu = ({typeMenu}:ITypeMenu) => {
    return (
        <ul>
            {menuItems(typeMenu).map((item)=>{
                return <li key={item.id}>
                    <Link to={item.link}>
                        {item.name}
                    </Link>
                </li>
            })}
        </ul>
    )
}