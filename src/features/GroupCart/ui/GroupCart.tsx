import React from "react";

export interface IGroupCart {
    id:number,
    name:string,
    image:string,
    description:string,
}

export const GroupCart = (item:IGroupCart) => {
    return (
        <a className="group_item" href="" key={item.id}>
            <div className="group_item_pic">
                <img src={`/src/data/img/${item.image}`}alt=""/>
            </div>
            <div className="group_item_name">
                {item.name}
            </div>
            <div className="group_item_desc">
                {item.description}
            </div>
        </a>
    )
}