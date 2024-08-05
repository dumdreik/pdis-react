import db from "../../../db.json"
import {IProject} from "../../../features/ProjectCart/model/db.tsx";


export const projectCart = () =>{
    const projectCarts:IProject[] = db["projects"];
    return projectCarts;
}