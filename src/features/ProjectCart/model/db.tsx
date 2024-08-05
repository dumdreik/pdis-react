import db from "../../../db.json"

export interface IProject {
    id:number,
    previewImage:string,
    name:string,
}

export const projectCarts = () =>{
    const projectCarts:IProject[] = db["projects"];
    return projectCarts;
}