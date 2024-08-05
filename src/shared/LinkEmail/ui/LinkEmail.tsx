import React from "react";
import {email} from "../model/db.tsx";

export const LinkEmail = () => {
    return (
        <a href={`mailto:${email()}`}>{email()}</a>
    )
}