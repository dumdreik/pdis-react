import db from "../../../db.json"
import {IGroupCart} from "../../../features/GroupCart/ui/GroupCart.tsx";

export const groupItems = () =>{
    const groupItems:IGroupCart[] = db["groups"];
    return groupItems;
}