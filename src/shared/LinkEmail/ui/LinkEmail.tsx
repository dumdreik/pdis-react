import React from "react";
type IEmail = {
    mail:string,
}
export const LinkEmail = ({mail}:IEmail) => {
    return (
        <a href={`mailto:${mail}`}>{mail}</a>
    )
}