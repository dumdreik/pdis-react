import React from "react";
type PhoneNumber = {
    phone:string,
}
export const LinkPhone = ({phone}:PhoneNumber) => {
    return (
        <a href={`tel:${phone.split(' ').join('')}`}>{phone}</a>
    )
}