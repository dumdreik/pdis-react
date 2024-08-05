import db from "../../../db.json"

interface IAdvantages {
    id:number,
    title:string,
    text:string,
}

export const advantagesItems = () =>{
    const advantagesItems:IAdvantages[] = db["advantages"];
    return advantagesItems;
}