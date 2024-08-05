import React from "react";
import {phone} from "../model/db.tsx";
export const LinkPhone = () => {
    return (
        <a href={`tel:${phone().split(' ').join('')}`}>{phone()}</a>
    )
}