import db from "../../../db.json"

interface IMenu {
    id:number,
    name:string,
    link:string,
}

export const menuItems = (typeMenu:string) =>{
    const keyTyped = typeMenu as keyof typeof db["menu"];
    const menuItems:IMenu[] = db["menu"][keyTyped];
    return menuItems;
}