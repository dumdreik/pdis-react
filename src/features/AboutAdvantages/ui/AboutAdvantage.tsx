import React from "react";
import {advantagesItems} from "../model/db.tsx";

export const AboutAdvantage = () => {
    return (
        <div className="about_us_right_bottom">
            {advantagesItems().map((item) => {
                return (
                    <div className="about_us_right_bottom_sect" key={item.id}>
                        <span>{item.title}</span>
                        <br/>
                        {item.text}
                    </div>
                )
            })}
        </div>
    )
}